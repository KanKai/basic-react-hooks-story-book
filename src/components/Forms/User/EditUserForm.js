import React, { useState, useEffect } from "react";
import {
  Label,
  Input,
  ButtonPrimary,
  ButtonPrimaryOutline
} from "../../../styles";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <Label>Username</Label>
      <Input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <ButtonPrimary>Update user</ButtonPrimary>
      <ButtonPrimaryOutline onClick={() => props.setEditing(false)}>
        Cancel
      </ButtonPrimaryOutline>
    </form>
  );
};

export default EditUserForm;
