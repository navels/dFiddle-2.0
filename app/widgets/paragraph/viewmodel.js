define([], function () {

  function ctor() {
  }

  ctor.prototype = {

    activate : function( settings ) {
      this.settings = settings;
      alert('activating widget');
    }

  };

  return ctor;

});