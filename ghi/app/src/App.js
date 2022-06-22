import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AutomobileForm from './AutomobileForm';
import VehicleModelForm from './VehicleModelForm';
import VehicleModels from './VehicleModels';
import Manufacturers from './Manufacturers';
import ManufacturerForm from './ManufacturerForm';



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
          <Route path="/create_vehiclemodel" element={<VehicleModelForm />} />
          <Route path="/manufacturers" element={<Manufacturers manufacturers={props.manufacturers} />} />
          <Route path="/vehicle_models" element={<VehicleModels vehiclemodels={props.vehiclemodels} />} />
          <Route path="/manufacturer_form" element={<ManufacturerForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
