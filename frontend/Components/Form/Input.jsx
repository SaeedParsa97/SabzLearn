import { useEffect, useReducer } from "react";
import "./Input.css";
import validator from "../../src/validators/validator";

const Input = (props) => {
  // ----------reducer calback for reducer hook.
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE": {
        return {
          ...state,
          value: action.value,
          isValid: action.isValid,
        };
      }
      default: {
        return state;
      }
    }
  };
  // ----------reducer calback for reducer hook.
  // ----------reducer hook.
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  // ----------reducer hook.

  //---------- to get access to input values in login page
  const { value, isValid } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [value]);
  //---------- to get access to input values in login page

  // ---------- on-change func for sending action to reducer calback.
  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      isValid: validator(event.target.value, props.validations),
    });
  };
  // ---------- on-change func for sending action to reducer calback.

  // ---------- input component based on props element.
  const element =
    props.element == "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`
        ${props.className} 
        ${mainInput.isValid ? "success" : "error"}`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${
          mainInput.isValid ? "success" : "error"
        }`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );
  return <div>{element}</div>;
};

export default Input;
