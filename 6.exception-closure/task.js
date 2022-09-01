function parseCount(num) {
   let parse = parseInt(num, 10);
   if (isNaN(parse)) {
      throw new Error("Невалидное значение");
   }
   return parse;
}


function validateCount(num) {
   try {
      return parseCount(num);
   } catch (error) {
      return error;
   }
}

class Triangle {
   constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if (a + b < c || a + c < b || c + b < a) {
         throw new Error("Треугольник с такими сторонами не существует");
      }
   }
   getPerimeter() {
      return this.a + this.b + this.c;
   }
   getArea() {
      const p = this.getPerimeter() / 2;
      return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
   }
}

function getTriangle(a, b, c) {
   try {
      return new Triangle(a, b, c);
   } catch (error) {
      const errTriangle = new Object();
      errTriangle.getArea = function () { return "Ошибка! Треугольник не существует"; };
      errTriangle.getPerimeter = function () { return "Ошибка! Треугольник не существует"; };
      return errTriangle;
   }
}
