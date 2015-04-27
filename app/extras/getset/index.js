define([], function() {

  var ctor = function() {
    this.theCount = 0;
  };

  ctor.prototype = {

    get count() {
      return this.theCount;
    },

    set count( val ) {
      this.theCount = val;
      alert( this.count );
    },

    increment : function() {
      this.theCount = this.theCount + 1;
    },

    reset : function() {
      this.count = 0;
    }

  };

  return ctor;
});