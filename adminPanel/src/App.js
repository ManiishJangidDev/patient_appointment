// App.js
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import CheckAuth from './helper/CheckAuth';
import { AuthProvider } from './helper/authProvider';
import AddPatient from './component/AddPatient';
import ShowPatient from './component/ShowPatient';
import AddAppointment from './component/AddAppointment';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<CheckAuth />} />
        <Route path='/add_patient' element={<AddPatient />} />
        <Route path='/all_patient' element={<ShowPatient/>}/>
        <Route path='all_appointment' element={<AddAppointment/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
