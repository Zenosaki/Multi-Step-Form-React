import { useState } from 'react';
import StepShower from '../components/StepNavElement'
import Step1 from '../components/StepsContents/Step1'
import Step2 from '../components/StepsContents/Step2'
import Step3 from '../components/StepsContents/Step3'
import Step4 from '../components/StepsContents/Step4'
import Step5 from '../components/StepsContents/Step5'
import Buttons from '../components/StepContentButtons'

export default function Main(){
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => (prevStep < 5 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const verify = () => {
    if (currentStep === 1) {
      let counter=0;
      document.querySelectorAll('.input-field').forEach((element) => {
        if (element.value.trim() === '') {
          element.classList.add('ErrorActive');
          element.parentElement.querySelector('.Error-message').style.display = 'block';
        } else {
          element.classList.remove('ErrorActive');
          element.parentElement.querySelector('.Error-message').style.display = 'none';
          counter ++
        }
      });
      if(counter ===3){
        nextStep();
      }
    } else {
      nextStep();
    }
  };
  
  

  return(
    <main>
      <div className="Card-Box">
        <div className="Step-Navigator">
          <StepShower currentS={currentStep} Step='1' StepTitle='YOUR INFO'/>
          <StepShower currentS={currentStep} Step='2' StepTitle='SELECT PLAN'/>
          <StepShower currentS={currentStep} Step='3' StepTitle='ADD-ONS'/>
          <StepShower currentS={currentStep} Step='4' StepTitle='SUMMARY'/>
        </div>
        <div className="Step-Content">
            {currentStep === 1 && <Step1 />}
            {currentStep === 2 && <Step2 />}
            {currentStep === 3 && <Step3 />}
            {currentStep === 4 && <Step4 />}
            {currentStep === 5 && <Step5 />}
            <Buttons 
              prevStep={prevStep} 
              currentStep={currentStep}
              nextStep={verify}
            />
        </div>
      </div>
    </main>
  )
}