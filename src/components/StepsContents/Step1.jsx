import Title from '../StepContentTitle'
import Input from '../MiniComponents/Step1-Input'

export default function Step1(){
  return(
    <div className="Step-Content-Container">
      <Title 
        title='Personal info' 
        description='Please provide your name, email address, and phone number.'
      />
      <div className="content">
        <Input placeholder='e.g. Stephen King' type='text' label='Name'/>
        <Input placeholder='e.g. stephenking@lorem.com' type='email' label='Email Address'/>
        <Input placeholder='e.g. +1 234 567 890' type='tel' label='Phone Number'/>
      </div>
  </div>
  )
}