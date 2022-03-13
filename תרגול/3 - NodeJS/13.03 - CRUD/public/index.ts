const remembersHTML: HTMLElement = document.querySelector('.remembers')

const remembers = {
    getRemembers: async function () {
        try {
            const { data } = await axios.get('/getTasks')
            console.log(data)
        } catch (error) {

        }


    }
}

remembers.getRemembers()

// async function getData() {

// }
