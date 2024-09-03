(function($) {
    "use strict";
    $.fn.counterUp = function(options) {
        var settings = $.extend({
            time: 400,
            delay: 10
        }, options);

        return this.each(function() {
            var $this = $(this);
            var target = parseInt($this.data('target'), 10);
            var divisions = settings.time / settings.delay;
            var increment = target / divisions;
            var isComma = /[0-9]+,[0-9]+/.test($this.text());
            var nums = [];

            for (var i = 1; i <= divisions; i++) {
                var newNum = Math.round(increment * i);
                if (isComma) {
                    newNum = newNum.toLocaleString();
                }
                nums.push(newNum);
            }

            $this.data('counterup-nums', nums);
            $this.text('0');

            var f = function() {
                $this.text($this.data('counterup-nums').shift());
                if ($this.data('counterup-nums').length) {
                    setTimeout($this.data('counterup-func'), settings.delay);
                } else {
                    $this.text(target + '+'); 
                    delete $this.data('counterup-nums');
                    $this.data('counterup-nums', null);
                    $this.data('counterup-func', null);
                }
            };

            $this.data('counterup-func', f);
            setTimeout($this.data('counterup-func'), settings.delay);
        });
    };
})(jQuery);

$(document).ready(function() {
    $('.counterUp').counterUp({
        delay: 5,
        time: 3000 
    });
});
