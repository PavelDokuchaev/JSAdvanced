"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
Если книга с таким названием уже существует в списке, выбросьте ошибку с
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в
библиотеке и возвращать true или false в зависимости от того, есть ли такая
книга в списке или нет.
*/

class Library {
  #books;
  constructor(arrayBooks) {
    if (Library.findRepeats(arrayBooks)) {
      throw Error("В массиве обнаружены дубликаты!");
    }
    this.#books = arrayBooks;
  }

  static findRepeats(arrayBooks) {
    const setBooks = new Set(arrayBooks);
    return !(setBooks.size === arrayBooks.length);
  }

  get allBooks() {
    return this.#books;
  }

  addBooks(title) {
    if (this.hasBook(title)) {
      throw Error("Такая книга уже добавлена!");
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.findIndex((element) => element === title);
    if (index === -1) {
      throw Error("Такой книги нет!");
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

const duplicate = [
  "Старик и море",
  "По ком звонит колокол",
  "И восходит солнце",
  "По ком звонит колокол",
  "Прощай, оружие!",
];
const withoutDuplicate = [
  "Старик и море",
  "По ком звонит колокол",
  "И восходит солнце",
  "Прощай, оружие!",
];

//const libraryError = new Library(duplicate); //Error: В массиве обнаружены дубликаты!
const library = new Library(withoutDuplicate);
console.log(library.allBooks);

library.addBooks("Снега Килиманджаро");
//library.addBooks('Старик и море'); //Error: Такая книга уже добавлена!
console.log(library.allBooks);

library.removeBook("Старик и море");
//library.removeBook('Иметь и не иметь'); //Error: Такой книги нет!
console.log(library.allBooks);

console.log(library.hasBook("Прощай, оружие!"));
console.log(library.hasBook("Смерть после полудня"));
