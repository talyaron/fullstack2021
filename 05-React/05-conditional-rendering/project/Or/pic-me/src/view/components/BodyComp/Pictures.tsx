
interface picturesProps {
  pictures: Array<pic>
}

interface pic {
  picUrl: any;
  people: string;
  time: string;
  id: string
}

const Pictures = (props: picturesProps) => {
  const { pictures } = props

  return (
    <div >
      <div className="pictures">
        {pictures.map((pic: any, i: number) => {
          return (<img className='pictures__pic' key={i} src={pic.picUrl} alt="" />)
        })}
      </div>
    </div>
  )
}

export default Pictures