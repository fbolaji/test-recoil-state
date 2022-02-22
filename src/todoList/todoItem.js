import {useRecoilState} from 'recoil';
import {todoListState} from '../recoilStore';

export default function TodoItem({item, isOdd}) {
	const [todoList, setTodoList] = useRecoilState(todoListState);
	const index = todoList.findIndex((listItem) => listItem === item);

	const editItemText = ({target: {value}}) => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			text: value,
		});

		setTodoList(newList);
	};

	const toggleItemCompletion = () => {
		const newList = replaceItemAtIndex(todoList, index, {
			...item,
			isComplete: !item.isComplete,
		});

		setTodoList(newList);
	};

	const deleteItem = () => {
		const newList = removeItemAtIndex(todoList, index);

		setTodoList(newList);
	};

	return (
		<div style={{
			backgroundColor: isOdd ? 'blue' : 'yellowgreen',
			padding: "5px",
		}}>
			<input type="text" value={item.text} onChange={editItemText} style={{width: "80%"}} disabled={item.isComplete}/>
			<input
				type="checkbox"
				checked={item.isComplete}
				onChange={toggleItemCompletion}
				style={{width: "10%"}}
			/>
			<button onClick={deleteItem}>X</button>
		</div>
	);
}

function replaceItemAtIndex(arr, index, newValue) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}