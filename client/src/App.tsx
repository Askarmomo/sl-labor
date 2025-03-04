// import { Link } from "react-router-dom"

import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Worker from "./pages/Worker"
import Profile from "./pages/Profile"
import Employer from "./pages/Employer"
import Detailes from "./pages/Detailes"


const App = () => {
  return (
    <div>
      <Header />
      <div className=" px-4 pt-4 pb-20">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detailes" element={<Detailes />} />
          <Route path="/worker" element={<Worker />} />
          <Route path="/employer" element={<Employer />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App