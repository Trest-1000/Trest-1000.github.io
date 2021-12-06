'use strict';
var simple = document.getElementById('simple')
var simpleItem = document.getElementsByClassName('simple-item');
var itemPlus = document.querySelector('item-plus');
var arrResult = [];

simple.addEventListener('click', event => {
   if(event.target.className = 'btn'){
       console.log(event.target)
   } 
});

document.querySelector('.btn-1').addEventListener('click', () => {
    let x = document.querySelector('.btn-1').value;
    if (document.querySelector('.btn-1').checked) { //Если выбран то выводим
      document.getElementById('our_rez').innerHTML += + Boolean(true);
      
    }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult)
      //Сумирую элементы в массиве
     var reduced = arrResult.reduce(function(a, b) {
      return a + b;
    });
    console.log(reduced)
         
   });


   
document.querySelector('.btn-2').addEventListener('click', () => {
    let f = document.querySelector('.btn-2').value;
    if (document.querySelector('.btn-2').checked) { //Если выбран то выводим
      document.getElementById('our_rez2').innerHTML += + Boolean(true);
       }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez2').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult)
        //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced)
      
   });
 
   document.querySelector('.btn-3').addEventListener('click', () => {
    let z = document.querySelector('.btn-3').value;
    if (document.querySelector('.btn-3').checked) { //Если выбран то выводим
      document.getElementById('our_rez3').innerHTML += + Boolean(true);
    }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez3').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult) 
         //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced)
   });

   document.querySelector('.btn-4').addEventListener('click', () => {
    let q = document.querySelector('.btn-4').value;
    if (document.querySelector('.btn-4').checked) { //Если выбран то выводим
      document.getElementById('our_rez4').innerHTML += + Boolean(true);
    }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez4').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult)
          //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced) 
   });

   document.querySelector('.btn-5').addEventListener('click', () => {
    let r = document.querySelector('.btn-5').value;
    if (document.querySelector('.btn-5').checked) { //Если выбран то выводим
      document.getElementById('our_rez5').innerHTML += + Boolean(true);
    }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez5').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult)
          //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced)
   });


 document.querySelector('.btn-6').addEventListener('click', () => {
    let s = document.querySelector('.btn-6').value;
    if (document.querySelector('.btn-6').checked) { //Если выбран то выводим
      document.getElementById('our_rez6').innerHTML += + Boolean(true);
    }
       else {     //если не выбран, я буду стирать значение
           document.getElementById('our_rez6').innerHTML = '';
       } 
       arrResult.push(+ Boolean(true))
       console.log(arrResult)
          //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced)
});
/// чек бокс
 document.querySelector('.btn-7').addEventListener('click', () => {
     let t = document.querySelector('.btn-7').value;
     if (document.querySelector('.btn-7').checked) { //Если выбран то выводим
       document.getElementById('our_rez7').innerHTML += + Boolean(true);
     }
        else {     //если не выбран, я буду стирать значение
            document.getElementById('our_rez7').innerHTML = '';
        } 
        arrResult.push(+ Boolean(true))
       console.log(arrResult)
          //Сумирую элементы в массиве
       var reduced = arrResult.reduce(function(a, b) {
        return a + b;
      });
      console.log(reduced)
    });

    document.querySelector('.btn-8').addEventListener('click', () => {
        let u = document.querySelector('.btn-8').value;
        if (document.querySelector('.btn-8').checked) { //Если выбран то выводим
          document.getElementById('our_rez8').innerHTML += + Boolean(true);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez7').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true))
           console.log(arrResult)
        //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-9').addEventListener('click', () => {
        let v = document.querySelector('.btn-9').value;
        if (document.querySelector('.btn-9').checked) { //Если выбран то выводим
          document.getElementById('our_rez9').innerHTML += + Boolean(true);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez9').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true))
           console.log(arrResult)
        //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-10').addEventListener('click', () => {
        let w = document.querySelector('.btn-10').value;
        if (document.querySelector('.btn-10').checked) { //Если выбран то выводим
          document.getElementById('our_rez10').innerHTML += + (Boolean(true) * 0.5);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez10').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true) * 0.5)
           console.log(arrResult)
         //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-11').addEventListener('click', () => {
        let e = document.querySelector('.btn-11').value;
        if (document.querySelector('.btn-11').checked) { //Если выбран то выводим
          document.getElementById('our_rez10').innerHTML += + (Boolean(true) * 0.5);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez10').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true) * 0.5)
           console.log(arrResult) 
        //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-12').addEventListener('click', () => {
        let h = document.querySelector('.btn-12').value;
        if (document.querySelector('.btn-12').checked) { //Если выбран то выводим
          document.getElementById('our_rez11').innerHTML += + (Boolean(true) * 0.5);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez11').innerHTML = '';
           }
           arrResult.push(+ Boolean(true) * 0.5)
           console.log(arrResult) 
          //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-13').addEventListener('click', () => {
        let hl = document.querySelector('.btn-13').value;
        if (document.querySelector('.btn-13').checked) { //Если выбран то выводим
          document.getElementById('our_rez11').innerHTML +=  + (Boolean(true) * 0.5);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez11').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true) * 0.5)
           console.log(arrResult) 
            //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       });

       document.querySelector('.btn-14').addEventListener('click', () => {
        let hz = document.querySelector('.btn-14');
        if (document.querySelector('.btn-14').checked) { //Если выбран то выводим
          document.getElementById('our_rez12').innerHTML += + Boolean(true);
        }
           else {     //если не выбран, я буду стирать значение
               document.getElementById('our_rez12').innerHTML = '';
           } 
           arrResult.push(+ Boolean(true)) 
           console.log(arrResult)
          //Сумирую элементы в массиве
           var reduced = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(reduced)
       })
       //Кнопка
       var button = document.querySelector('.numbers');
         button.addEventListener('click', () => {
          var zet = arrResult.reduce(function(a, b) {
            return a + b;
          });
          console.log(zet)
         
             if(true) {
               document.getElementById('summa').innerHTML += zet;
             }         
             button.disabled = true;
             setTimeout(function() { button.disabled = false },10000000000000);
         });
        
        // document.querySelector('.numbers');

         //document.getElementById('summa').innerHTML += zet;
    
    
