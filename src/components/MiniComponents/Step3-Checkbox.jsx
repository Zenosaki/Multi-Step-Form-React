import PropTypes from 'prop-types'


export default function Checkbox(props){
  return(
    <div className="checkBox">
      <div className="LeftSide">
        <div className="checkIcon"></div>
        <div className="service">
          <h4>{props.service}</h4>
          <h4 className='ServiceP'>{props.specs}</h4>
        </div>
      </div>
      <h4 className='Price'>+${props.price}/{props.symbol}</h4>
    </div>
  )
}

Checkbox.propTypes ={
  service: PropTypes.string,
  specs: PropTypes.string,
  price: PropTypes.number,
  symbol: PropTypes.string,
}