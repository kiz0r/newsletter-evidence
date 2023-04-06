import styles from './CustomButton.module.sass';

const { btn } = styles;

const CustomButton = ({ children, type, onClick }) => {
  return (
    <button className={btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
