import Meme from './Meme'
import { MemeInterface } from '../../App'

interface MainProps {
    memes: Array<MemeInterface>
}

const Main = (props: MainProps) => {
    const { memes } = props
    return (
        <div className='grid'>
            {memes.map((meme, i) => { return <Meme key={i} front={meme.front} back={meme.back} /> })}
        </div>
    )
}

export default Main;
