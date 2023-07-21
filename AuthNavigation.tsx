import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { onAuthStateChanged, getAuth, User } from './firebase'

export const AuthNavigation = ()  => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const auth = getAuth()

  const userHandler = (user: User | null) => user ? setCurrentUser(user) : setCurrentUser(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => userHandler(user))
    return () => unsubscribe()
  }, [auth])

  return <> {currentUser ? <SignedInStack /> : <SignedOutStack />}</>
}