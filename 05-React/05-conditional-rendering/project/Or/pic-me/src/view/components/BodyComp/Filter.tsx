interface pic {
    picUrl: any;
    people: string;
    time: string;
    id: string
  }
  
  interface filterProps {
    pictures: Array<pic>
    setPictures:Function
    pictureArray:Array<pic>
  }
  
const Filter = (props:filterProps) => {
    const {pictures,setPictures,pictureArray} = props

    function handleFilter(ev){
        const time = ev.target.value

        const filteredPics = pictureArray.filter(pic=> pic.time===time)
        setPictures([...filteredPics])

        
    }
  return (
      
    <div>
        <select onChange={handleFilter} name="filter" id="">
            <option value="Choose" selected disabled>Filter results</option>
            <option value="before">Before the wedding</option>
            <option value="during">during the wedding</option>
            <option value="party">PARTY</option>


        </select>
    </div>
  )
}

export default Filter