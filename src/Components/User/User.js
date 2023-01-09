import React from 'react'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'

const User = () => {
  return (
    <section className={`container`}>
      <UserHeader/>
      <Feed/>
    </section>
  )
}

export default User