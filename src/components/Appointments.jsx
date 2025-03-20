import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAppointment, removeAppointment } from "../store/appointmentsSlice";

const Appointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);

  const [appointmentData, setAppointmentData] = useState({
    id: "",
    patientName: "",
    doctor: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      appointmentData.patientName &&
      appointmentData.doctor &&
      appointmentData.date &&
      appointmentData.time
    ) {
      dispatch(addAppointment({ ...appointmentData, id: Date.now() }));
      setAppointmentData({
        id: "",
        patientName: "",
        doctor: "",
        date: "",
        time: "",
      });
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Appointment Management</h2>

      {/* Schedule Appointment Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="patientName"
          value={appointmentData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="doctor"
          value={appointmentData.doctor}
          onChange={handleChange}
          placeholder="Doctor Name"
          className="form-control mb-2"
          required
        />
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="time"
          name="time"
          value={appointmentData.time}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Schedule Appointment
        </button>
      </form>

      {/* Appointments List */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.patientName}</td>
              <td>{appointment.doctor}</td>
              <td>{appointment.date}</td>
              <td>{appointment.time}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeAppointment(appointment.id))}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;

//with search
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Appointments = () => {
//   const appointments = useSelector((state) => state.appointments.appointments);
//   const [search, setSearch] = useState("");

//   const upcomingAppointments = appointments.filter(
//     (a) => new Date(a.date) > new Date()
//   );

//   const filteredAppointments = appointments.filter((a) =>
//     a.patient.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="mt-4">
//       <h2>
//         <i className="fas fa-calendar-alt"></i> Appointments
//       </h2>
//       <p className="text-success">
//         <strong>Upcoming Appointments:</strong> {upcomingAppointments.length}
//       </p>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search appointments..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Appointments Table */}
//       <table className="table table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>#</th>
//             <th>Patient</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAppointments.map((appointment, index) => (
//             <tr key={appointment.id}>
//               <td>{index + 1}</td>
//               <td>{appointment.patient}</td>
//               <td>{appointment.date}</td>
//               <td>
//                 <button className="btn btn-danger btn-sm">
//                   <i className="fas fa-trash-alt"></i> Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Appointments;
