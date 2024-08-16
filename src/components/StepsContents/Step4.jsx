import Title from '../StepContentTitle';
import { SavedData } from '../../Data/Data';

export default function Step4() {
    let total = SavedData[0].Plan.Price.int;
    SavedData[1].AddonsPrices.forEach((price)=>{
      total += price;
      return total
    })

  return (
    <div className="Step-Content-Container">
      <Title title="Finishing up" description="Double-check everything looks OK before confirming." />
      <div className="content">
        <div className="Plan">
          <div>
            <h4>{SavedData[0].Plan.name} ({SavedData[0].Plan.type})</h4>
            <button>Change</button>
          </div>
          <h4>${SavedData[0].Plan.Price.int}/{SavedData[0].Plan.Price.symbole}</h4>
        </div>

        <hr />

        <div className="Addons">
          {SavedData[1].AddOns.map((element, index) => (
            <div key={index} className="Addon">
              <h5>{element}</h5>
              <h5>+${SavedData[1].AddonsPrices[index]}/{SavedData[0].Plan.Price.symbole}</h5>
            </div>
          ))}
        </div>
        <div className="total">
          <h5>Total (per {SavedData[0].Plan.type==='Monthly'? 'month':'year'})</h5>
          <h3>+${total}/{SavedData[0].Plan.Price.symbole}</h3>
        </div>
      </div>
    </div>
  );
}
