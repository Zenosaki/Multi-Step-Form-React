import { useState } from "react";
import StepShower from "../components/StepNavElement";
import Step1 from "../components/StepsContents/Step1";
import Step2 from "../components/StepsContents/Step2";
import Step3 from "../components/StepsContents/Step3";
import Step4 from "../components/StepsContents/Step4";
import Step5 from "../components/StepsContents/Step5";
import Buttons from "../components/StepContentButtons";

const steps = [
  { component: Step1, title: "YOUR INFO" },
  { component: Step2, title: "SELECT PLAN" },
  { component: Step3, title: "ADD-ONS" },
  { component: Step4, title: "SUMMARY" },
  { component: Step5, title: "" },
];

export default function Main() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = steps.length;

  const nextStep = () => {
    setCurrentStep((prevStep) =>
      prevStep < totalSteps ? prevStep + 1 : prevStep
    );
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const verify = () => {
    if (currentStep === 1) {
      let validCount = 0;
      document.querySelectorAll(".input-field").forEach((element) => {
        const errorMessage =
          element.parentElement.querySelector(".Error-message");
        if (element.value.trim() === "") {
          element.classList.add("ErrorActive");
          errorMessage.style.display = "block";
        } else {
          element.classList.remove("ErrorActive");
          errorMessage.style.display = "none";
          validCount++;
        }
      });
      if (validCount === document.querySelectorAll(".input-field").length) {
        nextStep();
      }
    } else {
      nextStep();
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <main>
      <div className="Card-Box">
        <div className="Step-Navigator">
          {steps.slice(0, totalSteps - 1).map((step, index) => (
            <StepShower
              key={index}
              currentS={currentStep}
              Step={index + 1}
              StepTitle={step.title}
            />
          ))}
        </div>
        <div className="Step-Content">
          <CurrentStepComponent
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <Buttons
            prevStep={prevStep}
            currentStep={currentStep}
            nextStep={verify}
          />
        </div>
      </div>
    </main>
  );
}
