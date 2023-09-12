import PropTypes from 'prop-types';

function FormInput({ type, name, id, placeholder, label, width = 'w-full' }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`border border-dibBlack pl-5
        rounded-full leading-[60px] ${width}`}
      />
    </>
  );
}

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'file', 'passwordConfirm']),
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.string,
  label: PropTypes.string,
};