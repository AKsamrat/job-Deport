import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import regImg from '../../assets/register.jpg';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#e0f7fa] to-[#ffffff] py-10 px-4">
      <div className="max-w-6xl mx-auto p-10 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Side Image and Title */}
        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00C2CB] mb-5">Register Now!</h1>
          <img src={regImg} alt="Register Illustration" className="rounded-lg max-h-full w-full object-contain mt-3" />
        </div>

        {/* Right Side Form Card */}
        <div className="w-full lg:w-1/2 bg-white p-6  rounded-lg shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                {...register('name', { required: true })}
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00C2CB]"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>

            {/* Photo URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
              <input
                {...register('photo', { required: true })}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00C2CB]"
              />
              {errors.photo && <p className="text-red-500 text-sm mt-1">Photo URL is required</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00C2CB]"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input
                  {...register('password', { required: true })}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="******"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#00C2CB]"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2.5 right-3 text-gray-600 cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
            </div>

            {/* Error Display */}
            {registerError && (
              <p className="text-sm text-red-600 font-semibold">{registerError}</p>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#00C2CB] text-white rounded-md text-lg font-semibold hover:bg-[#009da6] transition"
              >
                Register
              </button>
            </div>

          </form>

          {/* Redirect Link */}
          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#00C2CB] font-semibold underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
