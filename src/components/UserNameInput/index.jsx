import { useState } from 'react';

const USERNAME_REG_EXP = /[A-Z][a-z]{2,19}(?=[A-Z][a-z]{2,19})/;

const UserNameInput = () => {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      placeholder="UserName"
    />
  );
};

export default UserNameInput;
