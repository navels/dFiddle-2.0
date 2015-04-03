define([], function () {

  var settings = {
    text : 'FOO',
    obj : { text : 'BAR' }
  };

  return {
    settings : settings,

    changeText : function() {
      settings.text = settings.text === 'FOO' ? 'foo' : 'FOO';
    },

    changeObjText : function() {
      settings.obj.text = settings.obj.text === 'BAR' ? 'bar' : 'BAR';
    }
  };
});