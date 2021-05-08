
let screen = document.querySelector('#screen-result');

function getData(ref){
    let value = ref.value;
    screen.value += value;
}
function clean(){
    screen.value ='';
}

function calculate() {
    try{
        screen.value = eval(screen.value);
    }
 catch(error){
  screen.value = 'Error';
     setTimeout(() =>{
          clean();
      },500);
       }
    }
function calculate2 (){
    screen.value = Math.sin(screen.value);
}
function calculate3 (){
    screen.value = Math.cos(screen.value);
}
function calculate4 (){
    screen.value = Math.tan(screen.value);
}











