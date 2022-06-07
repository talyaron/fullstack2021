import axios from 'axios'
import { useParams } from 'react-router-dom'

const SelectedUser = () => {
    const { id } = useParams();

    async function getSelectedUser() {
        const { data } = await axios.post('/api/get-selected-user', { _id: id })
        const { foundUser } = data
        console.log(foundUser)
    }
    return (
        <div>User : {id}</div>
    )
}

export default SelectedUser