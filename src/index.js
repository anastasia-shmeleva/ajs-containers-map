export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Искомое имя не найдено'],
      [2, 'Неверный формат числа'],
      [3, 'Неверный пароль'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code) === false) return 'Unknown error';
    return this.errors.get(code);
  }
}
