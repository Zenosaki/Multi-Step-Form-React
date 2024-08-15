import Tick from '../../assets/images/icon-checkmark.svg';
import PropTypes from 'prop-types';

export default function Checkbox({ service, specs, price, symbol, isActive, onClick }) {
  return (
    <div onClick={onClick} className={`checkBox ${isActive ? 'Tactive' : ''}`}>
      <div className="LeftSide">
        <div className="checkIcon">
          {isActive && <img src={Tick} alt="Tick Icon" />}
        </div>
        <div className="service">
          <h4>{service}</h4>
          <h4 className="ServiceP">{specs}</h4>
        </div>
      </div>
      <h4 className="Price">+${price}/{symbol}</h4>
    </div>
  );
}

Checkbox.propTypes = {
  service: PropTypes.string.isRequired,
  specs: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
