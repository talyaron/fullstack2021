interface card {
    text: string;
    img: string;
    id: string
}

interface CardProps {
    arr: Array<card>;
    handleDelete: Function;
    handleupdateText: Function;
    handleupdateImg: Function;
    setArr: Function;
}


const Body = (props: CardProps) => {
    const { arr, setArr } = props;
    function getId(ev: any) {
        console.log(ev.target.id);
    }

    function handleDelete(id: string) {
        setTimeout(function () {
            setArr(arr.filter(img => img.id !== id))
            console.log(arr.length - 1 + " items");
        }, 800)
    }

    function handleupdateText(id: string) {
        const text: any = prompt('set new name');
        const index = arr.findIndex(card => card.id === id)
        arr[index].text = text
        setArr([...arr])
    }

    function handleupdateImg(id: string) {
        const img: any = prompt('set new img url');
        const index = arr.findIndex(card => card.id === id)
        arr[index].img = img
        setArr([...arr])
    }

    return (

        <div className='arr'>
            {arr.map((card, i) => {
                return (

                    <div key={i} id={card.id} className='card' onClick={getId}>

                        <div>
                            <button className="btn" onClick={() => handleDelete(card.id)}>delete</button>
                            <button className="btn" onClick={() => handleupdateText(card.id)}>update text</button>
                            <button className="btn" onClick={() => handleupdateImg(card.id)}>update img</button>
                        </div>

                        <div className="cardHeader"><p id={card.id}>{card.text}</p></div>
                        <div className="cardImg"><img src={card.img} title={card.text} alt={card.text} id={card.id} /></div>

                    </div>

                )
            })}
        </div>

    )
}

export default Body