
export function capitalize (str) {
	return str[0].toUpperCase() + str.slice(1)
}

export function reverseString (str) {
	return str.split('').reverse().join('')
}

export function caesarCipher (str, shift = 2) {
	const lower = 'abcdefghijklmnopqrstuvwxyz'
	const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	const chars = '.,;:?!\'-_()[]"".../@ #'
	let newStr = ''
	
	function returnChar (char) {
		if (chars.includes(char)) return char
		if (lower.includes(char)) return shiftLetter(char, true)
		if (upper.includes(char)) return shiftLetter(char, false)
	}	
	
	function shiftLetter (char, lowercase = true) {
		return (lowercase) ? lower[newIndex(char, lower)] : upper[newIndex(char, upper)]
	}
	
	function newIndex (char, letters) {
		const length = letters.length
		const shiftedIndex = letters.indexOf(char) + shift
		return (shiftedIndex > length) ? shiftedIndex - length : shiftedIndex
	}
	
	for (let i = 0; i < str.length; i++) {
		newStr += returnChar(str[i])
	}
	
	return newStr
	
}

caesarCipher('hello')

export function analyzeArray (numbers) {
	const obj = {
		average: numbers.reduce((a, b) => a + b, 0) / numbers.length,
		max: Math.max.apply(null, numbers),
		min: Math.min.apply(null, numbers),
		length: numbers.length
	}
	
	return obj
}

export const calculator = {
	add: (a, b) => a + b,
	subtract: (a, b) => a - b,
	divide: (a, b) => a / b,
	multiply: (a, b) => a * b,
}
