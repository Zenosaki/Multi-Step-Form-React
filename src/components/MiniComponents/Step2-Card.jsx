import PropTypes from 'prop-types';

export default function Card({ icon, title, price, type, symbole, bonus, default: defaultClass, onClick }) {
  return (
    <div className={`Card ${defaultClass}`} onClick={onClick}>
      <img src={icon} alt="icon" />
      <div className="desc">
        <h4>{title}</h4>
        <h5>${price}/{symbole}</h5>
        {type === 'Yearly' && <h5 className='Bonus'>{bonus}</h5>}
      </div>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  symbole: PropTypes.string.isRequired,
  bonus: PropTypes.string,
  default: PropTypes.string,
  onClick: PropTypes.func.isRequired
};
