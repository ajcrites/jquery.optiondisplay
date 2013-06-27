/**
 * Option display plugin
 */
;(function ($, window, document, undefined) {
    var containerSelector = "span[data-option-container]",
        containerElement = '<span data-option-container=true style="display: none;">';
    $.fn.showOption = function () {
        return this.show().each(function () {
            var $this = $(this);
            if ($this.parent(containerSelector).length) {
                $this.unwrap();
            }
        });
    };
    $.fn.hideOption = function () {
        return this.hide().each(function () {
            var $this = $(this);
            if (!$this.parent(containerSelector).length) {
                $this.wrap(containerElement);
            }
        });
    };
    $.fn.toggleOption = function () {
       return this.each(function () {
            var $this = $(this);
            if ($this.parent(containerSelector).length) {
               $this.unwrap();
            }
            else {
               $this.wrap(containerElement);
            }
       }
    };
})(jQuery, window, document);
