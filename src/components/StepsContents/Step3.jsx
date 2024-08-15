import Title from '../StepContentTitle'
import Checkbox from '../MiniComponents/Step3-Checkbox'
import {Dtype} from '../../Data/Data'
import {S3Data} from '../../Data/Data'



export default function Step3(){
  return(
    <div className="Step-Content-Container">
      <Title title='Pick add-ons' description='Add-ons help enhance your gaming experince.'/>
      <div className="content">
        <Checkbox
          service="Online service"
          specs="Access to multiplayer games"
          price={S3Data[0].service[Dtype].int}
          symbol={S3Data[0].service[Dtype].symbole}
        />
        <Checkbox
          service="Larger storage"
          specs="Extra 1TB of cloud save"
          price={S3Data[0].storage[Dtype].int}
          symbol={S3Data[0].storage[Dtype].symbole}
        />
        <Checkbox
          service="Customizable profile"
          specs="Custom theme on your profile"
          price={S3Data[0].profile[Dtype].int}
          symbol={S3Data[0].profile[Dtype].symbole}
        />
      </div>
    </div>
  )
}