import "./Login.css";
import Topbar from "./../../Components/Topbar/Topbar";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";
import Button from "../../Components/Form/Button";
import { useForm } from "../../src/hooks/useform";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "./../../src/validators/rules";
import { useContext, useState } from "react";
import AuthContext from "../../src/context/authCpontext";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [isGoogleRecaptchVerify, setIGoogleRecaptchVerify] = useState(false);

  // ----------custom hook to get inputs value.
  const [formState, onInputHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  // console.log(formState);
  // ----------custom hook to get inputs value.

  const userLogin = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`http://localhost:4000/v1/auth/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          return response.text.then((text) => {
            throw new Error(text);
          });
        } else {
          return response.json();
        }
      })
      .then((result) => {
        swal({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          buttons: "ورود به پنل",
        }).then((value) => {
          navigate("/");
        });

        authContext.login({}, result.accessToken);
      })
      .catch((err) => {
        swal({
          title: " همچین کاربری یافت نشد.",
          icon: "error",
          buttons: "تلاش دوباره",
        });
      });
  };

  const onChangeHandler = () => {
    console.log("google recaptch is confirmed");
    setIGoogleRecaptchVerify(true);
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <section className="login-register">
        <div className="login">
          <span className="login__title">ورود به حساب کاربری</span>
          <span className="login__subtitle">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="login__new-member">
            <span className="login__new-member-text">کاربر جدید هستید؟</span>
            <Link className="login__new-member-link" to="/register">
              ثبت نام
            </Link>
          </div>
          <form action="#" className="login-form">
            <div className="login-form__username">
              <Input
                className="login-form__username-input"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="login-form__username-icon fa fa-user"></i>
            </div>
            <div className="login-form__password">
              <Input
                className="login-form__password-input"
                id="password"
                type="password"
                placeholder="رمز عبور"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="login-form__password-icon fa fa-lock-open"></i>
            </div>
            <div className="login-form__recaptcha">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChangeHandler}
              />
            </div>
            <Button
              className={`login-form__btn ${
                formState.isFormValid && isGoogleRecaptchVerify
                  ? "successBtn"
                  : "errorBtn"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={(!formState.isFormValid || !isGoogleRecaptchVerify)}
            >
              <i className="login-form__btn-icon fas fa-sign-out-alt"></i>
              <span className="login-form__btn-text">ورود</span>
            </Button>
            <div className="login-form__password-setting">
              <label className="login-form__password-remember">
                <input
                  className="login-form__password-checkbox"
                  type="checkbox"
                />
                <span className="login-form__password-text">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="login-form__password-forget">
                <a className="login-form__password-forget-link" href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="login__des">
            <span className="login__des-title">سلام کاربر محترم:</span>
            <ul className="login__des-list">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
