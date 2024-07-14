import Header from '@/components/header/Header'
import React from 'react'
import TopContent from '@/components/TopContent'
import WhyJoinUsContent from '@/components/WhyJoinUsContent'
import TheyLoveUscontent from '@/components/TheyLoveUsContent'
import GrowYourCollectionContent from '@/components/GrowYourCollectionContent'
import ShoesCollectedContent from '@/components/ShoesCollectedContent'
import Footer from '@/components/Footer'
import BestOfBestContent from '@/components/BestOfBestContent'

const Home = () => {
  return (
    <main>
      <Header />
      <TopContent />
      <BestOfBestContent />
      <WhyJoinUsContent />
      <TheyLoveUscontent />
      <GrowYourCollectionContent />
      <ShoesCollectedContent />
      <Footer />

    </main>
  )
}

export default Home