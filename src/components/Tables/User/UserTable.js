import React from "react";
import { ButtonPrimaryOutline, ButtonDangerOutline } from "../../../styles";

const UserTable = props => (
  <table style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <ButtonPrimaryOutline
                sm
                onClick={() => {
                  props.editRow(user);
                }}
              >
                Edit
              </ButtonPrimaryOutline>
              <ButtonDangerOutline
                sm
                onClick={() => props.deleteUser(user.id)}
                color="red"
              >
                Delete
              </ButtonDangerOutline>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
