import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import AutomobileForm from './AutomobileForm';
import AutomobileList from './AutomobilesList';
import ManufacturerForm from './ManufacturerForm';
import Manufacturers from './Manufacturers';
import SalesPersonForm from './SalesPersonForm';
import SaleForm from './SaleForm';
import VehicleModelForm from './VehicleModelForm';
import VehicleModels from './VehicleModels';
import CustomerForm from './CustomerForm';


function App({appointments, manufactures, vehicles, automobiles}) {
  if(!appointments || !manufactures ||!vehicles || !automobiles){
    return null;}
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
          <Route path = "manufactures">
            <Route path="new" element={<ManufacturerForm />} />
            <Route path="" element={<Manufacturers />} />
          </Route>
          <Route path = "models">
            <Route path="new" element={<VehicleModelForm />} />
            <Route path="" element={<VehicleModels />} />
          </Route>
          <Route path = "sales">
            <Route path="new-sales-person" element={<SalesPersonForm />} />
            <Route path="" element={<SaleForm />} />
            <Route path="new-customer" element={<CustomerForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
