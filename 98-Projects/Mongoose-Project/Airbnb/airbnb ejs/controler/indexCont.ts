export const getIndexPage = async (req, res) => {
    try {
        res.render('index', {
            title: "Airbnb",
        })
    } catch (error) {
        console.log(error)
    }
}