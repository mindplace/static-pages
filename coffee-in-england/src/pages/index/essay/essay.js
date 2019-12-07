import React from 'react'
import Link from 'gatsby-link'

import IntroductionSection from './sections/introduction'
import HistorySection from './sections/history'
import HealthSection from './sections/health'
import ImpotenceSection from './sections/impotence'
import NonEnglishnessSection from './sections/nonenglishness'

import './essay.css'

const Essay = () => (
  <article>
    <IntroductionSection />
    <HistorySection />
    <HealthSection />
    <ImpotenceSection />
    <NonEnglishnessSection />
  </article>
)

export default Essay
