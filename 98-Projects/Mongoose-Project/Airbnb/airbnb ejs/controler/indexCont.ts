export const getIndexPage = async (req, res) => {
    try {
        res.render('index', {
            title: "Home Page",
        })
    } catch (error) {
        console.log(error)
    }
}