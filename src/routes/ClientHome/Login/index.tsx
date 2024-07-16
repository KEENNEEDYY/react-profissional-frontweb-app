import { useContext, useState } from 'react';
import * as forms from '../../../utils/forms';
import * as authService from '../../../services/auth-service';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { ContextToken } from '../../../utils/contex-token';
import FormInput from '../../../components/FormInput';

export default function Login() {

    const { setContextTokenPayload } = useContext(ContextToken);

    const navigate = useNavigate();

    const[submitResponseFail, setSubimitResponseFail] = useState(false);

    const [formData, setFormData] = useState<any>({
        username: {
            value: "",
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Email",
            validation: function (value: string) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.toLowerCase());
            },
            message: "Favor informar um email válido",
        },
        password: {
            value: "",
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Senha",
        }
    })
    
    function handlesubmit(event: any) {
        event.preventDefault();
        setSubimitResponseFail(false);
        const formDataValidated = forms.dirtyAndValidateAll(formData);
        if(forms.hasAnyInvalid(formDataValidated)){
            setFormData(formDataValidated);
            return;
        }
        authService.loginRequest(forms.toValues(formData))
            .then(response => {
                authService.saveAccessToken(response.data.access_token);
                setContextTokenPayload(authService.getAccessTokenPayload());
                navigate("/cart");
            })
            .catch(() => setSubimitResponseFail(true));
    }

    function handleInputChange(event: any) {
        setFormData(forms.update(formData, event.target.name, event.target.value));
    }

    function handleTurnDirty(name: string){
        setFormData(forms.dirtyAndValidate(formData, name));
    }

    return (
        <main>
            <section id="login-section" className="dsc-container">
                <div className="dsc-login-form-container">
                    <form className="dsc-card dsc-form" onSubmit={handlesubmit}>
                        <h2>Login</h2>
                        <div className="dsc-form-controls-container">
                            <div>
                                <FormInput
                                    {...formData.username}                                    
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className="dsc-form-error">{formData.username.message}</div>
                            </div>
                            <div>
                                <input
                                    {...formData.password}
                                    onChange={handleInputChange}
                                    className="dsc-form-control"
                                    onTurnDirty={handleTurnDirty}
                                />
                            </div>
                        </div>

                        {submitResponseFail && 
                            <div className="dsc-form-global-error">
                                Usuário ou senha invalidos
                            </div>
                        }

                        <div className="dsc-login-form-buttons dsc-mt20">
                            <button type="submit" className="dsc-btn dsc-btn-blue">Entrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}