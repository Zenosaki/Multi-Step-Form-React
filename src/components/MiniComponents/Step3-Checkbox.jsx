import Tick from '../../assets/images/icon-checkmark.svg';
import PropTypes from 'prop-types';

const SetActive = (event) => {
  const element = event.currentTarget;
  element.classList.toggle('Tactive');
};

export default function Checkbox(props) {
  return (
    <div onClick={SetActive} className="checkBox">
      <div className="LeftSide">
        <div className="checkIcon">
          <img src={Tick} alt="Tick Icon" />
        </div>
        <div className="service">
          <h4>{props.service}</h4>
          <h4 className="ServiceP">{props.specs}</h4>
        </div>
      </div>
      <h4 className="Price">+${props.price}/{props.symbol}</h4>
    </div>
  );
}

Checkbox.propTypes = {
  service: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
};
