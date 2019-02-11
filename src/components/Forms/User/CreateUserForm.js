import React, { useState } from "react";
import { UserState } from "../../../state";
import { Label, Input, ButtonPrimary } from "../../../styles";

const CreateUserForm = props => {
  const initialUserFormState = UserState;
  const [user, setUser] = useState(initialUserFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialUserFormState);
      }}
    >
      <Label size="14px" color="#707070">
        Name
      </Label>
      <Input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <Label size="14px" color="#707070">
        Username
      </Label>
      <Input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <ButtonPrimary>Add new user</ButtonPrimary>
    </form>
  );
};

export default CreateUserForm;
