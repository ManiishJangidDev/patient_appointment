import React, { useEffect, useState } from 'react'
import SidebarComp from './global/Sidebar'
import Navbar from './global/Navbar'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { dashboardData } from '../helper/apiHelper'
import { dashboard } from '../helper/endpoints';
import AccessibleIcon from '@mui/icons-material/Accessible';

const Dashboard = () => {

  const [patientCount, setPatientCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);


  useEffect(() => {
    const handleDashAPI = async () => {
      const response = await dashboardData(dashboard);
      console.log(response, 'response in asasdf')

      if (response.status === 200) {
        setAppointmentCount(response.data.appointment_count);
        setPatientCount(response.data.patient_count);
      }
    }
    handleDashAPI();
  }, []);

  const DashCards = () => {
    return (
      <>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </>
    )
  }


  const [sidbarToggle, setSideBarToggle] = useState(true)
  return (<>
    <div className='dashboard_main'>
      <SidebarComp sidbarToggle={sidbarToggle} />
      <div className='dashboard_content' style={{
        width: !sidbarToggle ? "94%" : "80%"
      }}>
        {/* <Navbar setSideBarToggle={setSideBarToggle} sidbarToggle={sidbarToggle} /> */}
        <Navbar setSideBarToggle={setSideBarToggle} sidbarToggle={sidbarToggle} />
        <div className='dashBoard_main'>
          {/* <DashCards /> */}
        </div>
      </div>
    </div>
  </>
  )
}

export default Dashboard