import React from 'react'
import { useSession } from 'next-auth/react'

const initialState = {
    name:'',
    email:'',
    pic:'',
}

const profile = () => { 
    const { data: session, status } = useSession();

    if (status === "loading") {
      // Handle loading state
      return <div>Loading...</div>;
    }
  
    if (session) {
      // User is authenticated
      const { user } = session;
      const { email } = user;
  
      return <div>Welcome, {email}!</div>;
    }
  
    // User is not authenticated
    return <div>Please sign in to access this page.</div>;
  }

export default profile