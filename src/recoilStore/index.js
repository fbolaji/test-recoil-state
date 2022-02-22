import { atom } from 'recoil';

export const textState = atom({
	key: "textState",
	default: "",
})

export const todoListState = atom({
	key: "todoListState",
	default: [],
})

export const todoListFilterState = atom({
	key: "todoListFilterState",
	default: [],
})
export const todoListStatsState = atom({
	key: "todoListStatsState",
	default: [],
})

export default {
	textState,
	todoListState,
	todoListFilterState,
	todoListStatsState
}