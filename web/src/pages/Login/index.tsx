import React from 'react';

import './styles.css';

import background from '../../assets/images/success-background.svg';
import logo from '../../assets/images/logo.svg';
import heart from '../../assets/images/icons/purple-heart.svg';

function Login() {
    return (
        <div id="page-login">
            <div id="page-left">
                <img src={background} alt="" id="page-background"/>
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h2>Sua plataforma de <br></br> estudos online.</h2>
                </div>
            </div>
            <div id="page-right">
                <div id="title-login">
                    <h1>Fazer Login</h1>
                </div>
                <form id="form-login">
                    <input placeholder="E-mail" name="email"/>
                    <input placeholder="Senha" name="password"/>
                    <div id="footer-form">
                        <div id="checkbox">
                            <input type="checkbox" name="check" id="check"/>
                            <label htmlFor="check">Lembrar-me</label>
                        </div>
                        <span>Esqueci minha senha</span>
                    </div>
                    
                    <button>Entrar</button>

                    <footer>
                        <div>
                            <h3>Não tem conta?</h3>
                            <a href="#">Cadastre-se</a>
                        </div>
                        <span>
                            É de graça
                            <img src={heart} alt="corção"/>
                        </span>
                    </footer>
                </form>
            </div>
            
        </div>
    );
}

export default Login;