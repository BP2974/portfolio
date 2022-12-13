$(document).ready(function(){
    
    /* aos 캐쉬 */
    AOS.init({
        once: true,
    });
    $(window).on('load', function () {
        AOS.refresh();
    });


    $('.hamburger_btn').click(function() {
          $('.hamburger_menu').toggleClass('open');
          $('nav').toggleClass('open');
    })
    $('nav a').click(function(){
        $('.work_info').hide('fast');
    })


    const content1 = document.querySelector('.content1')
    const content3 = document.querySelector('.content3')
    const path1 = document.querySelector('.path1')
    const path2 = document.querySelector('.path2')
    const path1Length = path1.getTotalLength()
    const path3Length = path2.getTotalLength()


    path1.style.strokeDasharray  = path1Length
    path1.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.6, content1, path1Length)

    path2.style.strokeDasharray  = path3Length
    path2.style.strokeDashoffset = calcDashoffset(window.innerHeight * 0.6, content3, path3Length)

    function calcDashoffset(scrollY, element, length) {
        const ratio = (scrollY - element.offsetTop) / element.offsetHeight
        const value = length - (length * ratio)
        return value < 0 ? 0 : value > length ? length : value
    }

    function scrollHandler() {
        const scrollY = window.scrollY + (window.innerHeight * 0.6)
        path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length)
        path2.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)
    }

    window.addEventListener('scroll', scrollHandler)
    window.addEventListener('scroll', function(){

        const ratio1 = 1/1920 * window.innerWidth;
        let win_scroll = $(window).scrollTop()*ratio1
        const footer_top = document.querySelector('footer').offsetTop;
        console.log(win_scroll)
        console.log(document.querySelector('footer').offsetTop)

        if(win_scroll >= 600 * ratio1)
        {
            for(let i = 1; i < 4; i++){
                $('.profile_path'+i).css('stroke-dashoffset', '0')
            }
        }
        if(win_scroll >= 700 * ratio1)
        {
            for(let i = 4; i < 6; i++){
                $('.profile_path'+i).css('stroke-dashoffset', '0')
            }
        }
        if(win_scroll < 8491 * ratio1) {
            for(let i = 1; i < 11; i++){
                $('.footer_text'+i).css('opacity', '0')
            }
        }
        if(win_scroll >= 8491 * ratio1)
        {   
            for(let i = 1; i < 11; i++){
                $('.footer_text'+i).delay(70*i).queue(function(){$(this).css({'opacity': '1', 'transition': 'opacity .2s'}); $(this).dequeue();});
            }
        }
    })

    $('.skill_tab li').click(function(){
        const index = $(this).index();

        $('.skill_tab li').removeClass('active');
        $(this).addClass('active');
        
        $('.skill_con li').removeClass('active');
        $('.skill_con li').eq(index).addClass('active');

        for(let i = 1; i < 10; i++){
            $('.skill'+i).css('opacity', '0');
            $('.skill'+i).delay(70*i).queue(function(){$(this).css({'opacity': '1', 'transition': 'opacity .3s'}); $(this).dequeue();})
            $('.skill'+i).css('transition', 'none');
        }
    });

    for(let i = 0; i < 4; i++){
        $('.work_img').eq(i).mouseover(function(){
            $('.work_img img').eq(i).css('filter', 'brightness(30%) blur(1px)')
            $('.work_simple').eq(i).css('display', 'block')
        })
        $('.work_img').eq(i).mouseleave(function(){
            $('.work_img img').eq(i).css('filter', 'none')
            $('.work_simple').eq(i).css('display', 'none')
        })
        $('.work_img').eq(i).click(function(){
            $('.work_info').eq(i).show('fast');
        })
        $('.back_btn').eq(i).click(function(){
            $('.work_info').eq(i).hide('fast');
        })
    }

})
    

