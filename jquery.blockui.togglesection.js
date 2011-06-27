// toggleSection
//
// disables all sections below the (this) element
//
// requires jquery.blockUI plugin
//   http://jquery.malsup.com/block
//
// params : parameters to give to blockUI

(function( $ ){

  $.fn.toggleSection = function(params) {
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
    
  };

})( jQuery );
