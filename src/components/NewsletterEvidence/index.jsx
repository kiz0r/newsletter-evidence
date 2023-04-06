import UserNameInput from './../UserNameInput';

import styles from './../../common/styles/NewsletterEvidence.module.sass';
const { evidence } = styles;

const NewsletterEvidence = () => {
  return (
    <div className={evidence}>
      <UserNameInput />
    </div>
  );
};

export default NewsletterEvidence;
