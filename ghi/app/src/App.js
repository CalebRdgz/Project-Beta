import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobilesList';



function App({appointments, manufactures, vehicles, automobiles}) {
  if(!appointments || !manufactures ||!vehicles || !automobiles){
    return null;}
    console.log(automobiles)
  return (
    <>
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/technicians" element={<TechnicianForm />} />
          <Route path = "appointments">
            <Route path="new" element={<AppointmentForm />} />
            <Route path="" element={<AppointmentList appointments={appointments.appointment} />} />
          </Route>
          <Route path = "automobiles">
            <Route path="new" element={<AutomobileForm />} />
            <Route path="" element={<AutomobileList automobiles={automobiles.autos} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
