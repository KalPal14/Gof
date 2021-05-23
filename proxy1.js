// ПЕРВЫЙ ВАРИАНТ 
// При такой реализации непонятно в чем отличие от декоратора

// class Subject {
//    constructor() {
//    }

//    Request() {
//    }
// }

class RealSubject /*extends Subject*/ {
   constructor() {
      // super()
      console.log('RealSubject created')
   }

   Request() {
      console.log('RealSubject handles request')
   }
}

class Proxy /*extends Subject*/ {
   constructor() {
      // super()
      console.log('Proxy created')
   }

   Request() {
      this.realSubject = new RealSubject();
      console.log('something another - обертка');
      this.realSubject.Request();
   }
}

var proxy = new Proxy()
proxy.Request()
