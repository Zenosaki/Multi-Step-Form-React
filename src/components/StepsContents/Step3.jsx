import { useState, useEffect } from 'react';
import Title from '../StepContentTitle';
import Checkbox from '../MiniComponents/Step3-Checkbox';
import { Dtype, S3Data, SavedData } from '../../Data/Data';

export default function Step3() {
  const [selectedAddOns, setSelectedAddOns] = useState(
    JSON.parse(localStorage.getItem('selectedAddOns')) || {}
  );

  
  const handleCheckboxClick = (service, price) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      const updatedAddOns = { ...prevSelectedAddOns };
      const addOnsIndex = SavedData[1].AddOns.indexOf(service);

      if (updatedAddOns[service]) {
        
        delete updatedAddOns[service];
        
        if (addOnsIndex > -1) {
          SavedData[1].AddOns.splice(addOnsIndex, 1); // 
          SavedData[1].AddonsPrices.splice(addOnsIndex, 1);
        }
      } else {
        
        updatedAddOns[service] = true;

        if (addOnsIndex === -1) {
          SavedData[1].AddOns.push(service);
          SavedData[1].AddonsPrices.push(price);
        }
      }

   
      localStorage.setItem('SavedData', JSON.stringify(SavedData));

      return updatedAddOns;
    });
  };

  // Save selected add-ons to localStorage
  useEffect(() => {
    localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
  }, [selectedAddOns]);

  return (
    <div className="Step-Content-Container">
      <Title title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <div className="content">
        <Checkbox
          service="Online service"
          specs="Access to multiplayer games"
          price={S3Data[0].Onlineservice[Dtype].int}
          symbol={S3Data[0].Onlineservice[Dtype].symbole}
          isActive={selectedAddOns['Online service']}
          onClick={() => handleCheckboxClick('Online service', S3Data[0].Onlineservice[Dtype].int)}
        />
        <Checkbox
          service="Larger storage"
          specs="Extra 1TB of cloud save"
          price={S3Data[0].Largerstorage[Dtype].int}
          symbol={S3Data[0].Largerstorage[Dtype].symbole}
          isActive={selectedAddOns['Larger storage']}
          onClick={() => handleCheckboxClick('Larger storage', S3Data[0].Largerstorage[Dtype].int)}
        />
        <Checkbox
          service="Customizable profile"
          specs="Custom theme on your profile"
          price={S3Data[0].Customizableprofile[Dtype].int}
          symbol={S3Data[0].Customizableprofile[Dtype].symbole}
          isActive={selectedAddOns['Customizable profile']}
          onClick={() => handleCheckboxClick('Customizable profile', S3Data[0].Customizableprofile[Dtype].int)}
        />
      </div>
    </div>
  );
}
