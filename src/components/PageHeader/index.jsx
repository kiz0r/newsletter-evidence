import { FaCode } from 'react-icons/fa';

import './HeaderStyles.sass';

const PageHeader = () => {
  return (
    <header className="header">
      <FaCode className="logo" />
      <h2 className="headerTitle">We are glad that you use our service!</h2>
    </header>
  );
};

export default PageHeader;
