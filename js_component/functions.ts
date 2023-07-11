import { start } from '../index'

export function unitCheck(unit, param) {
	localStorage.setItem(unit, param)
	return start()
}
