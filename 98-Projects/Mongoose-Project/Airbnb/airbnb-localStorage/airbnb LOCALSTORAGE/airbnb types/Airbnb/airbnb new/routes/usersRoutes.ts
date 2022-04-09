import express from 'express';
const router = express.Router();
// import { getUsers } from '../controler/usersCont'
import { registerUser} from '../controler/usersCont'
import { login} from '../controler/usersCont'
// import { updateUser} from '../controler/usersCont'
// import { deleteUser} from '../controler/usersCont'

router
// .get('/get-Users',getUsers)
.post('/add-User',registerUser)
.post('/login',login)
// .patch('/update-user',updateUser)
// .delete('/delete-user',deleteUser)

export default router;