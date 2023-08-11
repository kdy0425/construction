//전체 메뉴
const navAllBtn = document.querySelector('.nav_all_btn');
const nav = document.querySelector('#nav');
navAllBtn.addEventListener('click', function () {
	nav.classList.toggle('active');
	navAllBtn.classList.toggle('active');
});
const body = document.querySelector('body');
body.addEventListener('click', function (event) {
	if (event.target.closest('.hd_bottom') || event.target.closest('#nav') || event.target.closest('.nav_all_btn')) {
		return;
	}
	nav.classList.remove('active');
	navAllBtn.classList.remove('active');
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
