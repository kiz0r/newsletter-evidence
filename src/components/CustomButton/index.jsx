import PropTypes from 'prop-types';
import styles from './CustomButton.module.sass';

const { btn } = styles;

// component which uses props.children
const CustomButton = ({ children, type, onClick }) => {
  return (
    <button className={btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default CustomButton;
