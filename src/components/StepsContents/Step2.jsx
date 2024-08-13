import Title from '../StepContentTitle'
import Card from '../MiniComponents/Step2-Card'
import pro from '../../assets/images/icon-pro.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import arcade from '../../assets/images/icon-arcade.svg'

export default function Step2(){
  return(
    <div className="Step-Content-Container">
      <Title title='Select your plan' description='You have the option of monthly or yearly billing. '/>
      <div className="content">
        <div className="Cards-Container">
          <Card
            icon={arcade}
            title='Arcade'
            price="$9/mo"
            type="monthly"
            bonus="2 months free"
          />
          <Card
            icon={advanced}
            title='Advanced'
            price="$12/mo"
            type="monthly"
            bonus="2 months free"
          />
          <Card
            icon={pro}
            title='Pro'
            price="$15/mo"
            type="monthly"
            bonus="2 months free"
          />
        </div>
        <div className="Switcher">
          <h5 className='SwitchActive'>Monthly</h5>
          <div className="SwitchButton">
            <div className="Dot"></div>
          </div>
          <h5>Yearly</h5>
        </div>
      </div>
  </div>
  )
}