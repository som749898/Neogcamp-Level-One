import { useEffect, useState } from "react"

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'https://example.com/api/users') {
        resolve({
          status: 200,
          message: 'Success',
          data: [
            {
              name: 'John Doe',
              email: 'john@example.com',
              website: 'example.com',
              company: 'ABC Inc',
            },
            {
              name: 'Jane Doe',
              email: 'jane@example.com',
              website: 'example.com',
              company: 'XYZ Corp',
            },
            {
              name: 'Bob Smith',
              email: 'bob@example.com',
              website: 'example.com',
              company: 'ABC Inc',
            },
            {
              name: 'Alice Brown',
              email: 'alice@example.com',
              website: 'example.com',
              company: 'ACME Corp',
            },
            {
              name: 'Charlie Green',
              email: 'charlie@example.com',
              website: 'example.com',
              company: 'XYZ Corp',
            },
          ],
        })
      } else {
        reject({
          status: 404,
          message: 'Users list not found.',
        })
      }
    }, 2000)
  })
}

export const FilterCompany = () => {

  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("All");

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const result = await fakeFetch(url);
      setLoading(false);
      setCompany(result.data);
    } catch (error) {
      setLoading(false);
      setCompany(error.message);
    }
  }
  
  useEffect(() => {
    fetchData("https://example.com/api/users");
  },[])

  return <div className="bg-gray-200 text-black p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Users</h2>
    {
      !loading ? company.length !==0 && typeof company !== 'string' ? <div>
        <div>Filter by Company : {" "} 
          <select onChange={event => setSelected(event.target.value)} className="bg-white" name="filter" id="company">
            <option value="All">All</option>
            {
              [... new Set(company.map(item => item.company))].map((item, index) => 
                <option key={index} value={item}>{item}</option>
              )
            }
          </select>
        </div>
        {
          selected === "All" ? company.map((item, index) => <div key={index}>
            <li>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.website}</div>
              <div>{item.company}</div>
            </li>
          </div>) : company.filter(item => item.company === selected).map((item, index) => <div key={index}>
            <li>
              <div>{item.name}</div>
              <div>{item.email}</div>
              <div>{item.website}</div>
              <div>{item.company}</div>
            </li>
          </div>)
        }
      </div> : <div>{company}</div> : <div>Loading ....</div>
    }
  </div>
}