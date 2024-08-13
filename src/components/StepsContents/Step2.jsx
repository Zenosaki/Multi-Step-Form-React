import Title from '../StepContentTitle'
import Card from '../MiniComponents/Step2-Card'
import pro from '../../assets/images/icon-pro.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import arcade from '../../assets/images/icon-arcade.svg'
import { useState } from 'react';
import {Data} from '../../Data/Data'

export default function Step2(){
const [Type,setType] = useState('Monthly')

const triggertype = () => {
  setType(prevType => prevType === 'Monthly' ? 'Yearly' : 'Monthly');
};

  return(
    <div className="Step-Content-Container">
      <Title title='Select your plan' description='You have the option of monthly or yearly billing. '/>
      <div className="content">
        <div className="Cards-Container">
          <Card
            icon={arcade}
            title='Arcade'
            price={Data[0].arcade.price[Type]}
            type={Type}
            bonus="2 months free"
            default="CardActive"
          />
          <Card
            icon={advanced}
            title='Advanced'
            price={Data[0].advanced.price[Type]}
            type={Type}
            bonus="2 months free"
            default=""
          />
          <Card
            icon={pro}
            title='Pro'
            price={Data[0].pro.price[Type]}
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