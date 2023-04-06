import './CheckBoxBtn.sass';
import PropTypes from 'prop-types';

const CheckBoxBtn = ({ imageSrc, checkBoxName, isChecked, setIsChecked }) => {
  const handleCheckboxClick = ({ target: { checked } }) => {
    setIsChecked(checked);
  };

  return (
    <label className="checkBoxLabel">
      <input
        type="checkbox"
        name={checkBoxName}
        checked={isChecked}
        onChange={handleCheckboxClick}
      />
      <button className="checkBoxBtn" type="button">
        <img className="checkBoxImg" src={imageSrc} alt="Button Icon" />
      </button>
    </label>
  );
};

CheckBoxBtn.propTypes = {
  imageSrc: PropTypes.string,
  checkBoxName: PropTypes.string,
  isChecked: PropTypes.bool,
  setIsChecked: PropTypes.func,
};

export default CheckBoxBtn;
