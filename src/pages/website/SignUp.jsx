import axios from "axios"; 
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";  

const SignUp = () => {  
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");  
  const [district, setDistrict] = useState("");  
  const [houseNumber, setHouseNumber] = useState("");  

  const navigate = useNavigate();

  const handleSignUp = (e) => {  
    e.preventDefault();  
    axios.post("http://localhost:9000/SignUP/Create", {    
      "Full_Name": name,    
      "Email_Address": email,    
      "District": district,    
      "House_Number": houseNumber  
    })
    .then(() => {    
      // Show a professional notification or success message
      alert("Your account has been successfully created. You will be redirected to the homepage.");
      navigate("/");  // Navigate directly to home
    })
    .catch((error) => console.log(error)); 
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">     
      <div className="w-full max-w-lg bg-white rounded-lg shadow-2xl mt-10 p-8 ">
        <form onSubmit={handleSignUp}>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Create an Account</h2>
          
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            type="text" 
            placeholder="Enter your name" 
          />
          <br /><br />

          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            type="email" 
            placeholder="Enter your email" 
          />
          <br /><br />

          <label className="block text-sm font-medium text-gray-700">Choose Your District</label>
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select your location</option>
            <option value="warta nabdda">Warta Nabdda</option>
            <option value="dharkenleey">Dharkenleey</option>
            <option value="hodan">Hodan</option>
            <option value="ceelsha biyaha">Ceelsha Biyaha</option>
            <option value="weedoow">Weedoow</option>
            <option value="suuqa xoolaha">Suuqa Xoolaha</option>
            <option value="yaaqshiid">Yaaqshiid</option>
            <option value="madiino">Madiino</option>
            <option value="abdi/aziiz">Abdi/Aziiz</option>
            <option value="dayniile">Dayniile</option>
            <option value="km4">KM4</option>
            <option value="wadajir">Wadajir</option>
            <option value="boondheere">Boondheere</option>
            <option value="waabari">Waabari</option>
            <option value="xamar jajab">Xamar Jajab</option>
            <option value="shangaani">Shangaani</option>
            <option value="shibis">Shibis</option>
            <option value="xamar weyne">Xamar Weyne</option>
            <option value="kaxda">Kaxda</option>
            <option value="huriwaa">Huriwaa</option>
            <option value="daaru salaam">Daaru Salaam</option>
          </select>
          <br /><br />

          <label className="block text-sm font-medium text-gray-700">House Number</label>
          <input 
            value={houseNumber} 
            onChange={(e) => setHouseNumber(e.target.value)} 
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            type="text" 
            placeholder="Enter your house number" 
          />
          <br /><br />

          <button 
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign up
          </button>
        </form>   
      </div>   
    </div>  
  );
};

export default SignUp;
