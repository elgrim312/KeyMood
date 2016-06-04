$(document).ready(function(){
    var alert = false;
    var input = '';
    $('.navButton').click(function(){
        event.preventDefault();
        if(input != ''){
            $('form').submit();
        }else{
            alert = true;
            $('.alert').fadeIn(500);
            $('form').css('opacity','0.2');
            $('html').removeClass('nojQuery');
            $('input[type="radio"],input[type="text"]').attr('disabled',true)
        }
    });
    $('.exitAlert').click(function(){
            alert = false;
            $('.alert').fadeOut(200);
            $('form').css('opacity','1');
            $('html').addClass('nojQuery');
            $('input[type="radio"],input[type="text"]').attr('disabled',false)
    });
    $('#interface').find('input[type="radio"]+label').click(function(){
        if(!alert) {
            $('#interface').find('input[type="text"]').each(function () {
                $(this).val('');
                input = 'radio';
                $('.interfaceLeft').addClass('disabled');
                $('.interfaceRight').removeClass('disabled');
            });
        }
    });
    $('#interface').find('input[type="text"]').click(function(){
        if(!alert) {
            $('#interface').find('input[type="radio"]').each(function () {
                $(this).prop('checked', false);
                input = 'text';
                $('.interfaceRight').addClass('disabled');
                $('.interfaceLeft').removeClass('disabled');
            });
        }
    });
        $(document).on({
            mouseenter: function () {
                if(!alert) {
                    if ($('.interfaceRight').hasClass('disabled') && input == 'text') {
                        $('.interfaceRight').removeClass('disabled');
                        $('.interfaceLeft').addClass('disabled')
                    } else if (input == '') {
                        $('.interfaceLeft').addClass('disabled')
                    }
                }
            },
            mouseleave: function () {
                if(!alert) {
                    if (!$('.interfaceRight').hasClass('disabled') && input == 'text') {
                        $('.interfaceRight').addClass('disabled');
                        $('.interfaceLeft').removeClass('disabled')
                    } else if (input == '') {
                        $('.interfaceLeft').removeClass('disabled')
                    }
                }
            }
        }, '.interfaceRight>ul');
    $(document).on({
        mouseenter: function () {
            if(!alert) {
                if ($('.interfaceLeft').hasClass('disabled') && input == 'radio') {
                    $('.interfaceLeft').removeClass('disabled');
                    $('.interfaceRight').addClass('disabled')
                } else if (input == '') {
                    $('.interfaceRight').addClass('disabled')
                }
            }
        },
        mouseleave: function () {
            if(!alert) {
                if (!$('.interfaceLeft').hasClass('disabled') && input == 'radio') {
                    $('.interfaceLeft').addClass('disabled');
                    $('.interfaceRight').removeClass('disabled')
                } else if (input == '') {
                    $('.interfaceRight').removeClass('disabled')
                }
            }
        }
    }, '.inputsText');
});
