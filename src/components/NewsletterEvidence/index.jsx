import { useState } from 'react';

import PageHeader from '../PageHeader';
import UserNameInput from './../UserNameInput';
import CheckBoxBtn from '../CheckBoxBtn';

import moonIcon from './../../common/images/moonIcon.png';
import pawIcon from './../../common/images/pawIcon.png';
import paintingIcon from './../../common/images/paintingIcon.png';

import styles from './../../common/styles/NewsletterEvidence.module.sass';

const { evidenceWrapper, pageForm, btnWrapper } = styles;

const NewsletterEvidence = () => {
  // useState for <UserNameInput/>
  const [value, setValue] = useState('');
  // useStates for <CheckBoxBtn/>
  const [isCheckedMoon, setIsCheckedMoon] = useState(false);
  const [isCheckedPaw, setIsCheckedPaw] = useState(false);
  const [isCheckedPicture, setIsCheckedPicture] = useState(false);

  return (
    <div className={evidenceWrapper}>
      <PageHeader />
      <form action="" className={pageForm}>
        <UserNameInput value={value} setValue={setValue} />
        <CheckBoxBtn
          isChecked={isCheckedMoon}
          setIsChecked={setIsCheckedMoon}
          checkBoxName="myCheckBox1"
          imageSrc={moonIcon}
        />
        <CheckBoxBtn
          isChecked={isCheckedPaw}
          setIsChecked={setIsCheckedPaw}
          checkBoxName="myCheckBox2"
          imageSrc={pawIcon}
        />
        <CheckBoxBtn
          isChecked={isCheckedPicture}
          setIsChecked={setIsCheckedPicture}
          checkBoxName="myCheckBox3"
          imageSrc={paintingIcon}
        />
        <div className={btnWrapper}></div>
      </form>
    </div>
  );
};

export default NewsletterEvidence;
