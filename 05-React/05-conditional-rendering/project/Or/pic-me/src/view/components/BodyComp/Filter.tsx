import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';



interface pic {
  picUrl: any;
  people: string;
  time: string;
  id: string
}

interface filterProps {
  pictures: Array<pic>
  setPictures: Function
  pictureArray: Array<pic>
}

const Filter = (props: filterProps) => {
  const { setPictures, pictureArray } = props

  function handleFilter(ev) {
    const time = ev.target.value

    const filteredPics = pictureArray.filter(pic => pic.time === time)
    setPictures([...filteredPics])


  }
  return (

    <div>

      <Box sx={{ minWidth: 120,padding:1 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter Pictures</InputLabel>
          <Select
            label="Filter Pictures"
            onChange={handleFilter}
          >
            <MenuItem value="before">Before the wedding</MenuItem>
            <MenuItem value="during">during the wedding</MenuItem>
            <MenuItem value="party">PARTY</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Filter