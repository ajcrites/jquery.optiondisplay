/**
 * Option display plugin
 * Options are iterated over individually so that only those with
 * the containerSelector parent are unwrapped.  Otherwise, the
 * `<select>`, `<datalist>`, etc. could be unwrapped.
 *
 * The selected items could have disparate parents as well, and
 * the parent may not be known
 *
 * The element is also disabled as "hidden" options can remain selected
 */
;(function ($, window, document, undefined) {
    /**
     * selector/element declaration for containing span that acts as the hider
     */
    var containerSelector = "span[data-option-container]",
        containerElement = '<span data-option-container=true style="display: none;">';

    /**
     * Display the option
     */
    $.fn.showOption = function () {
        return this.filter("option").show().prop('disabled', false).each(function () {
            var $this = $(this);
            if ($this.parent(containerSelector).length) {
                $this.unwrap();
            }
        });
    };

    /**
     * Hide the option
     */
    $.fn.hideOption = function () {
        return this.filter("option").hide().prop('disabled', true).each(function () {
            var $this = $(this);
            if (!$this.parent(containerSelector).length) {
                $this.wrap(containerElement);
            }
        });
    };

    /**
     * Toggle option based on state
     */
    $.fn.toggleOption = function () {
        return this.filter("option").each(function () {
            var $this = $(this);
            if ($this.parent(containerSelector).length) {
                $this.unwrap().show().prop('disabled', false);
            }
            else {
                $this.wrap(containerElement).hide().prop('disabled', true);
            }
        });
    };
})(jQuery, window, document);
