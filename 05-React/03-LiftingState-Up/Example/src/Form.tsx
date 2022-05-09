interface FormProps {
  updateFunction?: Function;
  setTitle:Function;
  setImage:Function;
}

const Form = (props: FormProps) => {
  const { setTitle,setImage} = props;

  function handleUpdateImage(ev: any) {
    ev.preventDefault();
    const title: string = ev.target.elements.title.value;
    const image: string = ev.target.elements.image.value;

    console.log(title, image);
    // updateFunction(title, image);
    setImage(image);
    setTitle(title);
  }
  return (
    <form onSubmit={handleUpdateImage}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="image" placeholder="image url" />
      <input type="submit" value="Update" />
    </form>
  );
};

export default Form;
