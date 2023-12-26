class cadenaArreglo{

    concatenar(){
        /* let palabra=" hola"
         let letra= " que tal"
         let frase =""
         frase=palabra+letra
         console.log(frase);*/  
         let palabra= document.getElementById("palabra").value
         let frase = document.getElementById("frase").value
         let nueva= " "
         nueva = palabra.toString() +" "+ frase+""
         let resp=document.getElementById("resp")
         resp.textContent=`el resultado es : ${nueva}`
    }
    
    Buscar_SubCadena() {
       
      let cadena = document.getElementById("cadena").value;
      let subcadena = document.getElementById("subcadena").value;
      let expresion = new RegExp(subcadena);
      let pos = cadena.search(expresion);
            if (pos !== -1) {
                document.getElementById("resultado").innerHTML = "La subcadena fue encontrada en la posición " + pos;
            } else {
                document.getElementById("resultado").innerHTML = "La subcadena no fue encontrada";
            }
        
    }

    insertarSubcadena() {
      let cadenaOriginal = document.getElementById("cadenaOriginal").value;
      let subcadena = document.getElementById("subcadena").value;
      let posicion = parseInt(document.getElementById("posicion").value);
  
      if (posicion < 0 || posicion > cadenaOriginal.length) {
          alert("La posición de inserción no es válida.");
          return;
      }
  
      let nuevaCadena = cadenaOriginal.slice(0, posicion) + subcadena + cadenaOriginal.slice(posicion);
  
      document.getElementById("resultado").innerText = "Cadena resultante: " + nuevaCadena;
      }
      
      eliminarSubcadena() {
        // Obtener los valores de entrada
        let cadenaOriginal = document.getElementById('cadenaOriginal').value;
        let subcadenaEliminar = document.getElementById('subcadenaEliminar').value;
      
        // Utilizar el método replace para eliminar la subcadena
        let resultado = cadenaOriginal.replace(subcadenaEliminar, '');
      
        // Mostrar el resultado
        document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
      }
      
      convertirACadena() {
        // Obtener el valor dy convertirlo a un arreglo
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return item.trim(); // Eliminar espacios en blanco alrededor de cada elemento
        });
      
        // Utilizar el método join para convertir el arreglo a una cadena y agregar comillas
        let cadenaResultado = '"' + arreglo.join(', ') + '"';
      
        // Mostrar el resultado
        document.getElementById('resultado').innerText = 'Resultado: ' + cadenaResultado;
      }
      
      encontrarMayor() {
        // Obtener el valor  y convertirlo a un arreglo de números
        let numerosInput = document.getElementById('numerosInput').value;
        let numeros = numerosInput.split(',').map(function(item) {
          return parseFloat(item.trim()); // Convertir cada elemento a número
        });
      
        // Verificar si hay al menos un número válido en el arreglo
        if (numeros.some(isNaN)) {
          alert("Por favor, ingrese solo números válidos.");
          return;
        }
      
        // Encontrar el valor máximo en el arreglo
        let mayor = Math.max(...numeros);
      
        // Mostrar el resultado
        document.getElementById('resultado').innerText = 'El mayor es: ' + mayor;
    }
      
    buscarEnArreglo() {
        // Obtener el valor y convertirlo a un arreglo de números
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); // Convertir cada elemento a número
        });
      
        // Obtener el valor de búsqueda
        let elementosBuscarInput = document.getElementById('elementosBuscar').value;
        let elementosBuscar = elementosBuscarInput.split(',').map(function(item) {
          return parseInt(item.trim()); // Convertir cada elemento a número
        });
      
        // Mostrar el resultado directamente sin verificar si el elemento está presente en el arreglo
        let posiciones = elementosBuscar.map(function(elemento) {
          return arreglo.indexOf(elemento);
        });
      
        // Mostrar el resultado
        document.getElementById('resultado').innerText = 'Posiciones: ' + posiciones.join(', ');
    }
      
    insertarEnArreglo() {
        // Obtener el valor del campo de entrada y convertirlo a un arreglo de números
        let arregloInput = document.getElementById('arregloInput').value;
        let arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); // Convertir cada elemento a número
        });
      
        // Obtener el valor  de inserción y elemento a insertar
        let posicionInsertar = parseInt(document.getElementById('posicionInsertar').value);
        let elementoInsertar = parseInt(document.getElementById('elementoInsertar').value);
      
        // Verificar si la posición de inserción es válida
        if (isNaN(posicionInsertar) || posicionInsertar < 0 || posicionInsertar > arreglo.length) {
          alert("La posición de inserción no es válida.");
          return;
        }
      
        // Insertar el elemento en la posición especificada
        arreglo.splice(posicionInsertar, 0, elementoInsertar);
      
        // Mostrar el resultado
        document.getElementById('resultado').innerText = 'Arreglo después de la insertar: ' + arreglo.join(', ');
    }
      
    eliminarDeArreglo() {
        // Obtener el valor del campo de entrada y convertirlo a un arreglo de números
        let arregloInput = document.getElementById('arregloInput').value;
        let  arreglo = arregloInput.split(',').map(function(item) {
          return parseInt(item.trim()); // Convertir cada elemento a número
        });
      
        // Obtener el valor de la  eliminación
        let elementoEliminar = parseInt(document.getElementById('elementoEliminar').value);
      
        // Eliminar el elemento especificado del arreglo
        arreglo = arreglo.filter(function(elemento) {
          return elemento !== elementoEliminar;
        });
      
        // Mostrar el resultado con corchetes
        document.getElementById('resultado').innerText = 'Arreglo después de la eliminación: [' + arreglo.join(', ') + ']';
    }
      
    convertirAArreglo() {
        // Obtener el valor en entrada
        let cadena = document.getElementById('cadenaInput').value;
      
        // Convertir la cadena a un arreglo utilizando el método split 
        let arreglo = cadena.split(',');
      
        // Agregar comillas a cada elemento del arreglo
        let arregloConComillas = arreglo.map(function(elemento) {
          return '"' + elemento + '"';
        });
      
        // Mostrar el resultado con comillas
        document.getElementById('resultado').innerText = 'Arreglo resultante: [' + arregloConComillas.join(', ') + ']';
    }
      
   
}
    

let cad = new cadenaArreglo ();
//cad.concatenar()
//cad.Buscar_SubCadena()
//cad.insertarSubcadena()
//cad.eliminarSubcadena()
//cad.convertirACadena() 
//cad.encontrarMayor()
//cad.buscarEnArreglo()
//cad.insertarEnArreglo()
//cad.eliminarDeArreglo()
//cad.convertirAArreglo()