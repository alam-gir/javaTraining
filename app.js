// =================script for color changer project =====================


const navList = document.querySelectorAll('li');
const simpleColorPage = document.querySelector('.simpleColor')
const hexColorPage = document.querySelector('.hexColor')
const colorChangeBtn = document.querySelector('.colorChangeBtn');
const colorHeading = document.querySelector('.colorHeading');
const colorName = document.querySelector('.colorText');
const colorPalate = document.querySelector('.colorPalate');


// simple color utilities----------------------

const colors = ["red", "blue", "green", "purple", "black"];
colorHeading.textContent = "The Simple Color Name is : ";

// Hex color utilities----------------------

const hexColors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]

// simple color function -------

function getRandomNumberForSimpleColor(){
    return Math.floor(Math.random()*colors.length);
}

function simpleColorChange(){
    let simpleColorRandomNumber = getRandomNumberForSimpleColor();
    colorName.textContent = colors[simpleColorRandomNumber];
    colorPalate.style.backgroundColor = colors[simpleColorRandomNumber];
}

colorChangeBtn.addEventListener('click', ()=>{
    simpleColorChange();
})

// hex color function ---------

function getRandomNumberForHexColor(){
    return Math.floor(Math.random()*hexColors.length);
}


navList.forEach(li => {
    li.addEventListener('click', (e)=>{
        if(e.currentTarget.classList.contains('simpleColor')){
            simpleColorPage.style.color = "#FF0000";
            hexColorPage.style.color = "#FF8787";
            

            colorChangeBtn.addEventListener('click', ()=>{
                colorHeading.textContent = "The Simple Color Name Is : ";
                simpleColorChange();
            })

        }
        if(e.currentTarget.classList.contains('hexColor')){
            e.currentTarget.style.color = "#FF0000";
            simpleColorPage.style.color = "#FF8787";
            


            colorChangeBtn.addEventListener('click', ()=>{
                colorHeading.textContent = "The Hex Color Code Is : ";
                let hexColorCode = "#";
                for(let i = 0; i<6; i++){
                    hexColorCode += hexColors[getRandomNumberForHexColor()];
                }
                colorName.textContent = hexColorCode;
                colorPalate.style.backgroundColor = hexColorCode;
            })
        }
    })
    
});




// ================= script for counter project =====================
// initialize coun
let count = 0;

// select element 

const counterHeading = document.querySelector('.counterHeading');
const counter = document.querySelector('.counter');
const counterBtns = document.querySelectorAll('.counterBtns .btn');

// text content 

counterHeading.textContent = 'Counter';
counter.textContent = '0';

// functions 

counterBtns.forEach(btn => {
        btn.addEventListener('click', (e)=>{
            // count setup 

            if(e.currentTarget.classList.contains('decrease')) count--;
            if(e.currentTarget.classList.contains('increase')) count++;
            if(e.currentTarget.classList.contains('reset')) count=0;

            // countText color 
            if( count > 0 ){ counter.style.color = 'green';}
            if( count < 0 ) {counter.style.color = 'red';}
            if( count == 0 ) {counter.style.color = '#333333';}

            counter.textContent = count;
        })
});

