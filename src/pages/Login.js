import { useCustomMultiStepsForm } from "../hooks/useCustomForm";
import classes from "./Login.module.css";

const Login = () => {
  const { currStepIndex, steps, step } = useCustomMultiStepsForm([
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
            {step}
            <div>
              <button>Back</button>
              <button>Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
