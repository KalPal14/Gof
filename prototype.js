let animal = {
   eats: true
};

let rabbit = Object.create(animal, {
   jumps: {
      value: true
   }
});

console.log(rabbit.eats)
console.log(rabbit.jumps)
console.log(Object.getPrototypeOf(rabbit) === animal)