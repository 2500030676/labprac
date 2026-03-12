import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import UserRegistration from './UserRegistration'
import AdminLogin from './AdminLogin'
import AdminDashBoard from './AdminDashBoard'
import ApiData from './ApiData'
import RegisteredUsers from './RegisteredUsers'
import AdminHome from './AdminHome'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<UserRegistration/>}/>
        <Route path="/admlog" element={<AdminLogin/>}/>
        <Route path="/admin" element={<AdminDashBoard/>}/>
        <Route path="/api" element={<ApiData/>}/>
        <Route path="/registers" element={<RegisteredUsers/>}/>
        <Route path="/adhome" element={<AdminHome/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App