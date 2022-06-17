import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const EditUser = (props) => {
  const { editUser, users } = useContext(GlobalContext);
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    firstName:"",
    lastName:"",
    designation:"",
    contactNo:""
  })
  const history = useHistory();
  const currentUserId = props.match.params.id;
  const { firstName,lastName,designation,contactNo}=selectedUser|| {}

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users])

  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/")
  }

  return (
    <Form onSubmit={onSubmit}   style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={firstName} onChange={onChange} name="firstName" placeholder="firstName" required></Input>
        <Input type="text" value={lastName} onChange={onChange} name="lastName" placeholder="LastName" required></Input>
        <Input type="text" value={designation} onChange={onChange} name="designation" placeholder="designation" required></Input>
        <Input type="text" value={contactNo} onChange={onChange} name="contactNo" placeholder="contactNo." required></Input>
        {/* <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required></Input> */}

      </FormGroup>
      <Button type="submit">Update</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
