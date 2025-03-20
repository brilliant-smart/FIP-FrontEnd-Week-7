import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const totalPatients = useSelector((state) => state.patients.patients.length);
  const totalAppointments = useSelector(
    (state) => state.appointments.appointments.length
  );
  const upcomingAppointments = useSelector(
    (state) =>
      state.appointments.appointments.filter(
        (app) => new Date(app.date) >= new Date()
      ).length
  );
  const completedAppointments = totalAppointments - upcomingAppointments;

  return (
    <div className="container mt-4">
      <h2>Hospital Dashboard</h2>
      <div className="row">
        {/* Total Patients */}
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body text-center">
              <i className="fas fa-users fa-3x"></i>
              <h5 className="card-title mt-2">Total Patients</h5>
              <p className="card-text display-4">{totalPatients}</p>
            </div>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body text-center">
              <i className="fas fa-calendar-check fa-3x"></i>
              <h5 className="card-title mt-2">Total Appointments</h5>
              <p className="card-text display-4">{totalAppointments}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body text-center">
              <i className="fas fa-clock fa-3x"></i>
              <h5 className="card-title mt-2">Upcoming Appointments</h5>
              <p className="card-text display-4">{upcomingAppointments}</p>
            </div>
          </div>
        </div>

        {/* Completed Appointments */}
        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body text-center">
              <i className="fas fa-check-circle fa-3x"></i>
              <h5 className="card-title mt-2">Completed Appointments</h5>
              <p className="card-text display-4">{completedAppointments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
