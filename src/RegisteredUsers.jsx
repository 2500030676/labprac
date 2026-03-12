import React, { useState, useEffect } from 'react'
import AdminDashBoard from './AdminDashBoard'

export default function RegisteredUsers() {

  const [user, setUser] = useState([])

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUser(storedUsers)
  }, [])

  return (
    <div>

      <AdminDashBoard/>

      <h2>Registered Users</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>

          {user.length === 0 ? (
            <tr>
              <td colSpan="5">No Users Found</td>
            </tr>
          ) : (
            user.map((value, index) => (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.contact}</td>
                <td>{value.password}</td>
              </tr>
            ))
          )}

        </tbody>
      </table>

    </div>
  )
}