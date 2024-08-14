import PropTypes from 'prop-types' 

export default function card(props){
  const MakeActive=(event)=>{
    const card = event.currentTarget; 
    card.classList.add('CardActive');
    const allCards = document.querySelectorAll('.Card');
    allCards.forEach(c => {
      if (c !== card) {
        c.classList.remove('CardActive');
      }
    });
  } 
  return(
    <div className={`Card ${props.default}`} onClick={MakeActive}>
      <img src={props.icon} alt="icone"/>
      <div className="desc">
        <h4 >{props.title}</h4>
        <h5>${props.price}/{props.symbole}</h5>
        {props.type == 'Yearly' && <h5 className='Bonus'>{props.bonus}</h5> }
      </div>
    </div>
  )
}

card.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  type:PropTypes.string,
  symbole:PropTypes.string,
};