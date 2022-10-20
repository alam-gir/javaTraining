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