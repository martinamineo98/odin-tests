
import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from './testingpractice.js'

test('Capitalize String', () => expect(capitalize('hello darkness')).toMatch('Hello darkness'))
test('Reverse String', () => expect(reverseString('hello')).toMatch('olleh'))

describe('Calculator', () => {
	test('Add', () => expect(calculator.add(1,2)).toBe(3))
	test('Subtract', () => expect(calculator.subtract(2,1)).toBe(1))
	test('Divide', () => expect(calculator.divide(10,5)).toBe(2))
	test('Multiply', () => expect(calculator.multiply(5,5)).toBe(25))
})

test('Caesar Ciphar', ()  => expect(caesarCipher('hello world.')).toMatch('jgnnq yqtnf.'))
test('Caesar Ciphar with Custom Shift', () => expect(caesarCipher('hello world.', 10)).toMatch('rovvy gybvn.'))

test('Analyze Array', () => expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, max: 5, min: 1, length: 5}))
