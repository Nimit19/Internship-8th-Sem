
import classes from './TodoItems.module.css';

const TodoItems: React.FC<{text: string , onClickDeleteTodo: () => void}> = ({  text, onClickDeleteTodo }) => {
    return (
        <li onClick= {onClickDeleteTodo} className={classes.item}>{text}</li>
    )
}

export default TodoItems;