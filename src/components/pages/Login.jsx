import React, { useContext } from "react";
import { AuthContext } from "../contex/index";
import MyButton from "../UI/buttons/MyButton";
import MyInput from "../UI/input/MyInput";

const Login = () => {
    
const {isAuth, setIsAuth} = useContext(AuthContext);

const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
};

 return (
     <div className="login">
         <div className="login__info">Вся информация доступна только для зарегистрированных пользователей!</div>
        <br/>
        <div className="login__title">Введите логин и пароль:</div>
        <br/>
        <form onSubmit={login} className="login__form">
          <MyInput type="text" placeholder="Login"/>
          <br/>
          <MyInput type="password" placeholder="Passsword"/>
          <br/>
          <MyButton>Войти</MyButton>
        </form>
    </div>
 );
};

export default Login;
