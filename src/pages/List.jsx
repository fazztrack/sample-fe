import { useState, useEffect } from "react"
import { getAllData } from "../services/api"
import { Link } from 'react-router-dom'
const List = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getAllData().then((result) => {
      setData(result)
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>List</h1>
      {
        loading?(
          <div>Loading...</div>
        ):(
          <ul>
            {
              data.map((e, i) => (
                <li key={i}>
                  {e.title} <Link to={`/detail/${e.id}`}>Detail</Link>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  )
}

export default List