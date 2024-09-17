import { Link } from 'react-router-dom';
import './Login.css';
<head>
    <title>KFS Login</title>
</head>

function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="form-title">Login</h1>
                <form action="">
                    <div className="input-group">
                        <input type="email" className="input-field" placeholder="Your Email" required />
                        
                    </div>
                    <div className="input-group">
                        <input type="password" className="input-field" placeholder="Your Password" required />
                        

                    </div>
                    <div className='options'>
                        <div className="checkbox-group">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Remember me</label>
                        </div>
                        <span className="forgot-password">Forgot Password?</span>
                    </div>
                    <button type="submit" className="submit-button">Login</button>
                    <div className="register-link">
                        <span>Don&apos;t have an account? <Link to='/Register'>Create an account</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;