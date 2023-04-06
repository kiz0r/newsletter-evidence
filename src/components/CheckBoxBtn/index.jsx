import './CheckBoxBtn.sass';

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

export default CheckBoxBtn;
