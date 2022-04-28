export interface SongIn {
    id: number
    name: string,
    author: string
}

const dataSongs: Array<SongIn> = [
    { id: 1, name: "L’enfer", author: "Stromae" },
    { id: 2, name: "Fill Me In ", author: "Loud Luxury & Ryan Shepherd" },
    { id: 3, name: "Save Your Tears ", author: "The Weeknd " },
    { id: 4, name: "Uptown Funk", author: "Mark Ronson" },
    { id: 5, name: "Hymn For The Weekend", author: "Coldplay " },
    { id: 6, name: "Thunder", author: "Imagine Dragons " },
    { id: 7, name: "UNFORGETTABLE", author: "Robin Schulz & Marc Scibilia" }
]

export default dataSongs
