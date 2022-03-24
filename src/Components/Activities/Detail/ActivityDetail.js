import React from 'react'
import HeroSection from '../../HeroSection/HeroSection'
import ActivityContent from './ActivityContent'

const ActivityDetail = () => {
  return (
    <>
        <HeroSection title='Activity title'/>
        <div className="content">
            <ActivityContent></ActivityContent>
        </div>
    </>
  )
}

export default ActivityDetail