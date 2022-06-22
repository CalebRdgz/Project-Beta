import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadAppointment(){
  const response = await fetch ('http://localhost:8080/api/appointments/')
  if (response.ok) {
    const data = await response.json();
    console.log(data);
    root.render(
      <React.StrictMode>
        <App appointments ={data.appointment}/>
      </React.StrictMode>
    );
  } else {
    console.error(response)
  }
}
loadAppointment();