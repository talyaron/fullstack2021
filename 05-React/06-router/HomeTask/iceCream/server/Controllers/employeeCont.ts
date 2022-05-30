import Employee from '../Models/employeeModel'


export const login = async (req: any, res: any) => {

    try {

        const { name, password } = req.body;
        if (!name || !password) throw new Error("no name || password provided in login conts");


        const result = await Employee.findOne({ name, password })
        console.log(result);

        if (result) {
            res.send({ ok: true, login: true })

        } else {

            throw new Error("no result found in login conts");

        }

    } catch (error) {

        console.error(error.message);
        res.send({ ok: false })

    }




}