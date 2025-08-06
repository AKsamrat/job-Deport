import { useContext, useEffect } from 'react';
import loginImg from '../../assets/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';

type LoginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  if (!authContext) return null;

  const { googleLogin, user, loading } = authContext;

  const from = (location.state as string) || '/';

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const handleSocialLogin = (providerFn: () => Promise<any>) => {
    providerFn()
      .then((result) => {
        if (result.user) {
          toast.success('Successfully logged in');
          navigate(from, { replace: true });
        }
      })
      .catch(() => {
        toast.error('Social login failed');
      });
  };

  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    // const { email, password } = data;
    // signIn(email, password)
    //   .then((result) => {
    //     if (result.user) {
    //       toast.success('Successfully logged in');
    //       navigate(from, { replace: true });
    //     }
    //   })
    //   .catch(() => {
    //     toast.error('Email or password is incorrect');
    //   });
    // reset();
  };

  if (user || loading) return null;

  return (
    <div className=" bg-base-200">
      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <div className="text-center lg:text-left mt-16">
          <h1 className="text-5xl font-bold mb-8 text-center">Login now!</h1>
          <img className="h-[75vh]" src={loginImg} alt="Login" />
        </div>

        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 mt-14 space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">Enter Your Data</h2>

          {/* Google Login */}
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            type="button"
            className="flex items-center justify-center w-full gap-3 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
          >
            <FcGoogle className="text-2xl" />
            <span className="text-base font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <hr className="flex-grow border-t border-gray-200" />
            or
            <hr className="flex-grow border-t border-gray-200" />
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                {...register('email', { required: 'Email is required' })}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C2CB] border-gray-300"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                {...register('password', { required: 'Password is required' })}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C2CB] border-gray-300"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="text-right mt-1">
                <a href="#" className="text-xs text-[#00C2CB] hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <input
                type="submit"
                value="Login"
                className="w-full py-2 bg-[#00C2CB] hover:bg-[#00b0b9] text-white font-semibold rounded-md transition"
              />
            </div>
          </form>

          {/* Register Link */}
          <p className="text-sm text-center text-gray-600">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-[#00C2CB] font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
