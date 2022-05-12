interface EditBoxProps {
  updateTitle: Function;
  id: string;
}

const EditBox = (props: EditBoxProps) => {
  const { id, updateTitle } = props;

  function handleUpdateBox(ev: any) {
    try {
      ev.preventDefault();
      const title = ev.target.title.value;
      updateTitle(id, title);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleUpdateBox}>
        <input type="text" name="title" placeholder="new title" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBox;
