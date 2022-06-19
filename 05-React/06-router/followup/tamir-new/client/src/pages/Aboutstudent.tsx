import { useParams } from "react-router-dom"

const Aboutstudent = () => {
    const {userId}:any = useParams();
  return (
    <div>Aboutstudent:{userId}</div>
  )
}

export default Aboutstudent