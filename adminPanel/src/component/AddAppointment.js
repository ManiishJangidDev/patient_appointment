import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import SidebarComp from './global/Sidebar';
import Navbar from './global/Navbar';
import { postApiDataWithToken } from '../helper/apiHelper';
import { addAppointment } from '../helper/endpoints';

const AddAppointment = () => {

  const { addToast } = useToasts();
  const {
    register,
    handleSubmit,
    formState: { error },
    control,
    reset
  } = useForm();

  const [sidbarToggle, setSideBarToggle] = useState(true);

  const onSubmitAppointmentForm = async (data) => {

    console.log('data', data)

    const response = await postApiDataWithToken(addAppointment, data);

    console.log('response', response);

    if (response.status === 200) {
      addToast('Appointment Created Successfully!', { appearance: "success", autoDismiss: 2000 });
      window.open(response.data.data.paymentLink, '_blank');
      reset();
    } else {
      addToast(response.data.detail, { appearance: "error", autoDismiss: 2000 })
    }

  }


  return (
    <div className='addProduct_main'>
      <SidebarComp sidbarToggle={sidbarToggle} />
      <div className='addProduct_content' style={{
        width: !sidbarToggle ? "94%" : "80%"
      }}>
        <Navbar setSideBarToggle={setSideBarToggle} sidbarToggle={sidbarToggle} />
        <div className='form_page'>
          <form className='global_form' onSubmit={handleSubmit(onSubmitAppointmentForm)}>
            <div className='inner_div'>
              <label>Appointment Date</label>
              <input
                {...register('appointment_date', { required: true })}
                className='global_input_label'
                placeholder='Enter Patient Name'
                type='date'
              />
            </div>
            <div className='inner_div'>
            <label>Appointment Time</label>
            <input
              {...register('appointment_time', { required: true })}
              className='global_input_label'
              type='time'
            />
            </div>
            <div className='inner_div'>
            <label>Doctor Name</label>
            <input
              {...register('appointment_doctor', { required: true })}
              className='global_input_label'
            />
            </div>
           <div className='inner_div'>
           <label>Patient ID</label>
           <input
              {...register('patient_id', { required: true })}
              className='global_input_label'
              type='number'
            />
           </div>
            
            <button className="global_form_button" type='submit'>Add Appointment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAppointment