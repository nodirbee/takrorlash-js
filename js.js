// const person = [1,2,3,4,5,6,7,8,9,10]

// person.push(15);
//охиридан малумот кошади


// person.pop()
//охиридан малумот учиради



//person.unshift(0,1,1,1)
//бошидан малумот кошади




//person.shift()
//бошидан малумот учиради



//person.splice(3,3,"nod")
// 3сондан кегин езув чикади ундан кегин 3та ракамни учирворади


// person.filter((item) => {

//     if(item<6){
//         console.log(item);
//     }

// })
//6дан катта еки кичик болган сонларни чикарип ташлайди

// const person=[3,6,4,8,12,24,1,78,65,45];

// person.sort((a,b) => {

//     return a-b;

// })




// const person = [1,2,3,4,5,6,7,8,9,10];

// const newperson = person.join('min,')

// console.log(newperson);


// console.log(person);


// const box1 = document.querySelector('.box1')

// box1.classList.add("box2")



// const box1 = document.querySelector('.box1');
// const btn = document.querySelector('button');

// btn.addEventListener('click',function(){
//     box1.classList.add('box2')
// })


// const box1 = document.querySelector('.box1');
// const button = document.querySelector('#openn');
//boxlarni tanitish 

// button.addEventListener('click',function(){
//     box1.classList.toggle('box2');
//     button.textContent = button.textContent === 'open' ? 'clouse' : 'open';
//  })
// knopka bosilganda buyuruq bagarish , toggle - almashtirish 


const box1 = document.querySelector('.box1');
const button = document.querySelector('#openn');

button.addEventListener('click',function(){
    box1.classList.toggle('box2');
    button.textContent = button.textContent === 'open' ? 'clouse' : 'open';
} )










