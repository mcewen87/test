
    $(document).ready(function(){
        $(window).scroll(function(){
          var nav =  $('.nav-bar');
            if ($(this).scrollTop() > 200) {
                  nav.addClass('show');
            } else {
              nav.removeClass('show');
            }
        });
    });
