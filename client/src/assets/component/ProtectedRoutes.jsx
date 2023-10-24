import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
  const { authenticated } = useAuth()
  return (
    <>{authenticated ? 
      children : 
      <Navigate to="/" />
    }
    </>
  )
}

export default ProtectedRoutes