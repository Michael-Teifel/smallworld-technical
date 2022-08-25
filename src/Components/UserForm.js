import { useEffect } from 'react';
import {useForm} from 'react-hook-form';

function UserForm() {

  // const [formState, setFormState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   emailAddress: "",
  //   password: "",
  //   company: "",
  //   jobTitle: "",
  //   jobFunction: "",
  //   state: "",
  //   city: ""
  // });
  useEffect(() => {

  });

  
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <input type="text" {...register("jobFunction", {required: true})} />
      </label>
      <label>
        State:
        <input type="text" {...register("state", {required: true})} />
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