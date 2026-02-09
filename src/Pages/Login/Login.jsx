import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {

    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    const { signIn, setUser } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin =async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;


        try {
            const user = await signIn(email, pass)
            setUser(user)

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "You have logged in successfully.",
                confirmButtonColor: "#43934A"
            });

            // navigate(location?.state ? location.state : "/");

        } catch (err) {
            // setErrorMessage(err.message);
            console.log(err);
        }
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full md:w-1/2 max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <label className="label"><LoadCanvasTemplate /></label>

                            <input type="text" ref={captchaRef} name="captcha" className="input" placeholder="Type the captcha above" />

                            <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2'>Validate</button>

                            <input disabled={disabled} className="btn btn-neutral mt-4" type="submit" value="Login" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;