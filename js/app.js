// 当页面加载完毕时开始动画。
window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
  addScrollMagic();
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
	},{
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

function scrollToElement(element) {
  var topOfElement = element.offsetTop;
  TweenMax.to(window,.5,{
    scrollTo: {
      y: topOfElement,
    },
    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll('#slider-control a');
  for(var i = 0; i < links.length; i++) {
  	!(function(i){
    var link = links[i];
    link.addEventListener("click",function(event) {
    	event.preventDefault();
      	var href = link.getAttribute('href');
      	scrollToElement(document.querySelector(href));
    });
	})(i)
  }
}
function addScrollMagic() {
	var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
		duration: "100%"
    }).setTween(".overlay-scroll", {
        opacity: 1
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onEnter",
        duration: "100%"
    }).setTween(".iphone-demo", 1, { width: "50%", y: 0 })
      .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#native",
        triggerHook: "onLeave",
        duration: "100%"
    }).setPin(".iphone-demo")
      .addTo(controller);
}
