import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AutomobileForm from './AutomobileForm';



function App(props) {
  if(props.appointments === undefined){
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians" element={<TechnicianForm />} />
          <Route path="/create_appointment" element={<AppointmentForm />} />
          <Route path="/create_automobile" element={<AutomobileForm />} />
          <Route path="/appointments" element={<AppointmentList appointments={props.appointments} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
