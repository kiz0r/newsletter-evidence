import { useState } from 'react';

import PageHeader from '../PageHeader';
import UserNameInput from './../UserNameInput';
import CheckBoxBtn from '../CheckBoxBtn';

import moonIcon from './../../common/images/moonIcon.png';
import pawIcon from './../../common/images/pawIcon.png';
import paintingIcon from './../../common/images/paintingIcon.png';

import styles from './../../common/styles/NewsletterEvidence.module.sass';
import CustomButton from '../CustomButton';

const { evidenceWrapper, pageForm, btnWrapper } = styles;

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
      alert('Your data has been successfully updated!');
    } else {
      parsedData.push(formData);
      alert('Your data has been successfully added!');
    }

    // save the updated data to localStorage with field 'formData'
    localStorage.setItem('formData', JSON.stringify(parsedData));

    handleCancel();
  };

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
          <CustomButton type="submit" onClick={handleSubmit}>
            Save
          </CustomButton>
          <CustomButton type="button" onClick={handleCancel}>
            Cancel
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default NewsletterEvidence;
