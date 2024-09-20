import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import {Toaster} from 'sonner'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Signup/>}/>
      </Routes>
      <Toaster position="bottom-right"/>

    </div>
  )
}

export default App