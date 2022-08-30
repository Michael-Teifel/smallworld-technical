import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { queryAPI } from './../API/form'
import AlertMessage from './AlertMessage';

function UserForm() {
  // Declare Component States
  const [formData, setFormData] = useState({
    jobFunctions: [],
    states: []
  });
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [alertMessageProps, setAlertMessageProps] = useState({});
  
  // Register the useForm hook.
  const { 
    register, 
    handleSubmit,
    reset,
    formState: {isSubmitSuccessful} } = useForm();
  

  // Initialize the default form values
  useEffect(() => {
    let response = queryAPI("https://not-a-real-endpoint.smallworld.ai/form", "GET")
    response = JSON.parse(response);
    if(response.status === 200) {
      setFormData(response.data);
    } 
  }, []);

  // Reset form to the default values if it is submitted succesfully
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  
  // Form Submission
  function onSubmit(data) {
    let response = queryAPI("https://not-a-real-endpoint.smallworld.ai/form", "POST", data)
    response = JSON.parse(response);
    if(response.status === 200) {

      setShowAlertMessage(true);
      setAlertMessageProps({
        messageType: 'success',
        message: 'Form was succesfully submitted'
      })
      
    } else {
      setShowAlertMessage(true);
      setAlertMessageProps({
        messageType: 'error',
        message: 'An unkown server error occurred'
      })
    }
  }
  
  // JSX
  const jobFunctionElements = formData.jobFunctions.map(jobFunction => {
    return <option key={jobFunction} value={jobFunction}>{jobFunction}</option>;
  });
  
  const stateElements = formData.states.map(state => {
    return <option key={state.abbreviation} value={state.name}>{state.abbreviation}</option>;
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {showAlertMessage ? <AlertMessage {...alertMessageProps} /> : undefined}
      <label>
        First Name:
        <input type="text" {...register("firstName", {required: true})} />
      </label>
      <label>
        Last Name:
        <input type="text" {...register("lastName", {required: true})} />
      </label>
      <label>
        Email Address:
        <input type="email"{...register("emailAddress", {required: true})} />
      </label>
      <label>
        Password:
        <input type="password" {...register("password", {required: true})} />
      </label>
      <label>
        Company:
        <input type="text" {...register("company", {required: true})} />
      </label>
      <label>
        Job Title:
        <input type="text" {...register("jobTitle", {required: true})} />
      </label>
      <label>
        Job Function:
        <select defaultValue={""}{...register("jobFunction", {required: true})}>
          <option value="" disabled>Select an Option</option>
          {jobFunctionElements}
        </select>
      </label>
      <label>
        State:
        <select defaultValue={""} {...register("state", {required: true})}>
          <option value="" disabled>Select an Option</option>
          {stateElements}
        </select>
      </label>
      <label>
        City:
        <input type="text" {...register("city", {required: true})} />
      </label>
      
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UserForm;