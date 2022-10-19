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
            colorHeading.textContent = "The Simple Color Name Is : ";

            colorChangeBtn.addEventListener('click', ()=>{
                simpleColorChange();
            })

        }
        if(e.currentTarget.classList.contains('hexColor')){
            e.currentTarget.style.color = "#FF0000";
            simpleColorPage.style.color = "#FF8787";
            colorHeading.textContent = "The Hex Color Code Is : ";


            colorChangeBtn.addEventListener('click', ()=>{
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



