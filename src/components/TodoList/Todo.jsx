import TodoList from "./TodoList"
import {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Todo({todo, remove, save, complete}) {
    const [editing, setEditing] = useState(false);
    const [todoInput, setTodoInput] = useState(todo.description);

    const handleEdit = () => {
        if (editing) {
            save(todo.id, todoInput);
            setEditing(false);
        } else {
            setEditing(true);
        }
    }

    return (
        <div className="todo-item">
            <input value={todoInput} disabled={!editing} 
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <input type="checkbox" value={todo.complete} onChange={(e) => complete(todo.id, e.target.checked)}/>
            <button onClick={handleEdit}>{editing ? <DoneIcon /> : <EditIcon />}</button>
            <button onClick={() => { remove(todo.id) }}><DeleteForeverIcon /></button>
        </div>
    )
}

export default Todo;