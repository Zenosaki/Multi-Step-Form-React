import PropTypes from 'prop-types' 

export default function card(props){
  return(
    <div className="Card">
      <img src={props.icon} alt="icone"/>
      <div className="desc">
        <h4 >{props.title}</h4>
        <h5>{props.price}</h5>
        {props.type == 'yearly' ? <h5 className='Bonus'>{props.bonus}</h5>: ''}
      </div>
    </div>
  )
}

card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  type:PropTypes.string,
};