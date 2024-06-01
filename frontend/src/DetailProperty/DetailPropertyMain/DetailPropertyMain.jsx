import React from 'react'
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'
import NavigationBar from '../../CommanComponent/NavigationBar/NavigationBar '
import ContentData from '../ContentData/ContentData'
import FrameComponent1 from '../FrameComponent1/FrameComponent1'
import NavigationBar1 from "../../CommanComponent/Navigation1/Navigation1"
import InquiryForm from '../InquiryForm/InquiryForm'
const DetailPropertyMain = () => {
  return (
   <>
   <NavigationBar />
   <PortfolioHeader />
   <ContentData />
   <InquiryForm />
   <FrameComponent1 />
   <NavigationBar1 />
   </>
  )
}

export default DetailPropertyMain