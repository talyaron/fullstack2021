interface propsBox {
    text: string,
    title: string
}

function Box(props: propsBox) {
    const { text, title } = props
    return (
        <div className="box">
            <h1>{title}</h1>
            Box:{text}
        </div>// I need to add text in the App.tsx
    )
}

export default Box