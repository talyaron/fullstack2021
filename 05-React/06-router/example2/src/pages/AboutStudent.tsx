import { useParams } from "react-router-dom"

const AboutStudent = () => {
    const {userId} = useParams();
  return (
    <p>AboutStudent: {userId}</p>
  )
}

export default AboutStudent