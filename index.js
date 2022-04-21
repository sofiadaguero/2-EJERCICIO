
const pizzas = [
    {id: 1,
     nombre: `anana`,
     ingredientes: [`muzzarella`,`anana` ],
     precio: 700, },

    {id: 2,
    nombre: `jamon`, 
    ingredientes: [`muzzarella`, `jamon`], 
    precio: 630,},

    {id: 3, 
    nombre: `napolitana`, 
    ingredientes: [`muzzarella`, `tomate`], 
    precio: 600,},

    {id: 4, 
    nombre: `fugazzeta`, 
    ingredientes: [`muzzarella`, `cebolla`], 
    precio: 700,},

    {id: 5, 
    nombre: `roquefort`, 
    ingredientes: [`muzzarella`, `roquefort`,], 
    precio: 750,},

    {id: 6, 
    nombre: `ajo`, 
    ingredientes: [`muzzarella`, `ajo`], 
    precio: 650,}];


  

// a) Pizzas con id impar.
   const numImpares=[];

   const impares = [];
   pizzas.filter( pizza => {
         if(pizza.id % 2 != 0){
             numImpares.push(pizza.nombre)
        
         }
     });

     console.log(`Las pizzas con número de Id impar son: ${impares}`);




//b) ¿Alguna pizza vale menos de $600?.

     const precioMenor = [];

     pizzas.forEach( pizza => {
         if( pizza.precio <= 600){
       precioMenor.push(pizza.nombre);
         }
     });
     console.log(`Las pizzas de menos de $600 son: ${precioMenor}`);


    

// c)   Nombre de todas las pizzas.

     pizzas.forEach( pizza => 
        console.log((pizza.nombre)
     )
     )


//d)  Precios de las pizzas.


 const todosPrecios = [];
 pizzas.forEach( pizza => {
     if( pizza.precio >= 0){
        todosPrecios.push(pizza.precio);
        todosPrecios.toString()
     }
 });

 console.log(`Los precios son: ${todosPrecios}`);

// Pizza + precios.


pizzas.forEach( pizza => console.log(`La pizza de ${pizza.nombre}, vale $${pizza.precio}`));

