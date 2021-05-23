class Person {
   constructor(name, age) {
      this.name = name
      this.age = age
      if (typeof Person.instance === 'object') {
         return Person.instance;
      }
      Person.instance = this;
      return this;
   }

   logThis() {
      console.log(this)
   }
}

const person1 = new Person("Mykola", 19)
const person2 = new Person("Oleg", 21)

person1.logThis()
person2.logThis()

