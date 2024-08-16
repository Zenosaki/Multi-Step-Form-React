import { useState, useEffect } from 'react';
import Title from '../StepContentTitle';
import Checkbox from '../MiniComponents/Step3-Checkbox';
import { Dtype } from '../../Data/Data';
import { S3Data } from '../../Data/Data';
import {SavedData} from '../../Data/Data'

export default function Step3() {
  const [selectedAddOns, setSelectedAddOns] = useState(
    JSON.parse(localStorage.getItem('selectedAddOns')) || {}
  );

  // Handle checkbox click
  const handleCheckboxClick = (service) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      const updatedAddOns = { ...prevSelectedAddOns };
  
    
      if (updatedAddOns[service]) {
        delete updatedAddOns[service];
  
       
        SavedData[1].AddOns = SavedData[1].AddOns.filter(item => item !== service);
      } else {

        updatedAddOns[service] = true;
  

        if (!SavedData[1].AddOns.includes(service)) {
          SavedData[1].AddOns.push(service);
        }
      }
      
      return updatedAddOns;
    });
  };
  

  // Save selected add-ons to localStorage
  useEffect(() => {
    localStorage.setItem('selectedAddOns', JSON.stringify(selectedAddOns));
  }, [selectedAddOns]);
  console.log(SavedData[1].AddOns)
  return (
    <div className="Step-Content-Container">
      <Title title='Pick add-ons' description='Add-ons help enhance your gaming experience.' />
      <div className="content">
        <Checkbox
          service="Online service"
          specs="Access to multiplayer games"
          price={S3Data[0].service[Dtype].int}
          symbol={S3Data[0].service[Dtype].symbole}
          isActive={selectedAddOns['Online service']}
          onClick={() => handleCheckboxClick('Online service')}
        />
        <Checkbox
          service="Larger storage"
          specs="Extra 1TB of cloud save"
          price={S3Data[0].storage[Dtype].int}
          symbol={S3Data[0].storage[Dtype].symbole}
          isActive={selectedAddOns['Larger storage']}
          onClick={() => handleCheckboxClick('Larger storage')}
        />
        <Checkbox
          service="Customizable profile"
          specs="Custom theme on your profile"
          price={S3Data[0].profile[Dtype].int}
          symbol={S3Data[0].profile[Dtype].symbole}
          isActive={selectedAddOns['Customizable profile']}
          onClick={() => handleCheckboxClick('Customizable profile')}
        />
      </div>
    </div>
  );
}
