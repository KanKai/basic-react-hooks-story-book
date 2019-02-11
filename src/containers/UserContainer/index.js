import React, { useState } from "react";
import userDatas from "../../_mocks/userDatas";
import { UserState } from "../../state";
import { UserContainerStyled } from "./styled";
import { Title, FlexRow, FlexLarge, Label } from "../../styles";
import { CreateUserForm, EditUserForm } from "../../components/Forms";
import { UserTable } from "../../components/Tables";

function UserContainer() {
  const _userDatas = userDatas;

  const initialUserFormState = UserState;

  // Setting State
  const [users, setUsers] = useState(_userDatas);
  const [currentUser, setCurrentUser] = useState(initialUserFormState);
  const [editing, setEditing] = useState(false);

  // CRUD
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    const { id, name, username } = user;
    setCurrentUser({ id, name, username });
  };

  return (
    <>
      <UserContainerStyled>
        <Title>CRUD App with Hooks</Title>
        <FlexRow>
          <FlexLarge textAlign="center">
            {editing ? (
              <React.Fragment>
                <Label>Edit user</Label>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Label>Add user</Label>
                <CreateUserForm addUser={addUser} />
              </React.Fragment>
            )}
          </FlexLarge>
          <FlexLarge textAlign="center">
            <Label>View users</Label>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </FlexLarge>
        </FlexRow>
      </UserContainerStyled>
    </>
  );
}

export default UserContainer;
