import { useState, useEffect } from 'react';

import UserNameInput from './../UserNameInput';
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
      parsedData[userIndex] = formData;
      // load user data from localStorage and set isChecked* values
      const userData = parsedData[userIndex];
      setIsCheckedMoon(userData.moonChecked);
      setIsCheckedPaw(userData.pawChecked);
      setIsCheckedPainting(userData.paintingChecked);
      setFoundUser(!foundUser);
      alert('Your data has been successfully updated!');
    } else {
      parsedData.push(formData);
      alert('Your data has been successfully added!');
    }

    // save the updated data to localStorage with field 'formData'
    localStorage.setItem('formData', JSON.stringify(parsedData));

    // if user not found, add it to userList
    if (userIndex === -1) {
      setUserList((prevUserList) => [...prevUserList, formData]);
    }

    handleCancel();
  };

  // useEffect(() => {
  //   const existingArray = JSON.parse(localStorage.getItem('formData'));
  //   const existingUser = JSON.parse(existingArray.getItem('username'));
  //   console.log('existingUser :>> ', existingUser);
  //   if (existingUser) {
  //     setIsCheckedMoon(existingUser.isCheckedMoon);
  //     setIsCheckedPaw(existingUser.isCheckedPaw);
  //     setIsCheckedPainting(existingUser.isCheckedPainting);
  //   }
  // }, []);

  return (
    <div className={evidenceWrapper}>
      <form action="" className={pageForm}>
        <UserNameInput
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
      </form>
      {foundUser ? <div>User found</div> : <div>User not found</div>}
    </div>
  );
};

export default NewsletterEvidence;
