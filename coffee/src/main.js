function getMainPageSections(){
  var items = document.querySelectorAll(".left-navigation a"),
      values = [].map.call(items, function(item){ return item.attributes.href.value; });
  return values.map(function(item){ return document.querySelectorAll(item)[0]; });
};

var mainPageSections = getMainPageSections(),
    currentVisibleSection = mainPageSections[0];

// -- Highlight links  ------------------------------------------------

var highlightedByClick = false;

function highlightLink(el){
  var previousSelectedLinks = document.querySelectorAll("a.highlighted");
  [].forEach.call(previousSelectedLinks, function(item){ item.classList.remove("highlighted") });

  el.classList.add("highlighted");
};

function highlightAnchorLinks(e){
  var currentClickedItem = e.target,
      isLink = e.srcElement.localName == "a";

  if (!isLink) { return; }
  highlightLink(e.target);
  highlightedByClick = true;
};

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  var topAboveFold = rect.top <= 0,
      outOfSight = (rect.top + el.scrollHeight - 100) < 0;

  return (topAboveFold && !outOfSight);
};

function viewportChangeHandler() {
  if (highlightedByClick) { return; }

  for(var i=0; i < mainPageSections.length; i++) {
    var item = mainPageSections[i];
    if (item === undefined) { continue }

    if (isElementInViewport(item)) {
      var correspondingLink = document.querySelectorAll("a[href='#" + item.attributes.id.value + "']")[0];
      highlightLink(correspondingLink);
    }
  }
};

document.addEventListener("click", highlightAnchorLinks);

window.addEventListener('scroll', _.throttle(viewportChangeHandler, 100), false);
window.addEventListener('resize', _.throttle(viewportChangeHandler, 100), false);

// Smooth scroll functionality
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200,
	offset: 100,
  after: function (){ setTimeout(function(){ highlightedByClick = false; }, 100) } // Callback to run after scroll
});
