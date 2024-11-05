import { useState } from "react";

function BecoPower() {
  // Tusaale xogta static ah oo la hagaajiyay
  const [data, setData] = useState([
    {
      id: 1,
      Name: "Ahmed Ali",
      Provider: "Beco",
      TokenNo: "12345678",
      History: {
        date: "2024-11-05",
        time: "10:30 AM",
        amount: 15,
        neighborhood: "Hodan",
        houseNo: "45B"
      }
    },
    {
      id: 2,
      Name: "Fatima Hassan",
      Provider: "Beco",
      TokenNo: "87654321",
      History: {
        date: "2024-11-04",
        time: "02:45 PM",
        amount: 20,
        neighborhood: "Waberi",
        houseNo: "32A"
      }
    },
    {
      id: 3,
      Name: "Khadra Mohamed",
      Provider: "Beco",
      TokenNo: "23456789",
      History: {
        date: "2024-11-03",
        time: "11:00 AM",
        amount: 10,
        neighborhood: "Daynile",
        houseNo: "12C"
      }
    },
    {
      id: 4,
      Name: "Ismail Abdi",
      Provider: "Beco",
      TokenNo: "34567890",
      History: {
        date: "2024-11-02",
        time: "01:15 PM",
        amount: 25,
        neighborhood: "Hamar Jajab",
        houseNo: "22D"
      }
    },
    {
      id: 5,
      Name: "Nimco Yusuf",
      Provider: "Beco",
      TokenNo: "45678901",
      History: {
        date: "2024-11-01",
        time: "04:50 PM",
        amount: 30,
        neighborhood: "Yaqshid",
        houseNo: "8A"
      }
    },
    {
      id: 6,
      Name: "Mohammed Farah",
      Provider: "Beco",
      TokenNo: "56789012",
      History: {
        date: "2024-10-31",
        time: "09:20 AM",
        amount: 12,
        neighborhood: "Warta Nabadda",
        houseNo: "5B"
      }
    }
  ]);

  return (
    <>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <aside className="w-48 bg-blue-700 shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-bold text-white">Beco Dashboard</h2>
          </div>
          <nav className="mt-4">
            <ul>
              <li>
                <span className="block py-2 px-4 text-white text-2xl font-bold">Beco Power</span>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">User Details</h2>
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-3 border-b border-gray-300 text-left text-sm font-medium">Name</th>
                <th className="py-2 px-3 border-b border-gray-300 text-left text-sm font-medium">Provider</th>
                <th className="py-2 px-3 border-b border-gray-300 text-left text-sm font-medium">Token No</th>
                <th className="py-2 px-3 border-b border-gray-300 text-left text-sm font-medium">History</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tbody key={item.id}>
                <tr className="hover:bg-gray-100 transition-colors">
                  <td className="py-2 px-3 border-b border-gray-200 text-sm">{item.Name}</td>
                  <td className="py-2 px-3 border-b border-gray-200 text-sm">{item.Provider}</td>
                  <td className="py-2 px-3 border-b border-gray-200 text-sm">{item.TokenNo}</td>
                  <td className="py-2 px-3 border-b border-gray-200 text-sm">
                    <div className="text-xs">
                      <p>{item.History.date} - {item.History.time}</p>
                      <p>${item.History.amount} - {item.History.neighborhood}</p>
                      <p>House No: {item.History.houseNo}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </main>
      </div>
    </>
  );
}

export default BecoPower;
