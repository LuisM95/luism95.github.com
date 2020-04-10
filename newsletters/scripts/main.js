let links = document.querySelectorAll(".close"); //obtener elementos

links.forEach(function(link){ //recorrerlos
  link.addEventListener('click',function(ev){ //agregar evento
    ev.preventDefault();
    let content = document.querySelector('.content'); //obtener elemento

    // Quitarle las Clases
    content.classList.remove("flash");
    content.classList.remove('animated');

    //Agregando nuevas Clases
    content.classList.add('fadeOutUp');
    content.classList.add('animated');

    //retrasando redireccionamiento
    setTimeout(function(){
      location.href = '/';
    },700)


    return false;
  })
})

/*let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  });
});*/
