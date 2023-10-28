import React from 'react'
import "./App.css"

import { CheckOut, Home, Orders, Payment, Login, Verify } from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from './components'
import PrivateRoute from './components/privateRoute/PrivateRoute'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/pay/:id' element={<> <Header /> <Payment /> </>} />
            <Route path='/checkout' element={<> <Header /> <CheckOut /> </>} />
            <Route path='/orders' element={<> <Header /> <Orders /> </>} />
          </Route>
          <Route path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />
          <Route path='/user/verify/:token' element={<Verify />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>
    </>
  )
}

export default App