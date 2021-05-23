let dictionary = {
   'Hello': 'Привет',
   'Bye': 'Пока'
};

dictionary = new Proxy(dictionary, {
   get(target, phrase) { // перехватываем чтение свойства в dictionary
      if (phrase in target) { // если перевод для фразы есть в словаре
         return target[phrase]; // возвращаем его
      } else {
         // иначе возвращаем непереведённую фразу
         return phrase;
      }
   }
});

// Запросим перевод произвольного выражения в словаре!
// В худшем случае оно не будет переведено
console.log(dictionary['Hello']); // Hola
console.log(dictionary['Welcome to Proxy']);