import { useRecoilState } from 'recoil';
import { todoListFilterState } from '../recoilStore';

export default function FilterTodoList () {
	const [filter, setFilter] = useRecoilState(todoListFilterState)

	const updateFilter = ({target: {value}}) => {
		setFilter(value)
	}

	return (
		<>
			Filter:
			<select value={filter} onChange={updateFilter} style={{
				padding: 5,
				marginBottom: 10,
			}}>
				<option value="Show All">All</option>
				<option value="Show Completed">Completed</option>
				<option value="Show Uncompleted">Uncompleted</option>
			</select>
		</>
	);
}