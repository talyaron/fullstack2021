import jwt from 'jwt-simple'
import Employee from '../models/employeeModels'

export const addEmployee = async (req, res) => {

    try {

        const { name, password, email } = req.body

        const newEmployee = new Employee({ name, password, email })
        const result = await newEmployee.save()

        res.cookie('addEmployee', { name, password, email }, { maxAge: 30000 })
        res.send({ ok: true, result })

        if (!req.body) throw new Error("no req.bodt in addEmployee");

    } catch (error) {
        console.error(error.messeage);
        res.send({ error: error.message })

    }

}

export async function getEmployees(req, res) {

    try {
        const secret = "tamirRs";
        const { name, password } = req.body;

        if (typeof name === 'string' && typeof password === 'string') {
            const result = await Employee.findOne({ name, password })
            if (result) {
                if (result.password === password) {

                    if (result.role === 'admin') {
                        const payload = { name, id: result._id, role: result.role };
                        const token = jwt.encode(payload, secret);
                        //const allEmployees = await Employee.find({})
                        res.cookie('adminEmployee', token, { maxAge: 30000 })
                        //res.send({ ok: true, allEmployees })

                        res.send({ ok: true, result })
                        return;

                    }
                    throw new Error("employee is not admin, therefor will not get all users in getEmployees");

                }
                throw new Error("password is not matched");

            }
            throw new Error("No employee found in getEmployees");

        }
        throw new Error("Name || password are inncorect in getEmployees");

    } catch (error) {
        console.error(error.message);
        res.send({ error: error.message })

    }


}


export const getDecodedEmp = async (req, res) => {

    const { adminEmployee } = req.cookies;

    const secret = "tamirRs";
    const decoded = jwt.decode(adminEmployee, secret);

    if (decoded && decoded.role === "admin") {

        const result = await Employee.find({})
        console.log(result);
        
        res.send({ok:true, result})
    }



}







