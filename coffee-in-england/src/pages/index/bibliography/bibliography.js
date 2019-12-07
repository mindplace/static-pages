import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import Citation from './citation/citation'

const Bibliography = () => {
  const citations = [
    { printed: '1652',
      title: "'The Vertue of the Coffee Drinke'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / V645B / E7:2:13. Accessed 7 December 2012' },

    { printed: 'London: 1663',
      title: "'A Cup of Coffee: or, Coffee in its Colours'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / C7596 / 1548:04, accessed 7 December 2012' },

    { printed: 'London: printed for J.L., 1672',
      title: "'A Broad-side against Coffee; Or, the Marriage of the Turk'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / B4830 / A1:1:379, accessed 7 December 2012' },

    { printed: '1674',
      title: "'A Brief Description of the Excellent Vertues of That Sober and wholesome Drink, Called Coffee, and its incomparable effects in preventing or curing most diseases incident to humane bodies'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / B4568 / A1:1:99, accessed 7 December 2012' },

    { printed: '1674',
      title: "'A Satyr Against Coffee'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / S709 / 1156:21, accessed 7 December 2012' },

    { printed: 'London: 1674',
      title: "'The Women's Petition Against Coffee, Representing to Publick Consideration the Grand Inconveniences accruing to their Sex from the Excessive Use of that Drying, Enfeebling Liquor. Presented to the Right Honorable the Keepers of the Liberty of Venus'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / W3331 / 829:44, accessed 7 December 2012' },

    { printed: 'London: 1674',
      title: "'The Mens Answer to the Womens Petition Against Coffee, Vindicating Their own Performances, and the Vertues of that Liquor, from the Undeserved Aspersions lately cast upon them by their Scandalus Pamphlet'",
      titleType: 'article',
      author: 'Anonymous',
      accessed: 'EEBO (Early English Books Online) Wing / M1721 / 1466:11, accessed 7 December 2012' },

    { printed: 'London: printed for J. Johnson, 1663',
      title: "'The Coffee-Mans Granado Discharged Upon the Maidens Complaint Against Coffee. In a Dialogue between Mr. Black-burnt and Democritus; Wherein is Discovered severall Strange, Wonderful, and Miracuous Cures performed by Coffee, (the like never heard of since the Creation.) With the names of the Persons, and Places of their abode, who were cured when left off by the Physitians.'",
      titleType: 'article',
      author: 'Armuthaz, Don Bollicosgo',
      title: 'EEBO (Early English Books Online) Wing / C4887A / 2864/40, accessed 7 December 2012' },

    { printed: 'London: Yale University Press, 2005',
      title: 'The Social Life of Coffee: The Emergence of the British Coffeehouse',
      titleType: 'book',
      author: 'Cowan, Brian.' },

    { printed: 'London: printed for J. Jones, 1663',
      title: "'The Maidens Complaint Against Coffee, or, The Coffee-House Discovered, Besieged, Stormed, Taken, Untyled and laid Open to publick view, in merry Couference between Mr. Black-burnt the Coffee-man. Mr. Suck-soul the Userer. Mr. Antidote the Mountibank. Mr. Purge the Apothecaries. Mris. Troublesome the Userers wife. Snap-short the Userers man. Toby the Brokers man. Dorothy the Userers maid. And Joane the Brokers maid. Being Very pleasant and delightsome for Old and Young, Lads and Lassies, Boyes and Girles, Omnium gatherum, as the devout Ironmonger quotes it, in his Annotations upon Toby and his Dog'",
      titleType: 'article',
      author: 'Democ., Merc., John Crouch',
      accessed: 'EEBO (Early English Books Online) Wing / M267A / 1335:13, accessed 7 December 2012' },

    { printed: 'London: Pickering & Chatto, 2006',
      title: 'Eighteenth-Century Coffee-House Culture',
      titleType: 'book',
      author: 'edited by Markman Ellis, 3 vols' },

    { printed: 'London: Weidenfeld & Nicolson, 2004',
      title: 'The Coffee House: A Cultural History',
      titleType: 'book',
      author: 'Ellis, Markman' },

    { printed: 'Huntington Library Quarterly, 59 (1996) 30-51',
      title: 'Coffeehouse Civility: 1660-1714: An Aspect of Post-Courtly Culture in England',
      titleType: 'book',
      author: 'Klein, Lawrence E.' },

    { printed: 'London: printed for John Starkey, 1661',
      title: 'A Character of Coffee and Coffee Houses',
      titleType: 'book',
      author: 'M.P.',
      accessed: 'EEBO (Early English Books Online) Wing / P77A / 1407:34, accessed 7 December 2012' },

    { printed: 'Cambridge: Cambridge University Press, 2005',
      title: 'Consuming Splendor: Society and Culture in Seventeenth Century England',
      titleType: 'book',
      author: 'Peck, Linda Levy' },

    { printed: 'New York: Routledge, 2002',
      title: 'Consumption and the Making of Respectability, 1600-1899',
      titleType: 'book',
      author: 'Smith, Woodruff' },

    { printed: 'London: printed by W.G. for John Playford, 1663',
      title: "'The Vertues of Coffee. Set forth in the Works of The Lord Bacon his Natural Hist., Mr. Parkinson his Herbal, Sir George Dandys his Travails, James Howel Esq; his Epistles'",
      titleType: 'article',
      accessed: 'EEBO (Early English Books Online) Wing / D72 / 2621:03, accessed 7 December 2012' },
  ]
  
  return (
    <section id="bibliography">
      <h2>Bibliography</h2>

      <div>
        { citations.map(function(citation, i){ return (<Citation citation={citation} key={i} />) }) }
      </div>
    </section>
  )
}

export default Bibliography
