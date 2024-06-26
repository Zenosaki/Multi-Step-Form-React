import PropTypes from 'prop-types';

export default function StepElement(props){
  return(
    <div className="Step-Container">
      <div>
        <h3 className="Step">{props.Step}</h3>
      </div>
      <div>
        <h5 className="StepIndicator">Step {props.Step}</h5>
        <h4 className="StepTital">{props.StepTitle}</h4>
      </div>
    </div>
  )
}

StepElement.propTypes = {
  Step: PropTypes.string.isRequired,
  StepTitle: PropTypes.string.isRequired,
};