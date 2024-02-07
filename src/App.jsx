import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './Pages/NavbarPage';
import Home from './Pages/HomePage';
import Admin from './Pages/AdminPage';
import Footer from './Pages/FooterPage';
import Events from './Pages/EventsPage';
import Teams from './Pages/TeamsPage';
import Sponsors from './Pages/SponsorsPage';
import Timeline from './Pages/TimelinePage';
import LoginPage from './Pages/LoginPage';
import Signup from './Components/Signup/Signup';
import Tutorial from './Components/Tutorial/Tutorial';
import Thanks from './Components/Thanks/Thanks';
import Hero from './Components/Hero/Hero';
import Verify from './Components/Verify/Verify';
import Dashboard from './Components/Dashboard/Dashboard';


const AppLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
)

const appRouters = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="hero" element={<Hero />} />
        <Route path="admin" element={<Admin />} />
        <Route path="events" element={<Events />} />
        <Route path="teams" element={<Teams />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="timeline" element={<Timeline/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path = "signup" element = {<Signup/>} />
        <Route path = "registration" element = {<Tutorial/>} />
        <Route path = "thanks" element = {< Thanks />}/>
        <Route path = "verify" element = {<  Verify/>}/>
        <Route path = "dashboard" element = {<Dashboard/>}/>
        <Route path="*" element={<Home /> } />
      </Route>
    </Routes> 
  </Router>
)

export default appRouters;