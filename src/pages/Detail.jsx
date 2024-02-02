import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getDetailData } from "../services/api"
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getDetailData(id).then((result) => {
      setData(result)
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [id])
  return (
    <div>
      <h1>Detail {id}</h1>
      {
        loading?(
          <div>Loading...</div>
        ):(
          <div>
            {JSON.stringify(data)}
          </div>
        )
      }
    </div>
  )
}

export default Detail