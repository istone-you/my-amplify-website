import React from 'react'
import Career from '../components/pages/Career'
import Seo from "../components/seo"

const career = () => {
  return (
    <div>
      <Career />
    </div>
  )
}

export const Head = () => <Seo title="Career" />

export default career