import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './UserNameInput.module.sass';
const { userNameInput, inputValid, inputInvalid } = styles;

const USERNAME_REG_EXP =
  /^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?\s[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/;

const UserNameInput = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  function validateUserNameInput() {
    setIsValid(USERNAME_REG_EXP.test(value));
  }

  useEffect(() => {
    validateUserNameInput();
  }, [value]);

  const inputClassname = classNames(
    userNameInput,
    `${isValid ? inputValid : inputInvalid}`
  );

  return (
    <input
      className={inputClassname}
      type="text"
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      placeholder="UserName"
      autoFocus
      required
    />
  );
};

export default UserNameInput;
