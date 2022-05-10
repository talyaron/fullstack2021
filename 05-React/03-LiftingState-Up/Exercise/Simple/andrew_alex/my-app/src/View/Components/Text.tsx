interface TextProps {
    text: String;
    background: String;
}

const Text = (props: FormProps) => {
    const { text, background } = props;
    return (
        <div>Text</div>
    )
}

export default Text;
