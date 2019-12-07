const ScrollUtil = {
  getMainPageSections: () => {
    const items = document.querySelectorAll('.left-navigation a')
    var values = Array.prototype.map.call(items, function(item){ return item.attributes.href.value })
    var pageSections = values.map(function(item){ return document.querySelectorAll(item)[0] })
    return _.compact(pageSections)
  },

  isElementInViewport: (el) => {
    const rect = el.getBoundingClientRect()
    const topAboveFold = rect.top <= 100
    const outOfSight = (rect.top + el.scrollHeight - 100) < 0
    return (topAboveFold && !outOfSight)
  },

  clearHighlights: () => {
    var previousSelectedLinks = document.querySelectorAll('a.highlighted')
    _.forEach(previousSelectedLinks, function(item){ item.classList.remove('highlighted') })
  },

  highlightLink: (el) => {
    el.classList.add('highlighted')
  },
}

export default ScrollUtil
