import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import {todoListState} from '../recoilStore';

let id = 0;
function getId() {
	return id++;
}

export default function TodoItemCreator() {
	const [inputValue, setInputValue] = useState("")
	const setTodoList = useSetRecoilState(todoListState);

	const addItem = () => {
		setTodoList((oldTodoList) => [
			...oldTodoList,
			{
				id: getId(),
				text: inputValue,
				isComplete: false,
			},
		]);
		setInputValue('');
	};

	const onChange = ({target: {value}}) => {
		setInputValue(value);
	};

	return (
		<div style={{marginBottom: 10, backgroundColor: "#cccccc", padding: 5, borderBottom: "5px solid black" }}>
			<input type="text" value={inputValue} onChange={onChange} />
			<button onClick={addItem}>Add</button>
		</div>
	);
}