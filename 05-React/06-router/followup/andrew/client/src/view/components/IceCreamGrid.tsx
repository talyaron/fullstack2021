import React from 'react'
import IceCream from './IceCream'

interface IceCreamProps {
    type: string,
    topping: string,
    url: string,
    _id: string
}


const IceCreamGrid = (props: any) => {
    const { iceCreamArray } = props
    return (
        <div>
            <div>Choose your topping!</div>
            {iceCreamArray.map((iceCream: IceCreamProps, i: number) => {
                return (
                    <IceCream key={i} type={iceCream.type} topping={iceCream.topping} url={iceCream.url} id={iceCream._id} />
                )
            })}
        </div>

    )
}

export default IceCreamGrid