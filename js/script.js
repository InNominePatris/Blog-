! function(o) {
    "use strict";
    o('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = o(this.hash);
            if ((a = a.length ? a : o("[name=" + this.hash.slice(1) + "]")).length) return o("html, body").animate({
                scrollTop: a.offset().top - 70
            }, 1e3, "easeInOutExpo"), !1
        }
    }), o(document).scroll(function() {
        o(this).scrollTop() > 100 ? o(".scroll-to-top").fadeIn() : o(".scroll-to-top").fadeOut()
    }), o(".js-scroll-trigger").click(function() {
        o(".navbar-collapse").collapse("hide")
    }), o("body").scrollspy({
        target: "#mainNav",
        offset: 80
    });
    var a = function() {
        o("#mainNav").offset().top > 100 ? o("#mainNav").addClass("navbar-shrink") : o("#mainNav").removeClass("navbar-shrink")
    };
    a(), o(window).scroll(a), o(function() {
        o("body").on("input propertychange", ".floating-label-form-group", function(a) {
            o(this).toggleClass("floating-label-form-group-with-value", !!o(a.target).val())
        }).on("focus", ".floating-label-form-group", function() {
            o(this).addClass("floating-label-form-group-with-focus")
        }).on("blur", ".floating-label-form-group", function() {
            o(this).removeClass("floating-label-form-group-with-focus")
        })
    })
}(jQuery);

//Validate form

/*

$(document).ready(function() {
    $('#contactForm').validate({
      rules: {
          name: {
              required: true,
          },
          email: {
              required: true,
          },
          phone: {
              required: true,
          },
          message: {
              required: true,
          },
      }
  });

    $('#contactForm input').on('keyup blur', function() {
        if ($('#contactForm').valid()) {
            $('#sendMessageButton').prop('disabled', false);
        } else {
          $('#sendMessageButton').prop('disabled', 'disabled');
        }
    });
});

*/

//SEND EMAIL FORM

$(function () {
    var 
        data = {},
        $form = $('#contactForm'),
        $name = $('#name'),
        $replyTo = $('#email'),
        $phone = $('#phone'),
        $message = $('#message'),
        action = $form.prop('action');

    $form.submit(function () {
        data.name = $name.val();
        data.replyTo = $replyTo.val();
        data.$phone = $phone.val();
        data.message = $message.val();

        $.ajax({
            url: action, 
            method: 'POST',
            data: data, 
            dataType: 'json',
            success: function () {
                toastr.success('Thanks for sending your message.', 'Have fun!');
                $message.val('');
            },
            error: function() {
                toastr.error('Sorry, an error occurred!');
                $message.val('');
            }
        });

        event.preventDefault();

        $('#contactForm').trigger('reset');

        $('#contactForm').val();
    });
});