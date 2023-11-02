"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать.
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/
const Collection = {
  albums: [
    {
      title: "Placebo",
      artist: "Placebo",
      year: 1996,
    },
    {
      title: "Anything in Return",
      artist: "Toro Y Moi",
      year: 2013,
    },
    {
      title: "Dynamite",
      artist: "Jamiroquai",
      year: 2005,
    },
  ],
  [Symbol.iterator]() {
    let i = 0;
    const array = this.albums;
    return {
      next() {
        return i < array.length
          ? { done: false, value: array[i++] }
          : { done: true };
      },
    };
  },
  printAlbums() {
    const array = this.albums;
    for (const i of array) {
      console.log(`"${i.title}" - ${i.artist} (${i.year})`);
    }
  },
};

Collection.printAlbums();
