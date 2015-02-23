define(['dojo/_base/declare', 'jimu/BaseWidget'],
function(declare, BaseWidget) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'res-widge',
    // this property is set by the framework when widget is loaded.
    // name: 'ResWidge',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('ResWidge::postCreate');
    }

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('ResWidge::startup');
    // },

    // onOpen: function(){
    //   console.log('ResWidge::onOpen');
    // },

    // onClose: function(){
    //   console.log('ResWidge::onClose');
    // },

    // onMinimize: function(){
    //   console.log('ResWidge::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('ResWidge::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('ResWidge::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('ResWidge::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('ResWidge::onPositionChange');
    // },

    // resize: function(){
    //   console.log('ResWidge::resize');
    // }

//methods to communication between widgets:

  });

});
