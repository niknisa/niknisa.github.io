$(document).ready(function() {

// jQuery Function Number 1,2,3 - click(), hide(), fadeIn()

$("#experiences").click(function() {
	$("#right-side1").hide();
	$("#right-side2").fadeIn();
});

$("#projects").click(function() {
	$("#right-side1").hide();
	$("#right-side3").fadeIn();
});

$("#resume").click(function() {
	$("#right-side1").hide();
	$("#right-side4").fadeIn();
});

// jQuery Function Number 4,5,6 - hover(), css(), attr()

let last_hovered = "#info-1"

$(".job").hover(function() {
	$(this).css("background-color","#95989A");
	$(this).css("color", "white");
	$("#left-side1").hide();

	last_hovered = ".ls-container2-" + $(this).attr("id");

	$(last_hovered).fadeIn();

}, function() {
	$(this).css("background-color","white");
	$(this).css("color", "#95989A");
	$(last_hovered).hide();
	$("#left-side1").show();
	$("#left-side1").css("z-index", "999")
	});

// jQuery Function Number 7 - show()

$("#back1").click(function() {
	$("#right-side3").hide();
	$("#right-side1").show();
	$("#left-side1").show();
	$("#left-side1").css("z-index", "999");
});

$("#back2").click(function() {
	$("#right-side4").hide();
	$("#right-side1").show();
	$("#left-side1").show();
	$("#left-side1").css("z-index", "999");
});

$("#projects2").click(function() {
	$("#right-side2").hide();
	$("#right-side3").fadeIn();
});

$("#resume2").click(function() {
	$("#right-side2").hide();
	$("#right-side4").fadeIn();
});

})
