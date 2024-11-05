import { useState } from "react";

function UsersSy() {
  const [data, setData] = useState([
    {
      id: 1,
      Full_Name: "Ahmed Ali",
      Email_Address: "ahmed@example.com",
      Service_Type: "Prepaid",
      Electricity_Usage: 150, // in kWh
      Payment_Amount: 30,
      Last_Payment_Date: "2024-10-15",
      Status: "Active"
    },
    {
      id: 2,
      Full_Name: "Fatima Hassan",
      Email_Address: "fatima@example.com",
      Service_Type: "Postpaid",
      Electricity_Usage: 200,
      Payment_Amount: 50,
      Last_Payment_Date: "2024-10-10",
      Status: "Active"
    },
    {
      id: 3,
      Full_Name: "Khadra Mohamed",
      Email_Address: "khadra@example.com",
      Service_Type: "Prepaid",
      Electricity_Usage: 100,
      Payment_Amount: 20,
      Last_Payment_Date: "2024-09-30",
      Status: "Inactive"
    },
    {
      id: 4,
      Full_Name: "Ismail Abdi",
      Email_Address: "ismail@example.com",
      Service_Type: "Postpaid",
      Electricity_Usage: 250,
      Payment_Amount: 70,
      Last_Payment_Date: "2024-10-05",
      Status: "Active"
    },
    {
      id: 5,
      Full_Name: "Nimco Yusuf",
      Email_Address: "nimco@example.com",
      Service_Type: "Prepaid",
      Electricity_Usage: 80,
      Payment_Amount: 15,
      Last_Payment_Date: "2024-10-01",
      Status: "Active"
    },
    {
      id: 6,
      Full_Name: "Mohammed Farah",
      Email_Address: "mohammed@example.com",
      Service_Type: "Postpaid",
      Electricity_Usage: 300,
      Payment_Amount: 90,
      Last_Payment_Date: "2024-10-20",
      Status: "Active"
    }
  ]);

  return (
    <div className="flex bg-gray-100 min-h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 shadow-lg rounded-r-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Dalkor Solution</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <span className="block py-2 px-6 text-white text-lg font-semibold">USERS</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">User Details</h2>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="py-3 px-4 border-b text-left">Full Name</th>
                <th className="py-3 px-4 border-b text-left">Email Address</th>
                <th className="py-3 px-4 border-b text-left">Service Type</th>
                <th className="py-3 px-4 border-b text-left">Electricity Usage (kWh)</th>
                <th className="py-3 px-4 border-b text-left">Payment Amount</th>
                <th className="py-3 px-4 border-b text-left">Last Payment Date</th>
                <th className="py-3 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-200 transition duration-300">
                  <td className="py-3 px-4 border-b">{item.Full_Name}</td>
                  <td className="py-3 px-4 border-b">{item.Email_Address}</td>
                  <td className="py-3 px-4 border-b">{item.Service_Type}</td>
                  <td className="py-3 px-4 border-b">{item.Electricity_Usage}</td>
                  <td className="py-3 px-4 border-b">${item.Payment_Amount}</td>
                  <td className="py-3 px-4 border-b">{item.Last_Payment_Date}</td>
                  <td className="py-3 px-4 border-b">
                    <span className={`inline-block py-1 px-3 rounded-full ${item.Status === "Active" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
                      {item.Status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default UsersSy;
