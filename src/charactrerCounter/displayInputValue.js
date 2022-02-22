import { selector, useRecoilValue } from 'recoil';
import { textState } from '../recoilStore';

const charCountState = selector({
	key: "charCountState",
	get: ({get}) => {
		const text = get(textState)

		return text.length
	}
})
export default function DisplayInputValue () {
	const count = useRecoilValue(charCountState)
	return (
		<p>Character length using recoil state is {count}</p>
	)
}