import React from 'react'
import BigVideo from "../BigVideo/BigVideo"
import TrustedVisa from '../TrustedVisa/TrustedVisa'
import Collabration from '../Collabration/Collabration'
import Passport from '../Passport/Passport'
import Review from "../Review/Review"

const Landing = () => {
  return (
    <div>
      <BigVideo></BigVideo>
      <TrustedVisa></TrustedVisa>
      <Collabration></Collabration>
      <Passport></Passport>
      <Review></Review>
    </div>
  )
}

export default Landing