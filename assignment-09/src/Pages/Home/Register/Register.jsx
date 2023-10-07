import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const Register = () => {
    const { createUserWithEmail } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        createUserWithEmail(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className="py-10" >
            <h2 className="text-3xl font-bold text-center my-10">PLease Register</h2>
            <form onSubmit={handleRegister} className="mx-auto p-12 md:w-3/4 lg:w-1/2">
                <div className="form-control">
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
                </div>
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

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center
         text-gray-500  mt-8">Already have an account? Please <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
        </div>
    );
};

export default Register;