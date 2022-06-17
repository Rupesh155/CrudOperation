import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";


// const { register, handleSubmit, formState: { errors } } = useForm();

export const AddUser = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    contactNo: ""
  });
  const [valid ,setValid]=useState(false)
  console.log(data, "3434343")
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();



  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      ...data
    }
    addUser(newUser);
    history.push("/");
  }

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    
  
    
  }

  return (
    <Form onSubmit={onSubmit} style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <FormGroup  >
        <Label>Name</Label>
        <Input type="text" value={data.firstName} onChange={onChange} name="firstName" placeholder="FirstName" required></Input>
        <Label>Last Name*</Label>
        <Input type="text" value={data.lastName} onChange={onChange} name="lastName" placeholder="LastName" required></Input>
        <Label>Designation*</Label>

        <Input type="text" value={data.designation} onChange={onChange} name="designation" placeholder="designation" required></Input>
        <Label>Contact Number*</Label>
      
        <Input type="number" value={data.contactNo}   onChange={onChange} name="contactNo" placeholder="Contact No" required></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}



// import React, { useState, useContext } from 'react';
// import { GlobalContext } from "../context/GlobalState";
// import { v4 as uuid } from "uuid";
// import { Link, useHistory } from "react-router-dom";
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Button
// } from "reactstrap";

// export const AddUser = () => {
//   const [name, setName] = useState('');
//   const { addUser } = useContext(GlobalContext);
//   const history = useHistory();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       id: uuid(),
//       name
//     }
//     addUser(newUser);
//     history.push("/");
//   }

//   const onChange = (e) => {
//     setName(e.target.value);
//   }

//   return (
//     <Form onSubmit={onSubmit}>
//       <FormGroup>
//         <Label>Name</Label>
//         <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input>
//       </FormGroup>
//       <Button type="submit">Submit</Button>
//       <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
//     </Form>
//   )
// }
