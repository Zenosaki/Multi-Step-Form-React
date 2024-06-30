import PropTypes from 'prop-types';

export default function Input(props){
  return(
    <div>
      <div className="Input-Label">
        <label>{props.label}</label>
        <h4 className='Error-message'>This feild is required</h4>
      </div>
      <input required placeholder={props.placeholder} name='User-name' type={props.type} />
    </div>
  )
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};