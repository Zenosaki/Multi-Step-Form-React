import Title from '../StepContentTitle'
import Card from '../MiniComponents/Step2-Card'
import pro from '../../assets/images/icon-pro.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import { useState } from 'react';
import {S2Data} from '../../Data/Data'
import {setDtype } from '../../Data/Data';

export default function Step2(){
const [Type,setType] = useState('Monthly')

const triggertype = () => {
  setType((prevType) => {
    const newType = prevType === 'Monthly' ? 'Yearly' : 'Monthly';
    setDtype(newType);
    return newType;
  });
};
  return(
    <div className="Step-Content-Container">
      <Title title='Select your plan' description='You have the option of monthly or yearly billing. '/>
      <div className="content">
        <div className="Cards-Container">
          <Card
            icon={arcade}
            title='Arcade'
            price={S2Data[0].Arcade.price[Type].int}
            symbole={S2Data[0].Advanced.price[Type].symbole}
            type={Type}
            bonus="2 months free"
            default="CardActive"
          />
          <Card
            icon={advanced}
            title='Advanced'
            price={S2Data[0].Advanced.price[Type].int}
            symbole={S2Data[0].Advanced.price[Type].symbole}
            type={Type}
            bonus="2 months free"
            default=""
          />
          <Card
            icon={pro}
            title='Pro'
            price={S2Data[0].Pro.price[Type].int}
            symbole={S2Data[0].Advanced.price[Type].symbole}
            type={Type}
            bonus="2 months free"
            default=""
          />
        </div>
        <div className="Switcher">
          <h5 className={`Monthly ${Type === 'Monthly' ? 'SwitchActive' : ''}`}>Monthly</h5>
          <div className="SwitchButton" onClick={triggertype}>
            <div className={`Dot ${Type === 'Yearly' ? 'DotActive' : ''}`}></div>
          </div>
          <h5 className={`Yearly ${Type === 'Yearly' ? 'SwitchActive' : ''}`}>Yearly</h5>
        </div>
      </div>
  </div>
  )
}