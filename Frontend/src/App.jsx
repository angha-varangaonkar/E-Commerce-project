import {Routes,Route} from 'react-router-dom' 
import Signup from './Pages/Signup'
import {Toaster} from 'sonner'
import Login from './Pages/Login'
import Homepage from './Pages/Homepage'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './Pages/Dashboard'

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>} />

      <Route element={<PrivateRoute allowrole={['user']}/>}>
      <Route path="/" element={<Homepage/>}/>
      </Route>

      <Route element={<PrivateRoute allowrole={['admin']}/>}>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Route>
       
      
    </Routes>
    <Toaster position="bottom-right" />
   </div>
  )
}