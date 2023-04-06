import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './../../common/styles/NewsletterEvidence.module.sass';
const { userNameInput, inputValid, inputInvalid, formLabel } = styles;

// username regular expression for validation
const USERNAME_REG_EXP =
  /^[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?\s[A-Z][a-z]{1,19}(-[A-Z][a-z]{1,19})?$/;

const UserNameInput = ({ value, setValue }) => {
  const [isValid, setIsValid] = useState(false);

  function validateUserNameInput() {
    setIsValid(USERNAME_REG_EXP.test(value));
  }

  useEffect(() => {
    validateUserNameInput();
  }, [value]);

  // create a unique classname depends on isValid
  const inputClassname = classNames(
    userNameInput,
    `${isValid ? inputValid : inputInvalid}`
  );

  return (
    <label htmlFor="" className={formLabel}>
      <span>Your Name </span>
      <input
        className={inputClassname}
        type="text"
        name="user-name"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        autoFocus
        required
      />
    </label>
  );
};

export default UserNameInput;
