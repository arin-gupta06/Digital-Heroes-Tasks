import { useEffect, useState } from "react";
import { getLeads } from "../services/lead.services";
import {useNavigate} from "react-router-dom"
function Admin() {
  const navigate = useNavigate();
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let isMounted = true;

      getLeads()
        .then((data) => {
          if (isMounted) {
            setLeads(data.data);
          }
        })
        .catch((error) => {
          if (error.message === "Unauthorized") {
            navigate("/login");
            return;
          }

          console.error(error);
        })
        .finally(() => {
          if (isMounted) {
            setLoading(false);
          }
        });

      return () => {
        isMounted = false;
      };
    }, [navigate])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold">Loading leads...</h2>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow px-10 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Manage all customer inquiries
          </p>
        </div>

        <div className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          Total Leads: {leads.length}
        </div>
        <button onClick = {() => {navigate("/")}} className="bg-blue-600 text-white px-5 py-3 rounded-lg">
          Back
        </button>
      </header>

      {/* Table */}
      <div className="max-w-7xl mx-auto py-10 px-6">

        <div className="bg-white rounded-xl shadow overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-600 text-white">

              <tr>
                <th className="px-5 py-4 text-left">Name</th>
                <th className="px-5 py-4 text-left">Email</th>
                <th className="px-5 py-4 text-left">Budget</th>
                <th className="px-5 py-4 text-left">Project</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {leads.map((lead) => (

                <tr
                  key={lead._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-5 py-4 font-medium">
                    {lead.name}
                  </td>

                  <td className="px-5 py-4">
                    {lead.email}
                  </td>

                  <td className="px-5 py-4">
                    {lead.budgetRange}
                  </td>

                  <td className="px-5 py-4 max-w-xs truncate">
                    {lead.message}
                  </td>

                  <td className="px-5 py-4">

                    <select
                      defaultValue={lead.status}
                      className="border rounded-lg px-3 py-2"
                    >
                      <option>New</option>
                      <option>Contacted</option>
                      <option>Closed</option>
                    </select>

                  </td>

                  <td className="px-5 py-4 text-center">

                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                      Update
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Admin;
