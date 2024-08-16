import { useState, useEffect } from 'react';
import Title from '../StepContentTitle';
import Checkbox from '../MiniComponents/Step3-Checkbox';
import { Dtype, S3Data, SavedData, updateData } from '../../Data/Data';

export default function Step3() {
  const [selectedAddOns, setSelectedAddOns] = useState(
    JSON.parse(localStorage.getItem('selectedAddOns')) || {}
  );

  
  const handleCheckboxClick = (service) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      const updatedAddOns = { ...prevSelectedAddOns };

      if (updatedAddOns[service]) {
        delete updatedAddOns[service];
        const index = SavedData[1].AddOns.indexOf(service);
        if (index > -1) {
          SavedData[1].AddOns.splice(index, 1);
          SavedData[1].AddonsPrices.splice(index, 1);
        }
      } else {
        updatedAddOns[service] = true;

        if (!SavedData[1].AddOns.includes(service)) {
          SavedData[1].AddOns.push(service);
          SavedData[1].AddonsPrices.push(S3Data[0][service.replace(" ", "")][Dtype].int);
        }
      }

      updateData(SavedData[1].AddOns);
      console.log(SavedData);
      return updatedAddOns;
    });
  };

  useEffect(() => {
    localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
  }, [selectedAddOns]);

  return (
    <div className="Step-Content-Container">
      <Title title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <div className="content">
        <Checkbox
          service="Online service"
          specs="Access to multiplayer games"
          price={S3Data[0].Onlineservice[Dtype].int}
          symbol={S3Data[0].Onlineservice[Dtype].symbole}
          isActive={selectedAddOns['Online service']}
          onClick={() => handleCheckboxClick('Online service')}
        />
        <Checkbox
          service="Larger storage"
          specs="Extra 1TB of cloud save"
          price={S3Data[0].Largerstorage[Dtype].int}
          symbol={S3Data[0].Largerstorage[Dtype].symbole}
          isActive={selectedAddOns['Larger storage']}
          onClick={() => handleCheckboxClick('Larger storage')}
        />
        <Checkbox
          service="Customizable profile"
          specs="Custom theme on your profile"
          price={S3Data[0].Customizableprofile[Dtype].int}
          symbol={S3Data[0].Customizableprofile[Dtype].symbole}
          isActive={selectedAddOns['Customizable profile']}
          onClick={() => handleCheckboxClick('Customizable profile')}
        />
      </div>
    </div>
  );
}
