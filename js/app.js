// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
};

//
window.onscroll = function() {
	updateSliderControl();
}
// logo 
function animateLogo() {
	TweenMax.fromTo(".react-logo", 2, {
		css: {
			y: "-20px",
		}
	}, {
		css: {
			y: "20px",
		},
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	});
}
// robot
function animateRobot() {
	var t = new TimelineMax({yoyo: false, repeat: -1});
	t.to("#android-robot", 1, {rotation: "-=15deg"})
	.to("#android-robot", 1, {rotation: "+=30deg"})
	.to("#android-robot", 1, {rotation: "-=15deg"});
}
//
function updateSliderControl() {
	// get all the slider links
	var links = document.querySelectorAll("#slider-control a");

	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		
		// Get the section pointed to by the link
		var section = document.querySelector(link.getAttribute("href"));
		var sectionTop = section.offsetTop;
		var sectionBottom = sectionTop + section.offsetHeight;
		
		if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
			link.className = "active";
		} else {
			link.className = "";
		}
	}
}

function addSmoothScrolling() {
	var links = document.querySelectorAll("#slider-control a");

	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		
		link.addEventListener("click", function(event) {
			event.preventDefault();
			var href = this.getAttribute("href");
			scrollToElement(document.querySelector(href));
		});
	}
}