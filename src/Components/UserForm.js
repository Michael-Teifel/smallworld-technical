import {useState} from 'react';
function UserForm() {

  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    password: "",
    company: "",
    jobTitle: "",
    jobFunction: "",
    state: "",
    city: ""
  });

  function handleSubmit(event) {
    return true;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );

}

export default UserForm;