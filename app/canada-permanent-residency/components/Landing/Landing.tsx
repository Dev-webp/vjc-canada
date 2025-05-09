import React from 'react'
import BigVideo from "../BigVideo/BigVideo"
import TrustedVisa from '../TrustedVisa/TrustedVisa'
import Collabration from '../Collabration/Collabration'
import Passport from '../Passport/Passport'
import Review from "../Review/Review"
import CanadaSection from '../CanadaSection/CanadaSection'
import Form from "../Form/Form"
import Whychoose from '../Whychoose/Whychoose'
import Howto from "../Howto/Howto"
import Process from "../Processsuccess/Processsuccess"

const Landing = () => {
  return (
    <div>
      <BigVideo></BigVideo>
      <Form></Form>
      <TrustedVisa></TrustedVisa>
      <Howto></Howto>
      <Process></Process>
      <Collabration></Collabration>
      <Passport></Passport>
      <Review></Review>
      <CanadaSection></CanadaSection>
      <Whychoose></Whychoose>
    </div>
  )
}

export default Landing