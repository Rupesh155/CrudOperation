import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users, "RRRRRRRRRRRRRRRR")

  // const {firstName,data}=users
  // console.log(users !== undefined ? users.data.data : {}, "firstName")

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col"> DESIGNATION</th>
            <th scope="col">CONTACT NUMBER</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <>
              {users.map((user, index) => (


                <tr key={user.id}>

                  <th>{index + 1}
                    {console.log(user.firstName, "userrrrrrrrrrr")}
                  </th>
                  <th>{user.firstName}</th>
                  <th>{user.lastName}</th>
                  <th>{user.designation}</th>
                  <th>{user.contactNo}</th>
                  <div className="ml-auto">
                    <Link to={`/edit/${user.id}`} color="warning" className="btn btn-warning m-2">Edit</Link>
                    <Button onClick={() => removeUser(user.id)} color="danger">remove</Button>
                  </div>
                </tr>
              ))}
            </>
          ) : (
            <h6 className='text-center' >No Employee Found</h6>
          )}
        </tbody>

      </table>
    </>
  )
}

