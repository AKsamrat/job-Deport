import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Provider/AuthProvider';
import logo from '../../assets/job1.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const authContext = useContext(AuthContext)!;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  if (!authContext) return null;

  const { user, logOut } = authContext;

  const handleSignout = () => {
    logOut()
      .then(() => toast.success('Logged out successfully'))
      .catch(error => {
        console.error(error);
        toast.error('Logout failed');
      });
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive }) =>
            isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          All Jobs
        </NavLink>
      </li>
      {user?.email && (
        <>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                  : 'hover:text-[#00C2CB]'
              }
            >
              Blogs
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white  dark:bg-[#120505]">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-5">
        <header className="flex justify-between items-center w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 md:w-[180px] w-[150px]"
          >
            <img
              className="md:w-[240px] w-full lg:h-[45px] h-[40px]"
              src={logo}
              alt="Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-6 items-center">{Navitems}</ul>

          {/* Mobile toggle button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl text-[#00C2CB] focus:outline-none"
            >
              <FaBars />
            </button>
          </div>

          {/* Auth Section */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <div className="relative">
                {/* Avatar button */}
                <button
                  onClick={() => setDropdownOpen(prev => !prev)}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 focus:outline-none"
                >
                  <img
                    referrerPolicy="no-referrer"
                    src={user?.photoURL ?? ''}
                    alt="User"
                    className="w-full h-full object-cover"
                    title={user?.displayName ?? ''}
                  />
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-52 bg-white rounded-md shadow-lg z-50">
                    <p className='pl-4'>
                      {user?.displayName ?? ''}
                    </p>
                    <li>
                      <Link
                        to="#"
                        onClick={() => {
                          setDropdownOpen(false);
                          handleSignout();
                        }}
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 font-bold"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#00C2CB] text-white flex justify-center items-center gap-2 text-xl rounded-lg px-2 py-1"
              >
                <MdLockOutline />
                Log In
              </Link>
            )}
          </div>
        </header>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden mt-4 space-y-3 bg-base-100 p-4 rounded-md shadow-md z-50 relative">
            {Navitems}
            {user ? (
              <li>
                <Link
                  to="#"
                  onClick={handleSignout}
                  className="text-[#FF3811] font-bold"
                >
                  Sign Out
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="text-white bg-[#00C2CB] px-3 py-1 rounded"
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
