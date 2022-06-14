import axios from "axios";

const FormTask = () => {
  async function hendleSubmitForm(ev: any) {
    ev.preventDefault();

    // const title = ev.target.elements.title.value;
    // const desc = ev.target.elements.desc.value;
    // console.log(ev.target);
    const formObj: any = {};

    for (let field of ev.target) {
      console.log(field);
      if (field.type !== "submit") {
        formObj[field.name] = field.value;
      }
    }

    console.log(formObj);

    const { data } = await axios.post("/add-task", formObj);
    console.log(data);

    window.location.reload();
    ev.target.reset();
  }

  return (
    <div>
      <form onSubmit={hendleSubmitForm}>
        <input type="text" name="title" placeholder="Text" />
        <input type="text" name="desc" placeholder="description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormTask;
