import { useState,useEffect } from "react"
import axios from "axios"
function AmalBankSy(){
  const [data, setData] = useState([])

  const handleData =()=>{
      axios.get("http://localhost:9000/read/Amal").then((res)=>{
          setData(res.data)
          console.log(res.data)
      }).catch((error)=>
          console.log(error)
      )
  }
  
  
  useEffect(()=>{
      handleData()
  },[])











    return <>
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Bank Dashboard</h2>
        </div>
        <nav className="mt-6">
          <ul>
            <li>
              <span className="block py-2 px-6 text-white text-6xl font-bold">Amal Bank</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">User Details</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full bg-gray-200">
              <th className="py-3 px-4 border text-left">Full_Name</th>
              <th className="py-3 px-4 border text-left">Email_Address</th>
              <th className="py-3 px-4 border text-left">Location</th>
              <th className="py-3 px-4 border text-left">Date_of_Birth</th>
              <th className="py-3 px-4 border text-left">Place_of_Birth</th>
              <th className="py-3 px-4 border text-left">Parents_Name</th>



            </tr>
          </thead>
          {
            data.map((item) => {
              return <tbody>
                <tr>
                  <td className="py-3 px-4 border">{item.Full_Name}</td>
                  <td className="py-3 px-4 border">{item.Email_Address}</td>
                  <td className="py-3 px-4 border">{item.Location}</td>
                  <td className="py-3 px-4 border">{item.Date_of_Birth}</td>
                  <td className="py-3 px-4 border">{item.Place_of_Birth}</td>
                  <td className="py-3 px-4 border">{item.Parents_Name}</td>



                </tr>
              </tbody>
            })
          }

        </table>
      </main>
    </div>
    </>
}
export default AmalBankSy
