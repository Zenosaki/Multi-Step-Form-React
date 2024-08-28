import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <div className="input-wrapper">
      <div className="Input-Label">
        <label>{props.label}</label>
        <h4 className="Error-message">This field is required</h4>
      </div>
      <input
        required
        placeholder={props.placeholder}
        className="input-field"
        type={props.type}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
