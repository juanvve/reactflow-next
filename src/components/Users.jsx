'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Users = ({users}) => {

const router = useRouter()

  return (
    <>
      <ul>
        {users.map(user => (
            <li key={user.id} onClick={()=> {router.push(`/users/${user.id}`)}}>
              <h3 >{user.id} {user.first_name} {user.last_name}</h3>
              <h6>{user.email}</h6>
              <Image src={user.avatar} alt={user.first_name} width='50' height='50' />
            </li>
          ))}
      </ul>
    </>
  )
}

export default Users