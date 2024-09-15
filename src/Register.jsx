import './Login';
import { Link } from 'react-router-dom';

function Register() {
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
                    <div className="input-group">
                        <input type="password" className="input-field" placeholder="Confirm Password" required />                    
                    </div>
                    <button type="submit" className="submit-button">Register</button>
                    <div className="register-link">
                        <span>Already create an Account? <Link to='/login'>Login</Link></span>
                    </div>                    
                </form>
            </div>
        </div>
    );
}

export default Register;