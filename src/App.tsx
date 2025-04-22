import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global/index.scss'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { store } from './store/store'
import { Provider } from 'react-redux'

export const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/kanban-todo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  )
}
