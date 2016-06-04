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
                    var actual = '.interfaceRight';
                    var other = '.interfaceLeft';
                    var inputValue = 'text';
                    if ($(this).hasClass('inputsText')) {
                        actual = '.interfaceLeft';
                        other = '.interfaceRight';
                        inputValue = 'radio';
                    }
                    if ($(actual).hasClass('disabled') && input == inputValue) {
                        $(actual).removeClass('disabled');
                        $(other).addClass('disabled')
                    } else if (input == '') {
                        $(other).addClass('disabled')
                    }
                }
            },
            mouseleave: function () {
                if(!alert) {
                    var actual = '.interfaceRight';
                    var other = '.interfaceLeft';
                    var inputValue = 'text';
                    if ($(this).hasClass('inputsText')) {
                        actual = '.interfaceLeft';
                        other = '.interfaceRight';
                        inputValue = 'radio';
                    }
                    if ($(actual).hasClass('disabled') && input == inputValue) {
                        $(actual).addClass('disabled');
                        $(other).removeClass('disabled')
                    } else if (input == '') {
                        $(other).removeClass('disabled')
                    }
                }
            }
        }, '.interfaceRight>ul,.inputsText');
});
