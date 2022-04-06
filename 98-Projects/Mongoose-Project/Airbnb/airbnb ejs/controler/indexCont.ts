export const getIndexPage = async (req, res) => {
    try {
        res.render('index', {
            indexPage: true //לא חייב לרשום
        })
    } catch (error) {
        console.log(error)
    }
}