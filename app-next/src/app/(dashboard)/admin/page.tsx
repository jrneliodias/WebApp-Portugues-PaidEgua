import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Admin() {
    const session = await getServerSession(authOptions);
    console.log(session)
  return (
    <div>Welcome to Admin {session?.user.username}</div>
  )
}
