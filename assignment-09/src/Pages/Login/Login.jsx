import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1000
                })
                console.log(result.user);
                navigate(location?.state ? location.state : "/");

            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'top-middle',
                    icon: 'error',
                    title: 'Login Unsuccessful',
                    showConfirmButton: false,
                    timer: 1000
                })
            })
    }

    const handleGoogleLogin = () => {
        console.log("google btn clicked");
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1000
            })
            navigate('/')
        })
        .catch(error =>{
            console.error(error)
            
        })


    }

    return (
        <div>
            <div className="py-10" >
                <h2 className="text-3xl font-bold text-center my-10">PLease Login</h2>
                <form onSubmit={handleLogin} className="mx-auto p-12 md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold text-gray-500">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Provide your email here" className="input input-bordered" required />
                    </div>
                    <div className="form-control  relative ">
                        <label className="label">
                            <span className="label-text font-bold text-gray-500">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Provide your password here" className="input input-bordered" required />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute bottom-3 right-3 text-xl">
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center text-gray-500  ">Do not have an account? Please <Link className="font-bold text-blue-500" to="/register">Register</Link></p>
            </div>
            <div className="flex justify-center items-center">
                <button onClick={handleGoogleLogin} className="btn bg-purple-700 text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;