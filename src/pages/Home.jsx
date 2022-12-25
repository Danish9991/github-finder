import React from 'react'
import Alert from '../components/layouts/Alert'
import UserResult from '../components/users/UserResult'
import UserSearch from '../components/users/UserSearch'

const Home = () => {
  return (
    <>
        <Alert />
        <UserSearch />
        <UserResult />
    </>

  )
}

export default Home