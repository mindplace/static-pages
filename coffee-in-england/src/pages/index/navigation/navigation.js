import React from 'react'
import Link from 'gatsby-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import ScrollUtil from './utilities'

import './navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainPageSections: [],
    }

    this.attachPageListeners = this.attachPageListeners.bind(this)
    this.detachPageListeners = this.detachPageListeners.bind(this)
    this.viewportChangeHandler = this.viewportChangeHandler.bind(this)
    this.manageClick = this.manageClick.bind(this)
  }

  componentDidMount() {
    this.attachPageListeners()
    document.addEventListener('click', this.manageClick, false)
    this.setState({ mainPageSections: ScrollUtil.getMainPageSections() })
  }

  componentWillUnmount() {
    this.detachPageListeners()
    document.removeEventListener('click', this.manageClick)
  }

  attachPageListeners() {
    window.addEventListener('scroll', this.viewportChangeHandler)
    window.addEventListener('resize', this.viewportChangeHandler)
  }

  detachPageListeners() {
    window.removeEventListener('scroll', this.viewportChangeHandler)
    window.removeEventListener('resize', this.viewportChangeHandler)
  }

  viewportChangeHandler() {
    ScrollUtil.clearHighlights()

    this.state.mainPageSections.forEach(function(item){
      if (ScrollUtil.isElementInViewport(item)) {
        var correspondingLink = document.querySelectorAll("a[href='#" + item.attributes.id.value + "']")[0]
        ScrollUtil.highlightLink(correspondingLink)
      }
    })
  }

  manageClick(e) {
    if (!(e.target.attributes.href) || !(e.target.attributes.href.value[0] == '#')) { return }
    ScrollUtil.clearHighlights()
    ScrollUtil.highlightLink(e.target)
    this.detachPageListeners()
    this.highlightAnchorLinks
    setTimeout(this.attachPageListeners, 120)
  }

  render() {
    return (
      <div className="left-navigation">
        <ul>
          <li><AnchorLink offset='100' href="#introduction" className="highlighted">Introduction</AnchorLink></li>
          <li><AnchorLink offset='100' href="#history">How did coffee get to England?</AnchorLink></li>
          <li><AnchorLink offset='100' href="#health">Interesting health claims</AnchorLink></li>
          <li><AnchorLink offset='100' href="#impotence">Impotence and immorality</AnchorLink></li>
          <li><AnchorLink offset='100' href="#nonenglishness">The Non-Englishness of Coffee</AnchorLink></li>
          <li><AnchorLink offset='100' href="#bibliography">Bibliography</AnchorLink></li>
        </ul>
      </div>
    )
  }
}

export default Navigation
