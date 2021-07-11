class Burger {
   constructor(builder) {
      this.size = builder.size
      this.cheeze = builder.cheeze || false
      this.pepperoni = builder.pepperoni || false
      this.tomato = builder.tomato || false
   }
}

class BurgerBuilder {

   constructor(size) {
      this.size = size
   }

   addPepperoni() {
      this.pepperoni = true
      return this
   }

   addCheeze() {
      this.cheeze = true
      return this
   }

   addTomato() {
      this.tomato = true
      return this
   }

   build() {
      return new Burger(this)
   }
}
