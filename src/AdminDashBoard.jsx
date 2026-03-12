import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./nav.css"
import Home from './Home';
export default function AdminDashBoard() {
  const navigate = useNavigate()
  return (
    <div>
      <nav>
        <button onClick={() => { navigate("/adhome") }}>Home</button>
        <button onClick={() => { navigate("/api") }}>Api DATA</button>
        <button onClick={() => { navigate("/registers") }}>Registered Users</button>
        <button onClick={() => { navigate("/") }}>Logout</button>
      </nav>
      
    </div>
  )
}
