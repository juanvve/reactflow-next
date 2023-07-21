import React from 'react'
import Users from '@/components/Users'

const getUsers = async () => {
  const response = await fetch('https://reqres.in/api/users')
  const data = await response.json()
  return data.data
}

const MainPage = async () => {
  const users = await getUsers()
  return (
    <div>
      <h1>
        MainPage
      </h1>
      <Users users={users} />
    </div>
  )
}

export default MainPage