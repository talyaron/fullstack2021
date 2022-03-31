async function addUser(req, res) {

    let { username, password, email } = req.body;

    const noPass = await FundleUser.find({ username: username })
    console.log(noPass.length)

    if (noPass.length === 0) {
        let played = 0;
        let wins = 0;
        let current_strike = 0;
        let max_strike = 0;
        const newFundleUser = new FundleUser({ username, password, email, played, wins, current_strike, max_strike })
        const result = await newFundleUser.save()
        res.send({ result });
    }

    else {
        res.send('AlreadyUser')
    }

}


async function getUser(req, res) {


    let { username, password } = req.query
    console.log(username, password)

    const userMatch = await FundleUser.find({ username: username, password: password })
    console.log(userMatch)

    if (userMatch.length >= 1) {
        res.send({ user: userMatch })
    }

    else {
        const noPass = await FundleUser.find({ username: username })
        if (noPass.length >= 1) {
            res.send("nopass")
        }
        else {
            res.send("nouser")
        }
    }


}