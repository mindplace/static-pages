// -- Highlight links  ------------------------------------------------
function highlightAnchorLinks(e){
  var currentClickedItem = e.target,
      isLink = e.srcElement.localName == "a";

  if (!isLink) { return; }

  var previousSelectedLinks = document.querySelectorAll("a.highlighted");
  [].forEach.call(previousSelectedLinks, function(item){ item.classList.remove("highlighted") });

  e.target.classList.add("highlighted");
};

document.addEventListener("click", highlightAnchorLinks);

// Smooth scroll functionality
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1200,
	offset: 100
});
