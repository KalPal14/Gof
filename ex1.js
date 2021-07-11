class Sheep {

   constructor(name, weight) {
      this.name = name;
      this.weight = weight;
   }

   clone() {
      return Object.create(this)
   }
}

const sheep1 = new Sheep("sheep1", 5)
const sheep2 = sheep1.clone()
const sheep3 = Object.create(sheep1)

console.log(sheep1)
console.log(sheep2.name)
console.log(sheep3)
console.log(sheep1 === sheep2)