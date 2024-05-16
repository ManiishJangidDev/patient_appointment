import React, { useState } from 'react'
import SidebarComp from './global/Sidebar'
import Navbar from './global/Navbar'
import { useForm } from 'react-hook-form'
import { useToasts } from 'react-toast-notifications'
import { addPatient, addProduct } from '../helper/endpoints'
import axios from 'axios'
import { postApiDataWithToken } from '../helper/apiHelper'

const AddPatient = () => {

  const { addToast } = useToasts();
  const {
    register,
    handleSubmit,
    formState: { error },
    control,
    reset
  } = useForm();

  const [sidbarToggle, setSideBarToggle] = useState(true);

  const onSubmitPatientForm = async (data) => {
 
      console.log('data', data)

      const response = await postApiDataWithToken(addPatient, data);

      console.log('response', response);

      if(response.status === 200){
        addToast('Patient Created Successfully!', {appearance: "success", autoDismiss: 2000});
        reset();
      }else{
        addToast(response.data.detail, {appearance: "error", autoDismiss: 2000})
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
          <form className='global_form' onSubmit={handleSubmit(onSubmitPatientForm)}>
            <input
              {...register('name', { required: true })}
              className='global_input_label'
              placeholder='Enter Patient Name'
            />
            <input
              {...register('email', { required: true })}
              className='global_input_label'
              placeholder='Enter Patient Email'
            />
            <input
              {...register('phone_no', { required: true })}
              className='global_input_label'
              placeholder='Enter Patient Phone Number'
            />
            <button className="global_form_button" type='submit'>Add Patient</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPatient