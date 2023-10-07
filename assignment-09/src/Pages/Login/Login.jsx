import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state : "/" );

        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="py-10" >
            <h2 className="text-3xl font-bold text-center my-10">PLease Login</h2>
            <form onSubmit={handleLogin} className="mx-auto p-12 md:w-3/4 lg:w-1/2">
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Provide your name here" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Provide your image url here" className="input input-bordered" required />
                </div> */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Provide your email here" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-gray-500">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Provide your password here" className="input input-bordered" required />
                    {/* <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center text-gray-500  mt-8">Do not have an account? Please <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;