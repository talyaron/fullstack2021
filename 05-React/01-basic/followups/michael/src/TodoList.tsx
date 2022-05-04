
export default function TodoList ({todos}:any) {

    return (
        <div>
            <form>
                <input type="text"></input>
                <button>Add Todo</button>
                <button>Clear complete</button>
                <div>0 left to do</div>
                <div>{todos.length}</div>

            </form>


        </div>
    )
}

