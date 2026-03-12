import React from 'react'
import { useState } from 'react'
import './user.css'
import MainNav from './MainNav'

export default function UserRegistration() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [gender, setGender] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: Date.now(),
      name: name,
      email: email,
      contact: contact,
      gender: gender,
      password: password
    }

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || []

    existingUsers.push(newUser)

    localStorage.setItem("users", JSON.stringify(existingUsers))

    alert("User Registered Successfully")

    // clear form
    setName("")
    setEmail("")
    setContact("")
    setGender("")
    setPassword("")
  }

  return (
    <div>

      <MainNav/>

      <form onSubmit={handleSubmit}>

        <label>Enter Name:</label>
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <pre></pre>

        <label>Enter Email:</label>
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <pre></pre>

        <label>Enter Contact:</label>
        <input
          value={contact}
          required
          onChange={(e) => setContact(e.target.value)}
        />

        <pre></pre>

        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <pre></pre>

        <label>Select Gender</label>
        <select
          value={gender}
          required
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>

        <pre></pre>

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}