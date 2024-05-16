// import React, { useEffect, useState } from 'react'
// import SidebarComp from './global/Sidebar';
// import Navbar from './global/Navbar';
// import { MDBDataTable } from "mdbreact";
// import { patient_list } from '../helper/apiHelper';
// import { allPatient } from '../helper/endpoints';

// const ShowPatient = () => {

//     const [sidbarToggle, setSideBarToggle] = useState(true);
//     const [tableData, setTableData] = useState([]);


//     useEffect(() => {
//         const getPatientData = async() => {
//             const response = await patient_list(allPatient);
//             console.log("'response", response);

//             setTableData(response.data)
//         } 

//         getPatientData();
//     },[])

//     const data = {
//         columns: [
//           {
//             label: "Name",
//             field: "name",
//             sort: "asc",
//             width: 150
//           },
//           {
//             label: "Email",
//             field: "email",
//             sort: "asc",
//             width: 270
//           },
//           {
//             label: "Phone Number",
//             field: "phone_no",
//             sort: "asc",
//             width: 200
//           },
//         ],
//         rows: tableData
//       };

//   return (
//     <div className='addProduct_main'>
//       <SidebarComp sidbarToggle={sidbarToggle} />
//       <div className='addProduct_content' style={{
//         width: !sidbarToggle ? "94%" : "80%"
//       }}>
//         <Navbar setSideBarToggle={setSideBarToggle} sidbarToggle={sidbarToggle} />
//         <div>
//         <MDBDataTable style={{
//             width: "80%"
//         }} striped bordered hover noBottomColumns data={data} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ShowPatient


import React, { useEffect, useState } from 'react';
import SidebarComp from './global/Sidebar';
import Navbar from './global/Navbar';
import { MDBDataTable } from "mdbreact";
import { patient_list } from '../helper/apiHelper';
import { allPatient } from '../helper/endpoints';
import Modal from 'react-modal';

const ShowPatient = () => {
    const [sidbarToggle, setSideBarToggle] = useState(true);
    const [tableData, setTableData] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null); // To store the selected patient details
    const [isModalOpen, setIsModalOpen] = useState(false); // To manage the visibility of the modal

    useEffect(() => {
        const getPatientData = async () => {
            try {
                const response = await patient_list(allPatient);
                setTableData(response.data);
            } catch (error) {
                console.error('Error fetching patient data:', error);
            }
        };
        getPatientData();
    }, []);

    // Function to handle opening modal and setting selected patient
    const handleViewDetails = (patient) => {
        setSelectedPatient(patient);
        openModal();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const data = {
        columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150
            },
            {
                label: "Email",
                field: "email",
                sort: "asc",
                width: 270
            },
            {
                label: "Phone Number",
                field: "phone_no",
                sort: "asc",
                width: 200
            },
            {
                label: "Actions",
                field: "actions",
                width: 100,
                sort: "disabled", // To prevent sorting on this column
                // Custom function to render button in each row
                formatter: (cell, row) => {
                    return <button onClick={() => handleViewDetails(row)}>View Details</button>;
                }
            },
        ],
        rows: tableData.map(patient => ({
            ...patient,
            actions: <button onClick={() => handleViewDetails(patient)}>View Details</button> // This field will be populated by the formatter function
        }))
    };


    return (
        <div className='addProduct_main'>
            <SidebarComp sidbarToggle={sidbarToggle} />
            <div className='addProduct_content' style={{
                width: !sidbarToggle ? "94%" : "80%"
            }}>
                <Navbar setSideBarToggle={setSideBarToggle} sidbarToggle={sidbarToggle} />
                <div>
                    <MDBDataTable
                        style={{     width:" 78%",
                            marginLeft: "7%" }}
                        striped
                        bordered
                        hover
                        noBottomColumns
                        btn
                        data={data}
                    />
                </div>
                {/* Modal to display patient details */}
                {/* Modal to display patient details */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Patient Details"
                style={{
                    content: {
                        maxWidth: "500px",
                        textWrap: "wrap",
                        padding: "5%"
                    }
                }}
                >
                    <button onClick={closeModal}>Close</button>
                    {selectedPatient && (
                        <div className='Modal_div'>
                            <h2>{selectedPatient.name}</h2>
                            <p>Email: {selectedPatient.email}</p>
                            <p>Phone Number: {selectedPatient.phone_no}</p>
                            <h2>Appointments:</h2>
                            {selectedPatient.appointments.map((data, index) => (
                                <div key={index}>
                                    <p>Appointment Date & Time: {data.appointment_date}&{data.appointment_time} <h3>Appointment Doc: {data.appointment_doctor}</h3> </p>
                                    <p></p>
                                </div>
                            ))}
                        </div>
                    )}
                </Modal>
            </div>
        </div>
    );
};

export default ShowPatient;
