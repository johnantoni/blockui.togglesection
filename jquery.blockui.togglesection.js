// toggleSection
//
// disables all sections below the (this) element
//
// requires jquery.blockUI plugin
//   http://jquery.malsup.com/block
//
// params : parameters to give to blockUI
// callback : plugin callback

(function( $ ){

  $.fn.toggleSection = function(params, callback) {
    var el = this; // get element

    // set default params (no message), merging with ones given
    var params = $.extend({ message: null }, params);  

    if (el.is(":hidden")) {
      // slide down instructions then block preceeding sections
      el.slideDown('slow', 'linear')
        .nextAll().block(params);
    }
    
    else {
      // unblock proceeding sections then slide up instructions
      el.nextAll().unblock()
        .end()
        .slideUp('slow', 'linear');

    }
    
    // allow the plugin to support callbacks
    if (typeof callback == 'function') {
        callback.call(this);
    }
    
  };

})( jQuery );
