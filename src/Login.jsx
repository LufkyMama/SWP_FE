import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
        <div>
            <h1>Login</h1>
            <form action="">
            <div>
                <input type="email" placeholder="Email" />
                <label htmlFor="email">Email</label>    
            </div>
            <div>
                <input type="password" placeholder="Password" />
                <label htmlFor="password">Password</label>    
            </div>
            <div>
                <div>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember me</label>
                </div>
                <span>Forgot Password?</span>
            </div>
            <button type="Submit">Login</button>
            <div>
                <span>Don&apos;t have an account? <Link to="/Register">Create an account</Link></span>
            </div>
            </form>
        </div>
      </div>  
    );
};

export default Login;