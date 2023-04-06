import { useState } from 'react';
import { classNames } from 'classnames';

import styles from 'UserNameInput.module.sass';

const USERNAME_REG_EXP = /[A-Z][a-z]{2,19}(?=[A-Z][a-z]{2,19})/;

const UserNameInput = () => {
  const [value, setValue] = useState('');

  const inputClassname = classNames(userNameInput);

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
