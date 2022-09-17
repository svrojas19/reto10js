//Reto 10 
// ● Crea una clase llamada Punto con sus dos coordenadas X e Y.
// ● Añade un método constructor para crear puntos fácilmente. Si no se recibe una coordenada,
// su valor será cero.
// ● Crea un método llamado ver para que al imprimir por pantalla un punto aparezca en formato
// (X,Y)
// ● Añade un método llamado vector, que toma otro punto y calcula el vector resultante
// entre los dos puntos (en el nuevo punto X es la suma de las coordenadas en X y Y
// es la suma de las dos coordenadas en Y).
// ● Añade un método llamado distancia, que tome otro punto y calcule la distancia entre los dos
// puntos y la muestre por pantalla. La fórmula es la siguiente:

//aqui se creo la clase llamada punto con x & y, se agregò un metodo constructor,donde si no se recibe una 
//cordenada
class Punto {
    constructor(x,y){
        this.x = x;
        this.y = y;

        if(x){
            this.x = x; 
         }
         else{
             this.x=0;
         }
         if(y){
            this.y = y; 
         }
         else{
             this.y=0;
         }
     }

//metodo ver
ver(){
 console.log(`(${this.x},${this.y})`)
}
ver(punto){
    let vectorx = this.x + punto.x;
    let vectory = this.y + punto.y;

    return new punto (vectorx,vectory)
}
}
const coordenada= new Punto(19,22);
console.log(coordenada.x, coordenada.y);
coordenada.ver();

const puntosP = new Punto(22,19)
console.log(coordenada.vector(puntosP));