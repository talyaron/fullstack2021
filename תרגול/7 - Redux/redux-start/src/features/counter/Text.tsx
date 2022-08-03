import { useAppDispatch } from "../../app/hooks";
import { addNewTask } from "./taskSlice";

export function Text() {
  const dispatch = useAppDispatch();
  const handleSend = (e: any) => {
    e.preventDefault();

    const text = e.target.elements.text.value;

    dispatch(addNewTask(text));
  };

  return (
    <div>
      <form onSubmit={handleSend}>
        <input type="text" name="text" placeholder="Text" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
