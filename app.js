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


// review section ========================================


// data array 
const review = [
    {
        id:1,
        name: "Alamgir Hussain",
        img: "image/personImage/person1.jpg",
        Profession: "Computer Engineer",
        reviewText: "laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum",
    },
    {
        id:2,
        name: "Ashiqul",
        img: "image/personImage/person2.jpg",
        Profession: "Civil Engineer",
        reviewText: "id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam",
    },
    {
        id:3,
        name: "Ridoy Hussain",
        img: "image/personImage/person3.jpg",
        Profession: "Electrical Engineer",
        reviewText: "nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu",
    },
    {
        id:4,
        name: "Nirob Hussain",
        img: "image/personImage/person4.jpg",
        Profession: "Mechanical Engineer",
        reviewText: "est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius",
    },

    {
        id:5,
        name: "Shaykat Rayhan",
        img: "image/personImage/person2.jpg",
        Profession: "Civil Engineer",
        reviewText: "est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius",
    }
]

// select element 
 const personName = document.getElementById('personName');
 const personImg = document.getElementById('personImg');
 const personProfession = document.getElementById('personProfession');
 const reviewText = document.getElementById('reviewText');

 const reviewPrevNextBtn = document.querySelectorAll('.reviewBtnContainer .btn');
//  const reviewPrevBtn = document.querySelector('.reviewPrevBtn');
//  const reviewNextBtn = document.querySelector('.reviewNextBtn');
// initial review 
 let currentReview = 0;

function reviewData(){
    personName.textContent = review[currentReview].name;
    personImg.src = review[currentReview].img;
    personProfession.textContent = review[currentReview].Profession;
    reviewText.textContent = review[currentReview].reviewText;
}

window.addEventListener('DOMContentLoaded', ()=>{
    reviewData();
})



reviewPrevNextBtn.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        if(e.currentTarget.classList.contains('reviewNextBtn')){
            currentReview++;
            if(currentReview > review.length - 1) currentReview = 0;
        }
        if(e.currentTarget.classList.contains('reviewPrevBtn')){
            currentReview--;
            if(currentReview < 0) currentReview = review.length-1;
        }
        
        reviewData();
    })
});


// question collapes section 
//  traversing the hole dom 

// select element 
// const questionBtn = document.querySelectorAll('.questionBtn');

// questionBtn.forEach(btn=>{
//     btn.addEventListener('click',(e)=>{
//         e.currentTarget.parentElement.parentElement.parentElement.classList.toggle('showAnswere');
//     })
// })

// selecting by element inner 
const questionContainer = document.querySelectorAll('.questionContainer');

questionContainer.forEach(question=>{
    const questionBtn = question.querySelector('.questionBtn');
    
    questionBtn.addEventListener('click', ()=>{

        questionContainer.forEach(item =>{
            if(item !== question){
                item.classList.remove('showAnswere');
            }
        })

        question.classList.toggle('showAnswere');
    })
})



// menu item Section =====================================

// menu data array 

const menu = [
    {
        id:1,
        name: "Chicken Steak",
        category: "lunch",
        price: 53,
        img:"image/food-image/lunch1.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:2,
        name: "beef Steak",
        category: "breakfast",
        price: 16,
        img:"image/food-image/breakfast1.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:3,
        name: "mutton Steak",
        category: "breakfast",
        price: 26,
        img:"image/food-image/breakfast2.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:4,
        name: "mutton curry",
        category: "shakes",
        price: 26,
        img:"image/food-image/shakes1.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:5,
        name: "orange cake shakes",
        category: "shakes",
        price: 64,
        img:"image/food-image/shakes2.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:6,
        name: "ciken rice",
        category: "lunch",
        price: 34,
        img:"image/food-image/lunch3.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
       },

    {
        id:7,
        name: "chocolate shake",
        category: "shakes",
        price: 7,
        img:"image/food-image/shakes3.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:8,
        name: "chicken rice",
        category: "diner",
        price: 23,
        img:"image/food-image/lunch1.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:9,
        name: "mutton khacci",
        category: "diner",
        price: 65,
        img:"image/food-image/breakfast4.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:10,
        name: "beef kacci",
        category: "diner",
        price: 34,
        img:"image/food-image/lunch3.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },

    {
        id:11,
        name: "special beef kacci",
        category: "diner",
        price: 24,
        img:"image/food-image/breakfast4.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]

// selector 

const menuContainer = document.querySelector('.menu-card-container');

const menuBtnsContainer = document.querySelector('.menu-filter-btn-container');


// DOM content Loaded Event 

window.addEventListener('DOMContentLoaded', ()=>{
    
    displyMenu(menu);
    displyMenuBtns();

})





// menu Element function 
function displyMenu(menuItem){

    let menuCard = menuItem.map(item=>{

        return `<div class="menu-card">
        <div class="food-img-section"><img src=${item.img} class="food-img" alt="foodimg"></div>
        <div class="food-info">
            <div class="food-info-heading">
                <h2 class="food-name">${item.name}</h2>
                <h2 class="food-price">$${item.price}</h2>
            </div>
            <div class="food-description-section">
                <p class="food-description">${item.description}</p>
            </div>

        </div>
    </div>`;
    });

    menuCard = menuCard.join("");
    menuContainer.innerHTML = menuCard;
}


 // category button  function
function displyMenuBtns(){
   
    const categories = menu.reduce((values, item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);
    
    let categoryBtns = categories.map(item=>{
        return `<button class="filter-btn btn" data-id="${item}">${item}</button>`;
    }).join("");
    
    menuBtnsContainer.innerHTML = categoryBtns;
    
    // menu btn select after DOM content loaded ***
    const menuBtns = document.querySelectorAll('.filter-btn');
    
    menuBtns.forEach(btn=>{
        console.log(btn);
        btn.addEventListener('click', (e)=>{
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem)=>{
                if(menuItem.category === category){
                    return menuItem;
                }
            })
            if(category === 'all'){
                displyMenu(menu);
            }
            else{
                displyMenu(menuCategory);
            }
            
            // button active class 
            
            if(category == category){
                menuBtns.forEach(btn => {
                    btn.classList.remove('active-btn');
                });
               e.currentTarget.classList.add('active-btn');
            }
        }) 
    })
   
    
}