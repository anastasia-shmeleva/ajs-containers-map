/* eslint-disable no-undef */
import ErrorRepository from '../index';

test('return Unknown Error', () => {
  expect(new ErrorRepository().translate(5)).toBe('Unknown error');
});

test('return right code', () => {
  expect(new ErrorRepository().translate(2)).toBe('Неверный формат числа');
});
