import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoilStore';
import TodoItem from './todoItem';
import TodoItemCreator from './todoItemCreator';
import FilterTodoList from './filterTodoList';
import TodoListStats from './todoListStats';

export default function TodoList () {
	const todoList = useRecoilValue(todoListState)
	return (
		<>
			<TodoItemCreator />
			<FilterTodoList />
			<TodoListStats />

			{
				todoList.map((todoItem, idx) => (
					<TodoItem key={todoItem.id} item={todoItem} isOdd={idx % 2 === 1}/>
				))
			}

		</>

	)
}