// var myModalButon = document.querySelectorAll('.btnn');
// console.log(myModalButon);

// var overlay = document.querySelector('.overlay');
// var text = document.querySelector('.text');
// console.log(overlay);
// console.log(text);
// for (let i = 0; i < myModalButon.length; i++) {
//     myModalButon[i].addEventListener('click', () => {
//         overlay.classList.remove('hide');
//         text.classList.remove('hide')
//     })
// }

// overlay.addEventListener('click', (() => {
//     overlay.classList.add('hide');
//     text.classList.add('hide')
// }))
let myBtn = document.querySelectorAll('.btnn');
console.log(myBtn);
let lorem = document.querySelector('.text');
console.log(lorem);
let blackShadow = document.querySelector('.overlay');
console.log(blackShadow)
let modal = document.querySelector('.hide');
console.log(modal);
let body = document.querySelector('.body');
console.log(body)
let esc = document.querySelector('.esc');
console.log(esc);



for (let m = 0; m < myBtn.length; m++) {
    myBtn[m].addEventListener('click', () => {

        blackShadow.classList.remove('hide');
        lorem.classList.remove('hide')
      
        // body.classList.remove('hide')

    })

}
blackShadow.addEventListener('click', ()=>{
    blackShadow.classList.add('hide');
    lorem.classList.add('hide');
 
    // body.classList.add('hide');
}
)
esc.addEventListener('click',()=>{
    blackShadow.classList.add("hide");
    lorem.classList.add('hide')
}

)