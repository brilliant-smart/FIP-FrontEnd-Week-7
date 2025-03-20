import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPatient, removePatient } from "../store/patientsSlice";

const Patients = () => {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);

  const [patientData, setPatientData] = useState({
    id: "",
    name: "",
    age: "",
    condition: "",
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientData.name && patientData.age && patientData.condition) {
      dispatch(addPatient({ ...patientData, id: Date.now() }));
      setPatientData({ id: "", name: "", age: "", condition: "" }); // Reset form
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Patient Management</h2>

      {/* Add Patient Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={patientData.name}
          onChange={handleChange}
          placeholder="Patient Name"
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="age"
          value={patientData.age}
          onChange={handleChange}
          placeholder="Age"
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="condition"
          value={patientData.condition}
          onChange={handleChange}
          placeholder="Condition"
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">
          Add Patient
        </button>
      </form>

      {/* Patients List */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removePatient(patient.id))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;

// patients with search
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const Patients = () => {
//   const patients = useSelector((state) => state.patients.patients);
//   const [search, setSearch] = useState("");

//   const filteredPatients = patients.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="mt-4">
//       <h2>
//         <i className="fas fa-user-injured"></i> Patients
//       </h2>

//       {/* Search Bar */}
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search patients..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* Patients Table */}
//       <table className="table table-striped">
//         <thead className="table-dark">
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredPatients.map((patient, index) => (
//             <tr key={patient.id}>
//               <td>{index + 1}</td>
//               <td>{patient.name}</td>
//               <td>{patient.age}</td>
//               <td>
//                 <button className="btn btn-info btn-sm me-2">
//                   <i className="fas fa-edit"></i> Edit
//                 </button>
//                 <button className="btn btn-danger btn-sm">
//                   <i className="fas fa-trash-alt"></i> Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Patients;
