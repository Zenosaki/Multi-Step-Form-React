import { useState } from 'react';
import StepShower from '../components/StepNavElement'
import Step1 from '../components/StepsContents/Step1'
import Step2 from '../components/StepsContents/Step2'
import Step3 from '../components/StepsContents/Step3'
import Step4 from '../components/StepsContents/Step4'
import Step5 from '../components/StepsContents/Step5'

export default function Main(){
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => (prevStep < 5 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  return(
    <main>
      <div className="Card-Box">
        <div className="Step-Navigator">
          <StepShower Step='1' StepTitle='YOUR INFO'/>
          <StepShower Step='2' StepTitle='SELECT PLAN'/>
          <StepShower Step='3' StepTitle='ADD-ONS'/>
          <StepShower Step='4' StepTitle='SUMMARY'/>
        </div>
        <div className="Step-Content">
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {currentStep === 3 && <Step3 />}
            {currentStep === 4 && <Step4 />}
            {currentStep === 5 && <Step5 />}
          <div>
            <button className='Back-Button' onClick={prevStep}>Go Back</button>
            <button className='Next-Button' onClick={nextStep}>Next Step</button>
          </div>
        </div>
      </div>
    </main>
  )
}