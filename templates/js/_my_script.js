  //  --------------------------------
  document.addEventListener('click', documentActions);

  // делегирование события клик
  function documentActions(e) {
      const targetElement = e.target;

    //обработка клика на стрелку меню
          if(targetElement.classList.contains('menu__arrow')){
            targetElement.closest('.menu__item').classList.toggle('_hover');
          }
    
          if(!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length >0){
            _removeClasses(document.querySelectorAll('.menu__item._hover'),"_hover");
            
          }
   
 
        
      

      // можно добавлять события клика
  }
