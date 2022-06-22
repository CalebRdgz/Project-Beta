import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon "></span>
        </button>
      <div className="offcanvas offcanvas-end bg-dark p-4" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-white h4" id="offcanvasNavbarLabel">Navigation</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className="navbar-brand" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><NavLink className="nav-link bg-dark" aria-current="page" to="/technicians">New Technician</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Appointments
              </a>
              <ul className="dropdown-menu bg-dark" aria-labelledby="offcanvasNavbarDropdown">
                <li><NavLink className="nav-link bg-dark " aria-current="page" to="/appointments/new"> New Appointment</NavLink></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><NavLink className="nav-link bg-dark" aria-current="page" to="/appointments"> Appointments</NavLink></li>
              </ul>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav;

