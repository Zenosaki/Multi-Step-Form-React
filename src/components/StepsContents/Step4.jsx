import Title from '../StepContentTitle';
import PropTypes from 'prop-types';

export default function Step4(props) {
  const Data = JSON.parse(localStorage.getItem('SavedData'));
  
  let total = Data[0].Plan.Price.int;
  Data[1].AddonsPrices.forEach((price) => {
    total += price;
  });

  const ReturnTo = (step) => {
    props.setCurrentStep(step);
  };

  return (
    <div className="Step-Content-Container">
      <Title title="Finishing up" description="Double-check everything looks OK before confirming." />
      <div className="content Step4">
        <div className="Plan">
          <div>
            <h4>{Data[0].Plan.name} ({Data[0].Plan.type})</h4>
            <button onClick={() => ReturnTo(props.currentStep - 2)}>Change</button>
          </div>
          <h4>${Data[0].Plan.Price.int}/{Data[0].Plan.Price.symbole}</h4>
        </div>

        <hr />

        <div className="Addons">
          {Data[1].AddOns.map((element, index) => (
            <div key={index} className="Addon">
              <h5>{element}</h5>
              <h5 className="AddonPrice">+${Data[1].AddonsPrices[index]}/{Data[0].Plan.Price.symbole}</h5>
            </div>
          ))}
        </div>
        <div className="total">
          <h5>Total (per {Data[0].Plan.type === 'Monthly' ? 'month' : 'year'})</h5>
          <h3>+${total}/{Data[0].Plan.Price.symbole}</h3>
        </div>
      </div>
    </div>
  );
}


Step4.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired, 
};
