import { useCustomMultiStepsForm } from "../hooks/useCustomForm";
import classes from "./Login.module.css";

const Login = () => {
  const { currStepIndex, steps, step, goNextStep, goPrevStep, isFirstStep, isLastStep } = useCustomMultiStepsForm([
    <div>one</div>,
    <div>two</div>,
  ]);

  return (
    <>
      <div className={classes["reservation-wrapper"]}>
        <div className={classes["form-wrapper"]}>
          <form>
            <div className={classes["page"]}>
              {currStepIndex + 1}/{steps.length}
            </div>
            <div className={classes["input-fields"]}>{step}</div>
            <div className={classes["back-next-button"]}>
              {!isFirstStep && <button type="button" onClick={goPrevStep}>Back</button>}
              <button type="button" onClick={goNextStep}>{!isLastStep? "Next":"Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
