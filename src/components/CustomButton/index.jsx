import PropTypes from 'prop-types';
import styles from './CustomButton.module.sass';
import classNames from 'classnames';

const { btn } = styles;

// component which uses props.children
const CustomButton = ({ children, type, onClick, modClassName }) => {
  const btnClassName = classNames(`${modClassName ? modClassName : ''}`, btn);
  return (
    <button className={btnClassName} type={type} onClick={onClick}>
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
