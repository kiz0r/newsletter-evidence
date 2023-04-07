import { useState, useEffect } from 'react';

import UserNameField from '../UserNameField';
import CheckBoxBtn from '../CheckBoxBtn';

import moonIcon from './../../common/images/moonIcon.png';
import pawIcon from './../../common/images/pawIcon.png';
import paintingIcon from './../../common/images/paintingIcon.png';

import styles from './NewsletterEvidence.module.sass';
import CustomButton from '../CustomButton';

const { evidenceWrapper, pageForm, btnWrapper, saveBtn, cancelBtn } = styles;

// initial state of the form
const INITIAL_FORM_STATE = {
  username: '',
  isCheckedMoon: false,
  isCheckedPaw: false,
  isCheckedPainting: false,
};

const NewsletterEvidence = () => {
  // useState for <UserNameInput/>
  const [value, setValue] = useState(INITIAL_FORM_STATE.username);
  const [isValid, setIsValid] = useState(false);

  // useStates for <CheckBoxBtn/>
  const [isCheckedMoon, setIsCheckedMoon] = useState(
    INITIAL_FORM_STATE.isCheckedMoon
  );
  const [isCheckedPaw, setIsCheckedPaw] = useState(
    INITIAL_FORM_STATE.isCheckedPaw
  );
  const [isCheckedPainting, setIsCheckedPainting] = useState(
    INITIAL_FORM_STATE.isCheckedPainting
  );

  const [userList, setUserList] = useState([]);
  const [foundUser, setFoundUser] = useState(false);

  // used to reset the form to the initial state
  const handleCancel = () => {
    setValue(INITIAL_FORM_STATE.username);
    setIsCheckedMoon(INITIAL_FORM_STATE.isCheckedMoon);
    setIsCheckedPaw(INITIAL_FORM_STATE.isCheckedPaw);
    setIsCheckedPainting(INITIAL_FORM_STATE.isCheckedPainting);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      username: value,
      moonChecked: isCheckedMoon,
      pawChecked: isCheckedPaw,
      paintingChecked: isCheckedPainting,
    };

    const storedData = localStorage.getItem('formData');
    let parsedData = [];
    if (storedData) {
      parsedData = JSON.parse(storedData);
    }

    // it will return -1 if there is no username from input
    const userIndex = parsedData.findIndex((data) => data.username === value);

    if (userIndex !== -1) {
      // update existing user data
      parsedData[userIndex] = formData;
      const userData = parsedData[userIndex];
      setIsCheckedMoon(userData.moonChecked);
      setIsCheckedPaw(userData.pawChecked);
      setIsCheckedPainting(userData.paintingChecked);
      alert('Your data has been successfully updated!');
    } else {
      // add new user data
      parsedData.push(formData);
      alert('Your data has been successfully added!');
    }

    setFoundUser(true);

    localStorage.setItem('formData', JSON.stringify(parsedData));

    handleCancel();
  };

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    let parsedData = [];
    if (storedData) {
      parsedData = JSON.parse(storedData);
    }

    const userIndex = parsedData.findIndex((data) => data.username === value);
    if (userIndex !== -1) {
      const userData = parsedData[userIndex];
      setIsCheckedMoon(userData.moonChecked);
      setIsCheckedPaw(userData.pawChecked);
      setIsCheckedPainting(userData.paintingChecked);
      setFoundUser(!foundUser);
    }
  }, [value]);

  return (
    <div className={evidenceWrapper}>
      <form action="" className={pageForm}>
        <UserNameField
          value={value}
          setValue={setValue}
          isValid={isValid}
          setIsValid={setIsValid}
        />
        <CheckBoxBtn
          isChecked={isCheckedMoon}
          setIsChecked={setIsCheckedMoon}
          checkBoxName="isCheckedMoon"
          imageSrc={moonIcon}
        />
        <CheckBoxBtn
          isChecked={isCheckedPaw}
          setIsChecked={setIsCheckedPaw}
          checkBoxName="isCheckedPaw"
          imageSrc={pawIcon}
        />
        <CheckBoxBtn
          isChecked={isCheckedPainting}
          setIsChecked={setIsCheckedPainting}
          checkBoxName="isCheckedPainting"
          imageSrc={paintingIcon}
        />
      </form>

      <div className={btnWrapper}>
        <CustomButton
          type="submit"
          onClick={handleSubmit}
          modClassName={saveBtn}
        >
          Save
        </CustomButton>
        <CustomButton
          type="button"
          onClick={handleCancel}
          modClassName={cancelBtn}
        >
          Cancel
        </CustomButton>
      </div>
    </div>
  );
};

export default NewsletterEvidence;
