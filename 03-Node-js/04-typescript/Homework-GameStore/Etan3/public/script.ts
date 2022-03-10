
const gameStore = {
    gamesList: [],
    getGames: async function () {
        const {data} = await axios.get('/all-games');
        this.gamesList = data
        console.log(data);
    },
    handleRender:async function () {
        
    },

}
gameStore.getGames()
console.log(gameStore);
