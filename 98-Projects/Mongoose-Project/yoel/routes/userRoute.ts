import express from 'express'
const router = express.Router();
 
import{
      handleAddUser , handleReg , handleSign
} from '../controller/userController'

router
.get('/add-user' , handleAddUser)
//.get('/get-users' , handleGetUsers)
.post('/reg-user' , handleReg)
.post('/sign-in' , handleSign)
export default router;