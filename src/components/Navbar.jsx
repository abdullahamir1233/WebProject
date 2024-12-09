// // // src/components/Navbar.jsx
// // import React from 'react';

// // const Navbar = () => {
// //   return (
// //     <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center sticky top-0 z-10">
// //       {/* Logo */}
// //       <div className="text-3xl font-bold text-red-600">
// //         <img 
// //           src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" 
// //           alt="Airbnb Logo" 
// //           className="h-8"
// //         />
// //       </div>

// //       {/* Navigation Links */}
// //       <ul className="flex space-x-6 text-sm font-medium text-gray-800">
// //         <li className="cursor-pointer hover:underline">Home</li>
// //         <li className="cursor-pointer hover:underline">Experiences</li>
// //         <li className="cursor-pointer hover:underline">Online Experiences</li>
// //       </ul>

// //       {/* User Menu */}
// //       <div className="flex items-center space-x-4">
// //         <div className="text-sm cursor-pointer text-gray-700 hover:text-black">
// //           Become a Host
// //         </div>
// //         <div className="cursor-pointer">
// //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 hover:text-black">
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l7.5 7.5 7.5-7.5" />
// //           </svg>
// //         </div>
// //         <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-full hover:shadow-md cursor-pointer">
// //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a9.75 9.75 0 1115 0v.75H4.5v-.75z" />
// //           </svg>
// //           <div className="bg-gray-600 rounded-full text-white text-xs font-bold w-6 h-6 flex justify-center items-center">
// //             A
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center sticky top-0 z-10">
//       {/* Logo */}
//       <div className="text-3xl font-bold text-red-600">
//         <Link to="/"> {/* Wrap the logo with Link to navigate to the homepage */}
//           <img 
//             src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" 
//             alt="Airbnb Logo" 
//             className="h-8"
//           />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <ul className="flex space-x-6 text-sm font-medium text-gray-800">
//         <li className="cursor-pointer hover:underline">Home</li>
//         <li className="cursor-pointer hover:underline">Experiences</li>
//         <li className="cursor-pointer hover:underline">Online Experiences</li>
//       </ul>

//       {/* User Menu */}
//       <div className="flex items-center space-x-4">
//         <div className="text-sm cursor-pointer text-gray-700 hover:text-black">
//           Become a Host
//         </div>
//         <div className="cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 hover:text-black">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l7.5 7.5 7.5-7.5" />
//           </svg>
//         </div>
//         <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-full hover:shadow-md cursor-pointer">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a9.75 9.75 0 1115 0v.75H4.5v-.75z" />
//           </svg>
//           <div className="bg-gray-600 rounded-full text-white text-xs font-bold w-6 h-6 flex justify-center items-center">
//             A
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  // Get token from local storage
  const isLoggedIn = localStorage.getItem('token');
  

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile'); // Navigate to profile page
    } else {
      navigate('/login'); // Navigate to login page
    }
  };

  return (
    <nav className="bg-white shadow-md py-2 px-8 flex justify-between items-center sticky top-0 z-10">
      {/* Logo */}
      <div className="text-3xl font-bold text-red-600">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" 
          alt="Airbnb Logo" 
          className="h-8 cursor-pointer"
          onClick={() => navigate('/')} // Navigate to the homepage on logo click
        />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-sm font-medium text-gray-800">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Experiences</li>
        <li className="cursor-pointer hover:underline">Online Experiences</li>
      </ul>

      {/* User Menu */}
      <div
        className="flex items-center space-x-2 border border-gray-300 p-2 rounded-full hover:shadow-md cursor-pointer"
        onClick={handleProfileClick} // Navigate based on login state
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a9.75 9.75 0 1115 0v.75H4.5v-.75z" />
        </svg>
        <div className="bg-gray-600 rounded-full text-white text-xs font-bold w-6 h-6 flex justify-center items-center">
          A
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
