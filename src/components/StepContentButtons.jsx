import PropTypes from 'prop-types';

export default function Buttons(props){
  return(
    <div className='Card-Buttons'>
    <button
    className='Back-Button' onClick={props.prevStep}
    style={props.currentStep===1 || props.currentStep===5  ? 
    {
      color:'transparent',
      cursor: 'default',
    } : {display: 'inline-block'}}
    >
      Go Back</button>
    <button
     className={`${props.currentStep==4 ?'Finish-Button':'Next-Button'}`} onClick={props.nextStep}
     style={props.currentStep===5  ? {display: 'none'} : {display: 'Block'} }
     >{props.currentStep==4 ? 'Confirm' : 'Next Step'}
     </button>
  </div>
  )
}

Buttons.propTypes = {
  prevStep: PropTypes.func,
  nextStep:  PropTypes.func,
  currentStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};