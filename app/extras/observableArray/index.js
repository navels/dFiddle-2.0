define(['plugins/observable'], function(observable) {

  var ctor = function() {
    this.obj = {};
    this.arr1 = [];
    this.arr2 = [];
    this.arr3 = [];
  };

  ctor.prototype = {

    bindingComplete : function() {

      // Here, 'this' is observable, bound to the view, with some subscriptions that will update the
      // view if this.arr1 or this.arr2 changes.

      // Create a new one of these objects
      var newObj = {};
      newObj.arr1 = [0];
      newObj.arr2 = [0];
      newObj.arr3 = [0];

      // newObj.arr1 is a plain non-observable array.  Under the hood, it is converted during this assignment to an
      // observable with special array functions via makeObservableArray.  Those function ensure that this.arr1's
      // valueHasMutated(), etc., get called when appropriate.
      this.arr1 = newObj.arr1;

      // Now make newObj observable.
      observable.convertObject( newObj );

      // So newObj.arr2 is now an observable array, so makeObservableArray doesn't get called on it below.
      // Therefore, this.arr2 will pick up newObj.arr2's special array functions and so when it mutates later, it will
      // call valueHasMutated() on newObj.arr2's observable, not this.arr2's observable, missing out on the UI
      // subscriptions.
      this.arr2 = newObj.arr2;

      // But slice returns a non-observable copy, so this is a workaround:
      this.arr3 = newObj.arr3.slice();
    },


    add : function() {
      this.arr1.push( this.arr1.length );
      this.arr2.push( this.arr2.length );
      this.arr3.push( this.arr3.length );
    }

  };

  return ctor;
});