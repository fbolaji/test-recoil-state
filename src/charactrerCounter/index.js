import {  useRecoilState } from 'recoil';
import { textState } from '../recoilStore/index'

export default function CharacterCounter () {
	const [text, setText] = useRecoilState(textState)

	const handleChange = (e) => {
		e.preventDefault()
		const { value } = e.target
		setText(value)
	}

	return (
		<div>
			<label htmlFor="character">
				<p>Please enter text</p>
				<input type="text" id="character" onChange={handleChange} />
				<p>Echo: <b>{text}</b></p>
			</label>
		</div>
	)
}