import{ useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showAlert, setShowAlert] = useState(false); // State to toggle alert visibility
  const navigate = useNavigate(); // Hook to navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show the custom alert popup
    setShowAlert(true);

    // Optionally clear the form
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  const handleAlertClose = () => {
    setShowAlert(false); // Close alert on OK button click
    navigate('/dashboard'); // Redirect to dashboard
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 relative">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>

        {/* Slide Down Alert */}
        {showAlert && (
          <div
            className="fixed top-0 left-0 right-0 mx-auto mt-4 w-full max-w-md bg-green-500 text-white p-4 rounded-md shadow-lg transition-transform duration-300 transform translate-y-0 z-50"
          >
            <p className="text-center font-bold">You have successfully registered!</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleAlertClose}
                className="bg-white text-green-500 px-4 py-2 rounded-md font-semibold hover:bg-green-100 transition"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account? <a href="#" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterAdmin;