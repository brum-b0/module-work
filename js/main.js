function close_popup()
{
	$("#hide_page").fadeOut(800);
	$("#pop_up").slideUp();
}

function open_popup(variable)
{
	img = document.getElementById("pop_upimg");
	img.src = variable.src;
	
	$("#pop_up").animate({
		left: '50%'
	});
	
	$("#hide_page").fadeIn();
	$("#pop_upimg").fadeIn();
	$("#pop_up").slideDown();
}

$(document).ready(function(){
	
	$("img").click(function(){
		open_popup(this);
	});
	
});
