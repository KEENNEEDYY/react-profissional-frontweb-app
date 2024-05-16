import { useState } from 'react';
import { CredentialsDTO } from '../../../models/auth';
import * as authService from '../../../services/auth-service';
import './styles.css';

export default function Login() {

    const [formdata, setFormData] = useState<CredentialsDTO>({
        username: '',
        password: ''
    })

    function handlesubmit(event: any){
        event.preventDefault();
        authService.loginRequest(formdata)
        .then( response => {
            authService.saveAccessToken(response.data.access_token);
        })
        .catch(error => console.log("Error no login: ", error));
    }

    function handleInputChange(event: any){
        const name = event.target.name;
        const value = event.target.value;
        setFormData({...formdata, [name]: value});
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handlesubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <input 
                                    name="username"
                                    value={formdata.username}
                                    className="dsc-form-control" 
                                    type="text" 
                                    placeholder="Email" 
                                    onChange={handleInputChange}
                                />
                                    <div className="dsc-form-error"></div>
                            </div>
                            <div>
                                <input 
                                    name="password"
                                    value={formdata.password}
                                    className="dsc-form-control" 
                                    type="password" 
                                    placeholder="Senha" 
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}