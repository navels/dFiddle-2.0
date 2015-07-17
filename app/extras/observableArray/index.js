define(['plugins/observable'], function(observable) {

  var ctor = function() {
    this.x = { arr: [] };
    this.y = { arr: [] };
  };

  ctor.prototype = {

    bindingComplete : function() {
      this.x.arr = this.y.arr;
    },


    add : function() {
      this.x.arr.push( 0 );
    }

  };

  return ctor;
});