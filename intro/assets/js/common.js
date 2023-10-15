//전체 메뉴
$(document).ready(function() {
    $('.nav_all_btn').on('click', function(e) {
        e.stopPropagation();

        if($(this).hasClass('active')) {
            $(this).removeClass('active');
			$('#header').removeClass('active');
            $('.nav_all').css('display', 'none');
        } else {
            $(this).addClass('active');
			$('#header').addClass('active');
            $('.nav_all').css('display', 'block');
        }
    });

    $('.nav_close').on('click', function(e) {
        e.stopPropagation(); 
        $('.nav_all_btn').removeClass('active');
        $('.nav_all').css('display', 'none');
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.nav_all, .nav_close, .nav_all_btn').length) {
            $('.nav_all_btn').removeClass('active');
            $('.nav_all').css('display', 'none');
        }
    });
});

$(document).ready(function(){
    $(".nav_cnt > ul > li > a").on("click", function(e) {
        var currentSubmenu = $(this).next("ul");
        if(currentSubmenu.length) {
            e.preventDefault(); 
            if(currentSubmenu.hasClass("active")) {
                currentSubmenu.removeClass("active");
            } else {
                $(".nav_cnt > ul > li > ul").removeClass("active");
                currentSubmenu.addClass("active");
            }
        }
    });
});

//푸터 family sites
$(".family_sites_open").on("click", function(e) {
	e.stopPropagation();
	$(this).toggleClass("active");
	$(".sites").toggle();
});
$(document).on("click", function(event) {
	var $trigger = $(".family_sites");
	if($trigger !== event.target && !$trigger.has(event.target).length) {
		$(".family_sites_open").removeClass("active");
		$(".sites").hide();
	}    
});

//상단으로 버튼
$('.to_top').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});

//웹메뉴얼 tap
$(document).on("click", ".pop_taps_btn a", function () {
	let tap_index = $(this).index();
	$('.pop_taps_btn a').removeClass('active');
	$(this).addClass('active');
	$('.pop_taps_cnt .tap_box').hide();
	$('.pop_taps_cnt .tap_box').eq(tap_index).show();
});