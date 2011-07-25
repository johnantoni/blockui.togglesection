// toggleSection
//
// disables all sections below the (this) element
//
// requires jquery.blockUI plugin
//   http://jquery.malsup.com/block
//
// params : parameters to give to blockUI
// callback : plugin callback
//
// delaySlide : milliseconds to delay slideopen effect
// affectOnly : affect only certain elements (e.g. section elements and not footer), e.g. "section, .advert"
//
// author: John Griffiths
// version: 0.3.1

(function( $ ){

  $.fn.toggleSection = function(params, callback) {
    var el = this; // get element

    // set default params (no message), merging with ones given
    // ...also augment toggle to include delay on slideDown
    var params = $.extend({ message: null, delaySlide: 0, affectOnly: "" }, params);

    if (el.is(":hidden")) {
      // slide down instructions then block preceeding sections
      el.nextAll(params.affectOnly).block(params)
        .end()
        .delay(params.delaySlide).slideDown('slow', 'linear');
    }
    
    else {
      // unblock proceeding sections then slide up instructions
      el.nextAll(params.affectOnly).unblock()
        .end()
        .slideUp('slow', 'linear');

    }
    
    // allow the plugin to support callbacks
    if (typeof callback == 'function') {
        callback.call(this);
    }
    
  };

})( jQuery );
