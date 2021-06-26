const photo = document.getElementById('personPhoto');
const name =  document.getElementById('personName');
const job =  document.getElementById('personJob');
const summary =  document.getElementById('personSummary');


const previousReview = document.getElementById('previousBtn');
const nextReview = document.getElementById('nextBtn');
const randomReview = document.getElementById('randomBtn');

//Use an array to store multiple objects
//HARDCODED REVIEWS
const reviews =[
    {
        id: 1,
        name: 'Alan Garcia',
        job: 'Frontend Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium doloribus a numquam aliquid voluptates provident dicta officia.',
        image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        name: 'Beatrice Creed',
        job: 'Backend Devoloper',
        description: 'Accusantium laudantium doloribus a numquam aliquid voluptates provident dicta officia.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 3,
        name: 'Neftali Nogalar',
        job: 'UX/UI Designer',
        description: 'Lorem ipsum dolor sit amet consectetur ',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80'
    },
    {
        id: 4,
        name: 'John Brook',
        job: 'Team lead',
        description: 'Amet consectetur adipisicing elit. Accusantium laudantium doloribus a voluptates provident dicta officia.',
        image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        id: 5,
        name: 'Ash Nova',
        job: 'VP Engineer',
        description: 'Lorem kitty pisum ipsumt consectetur adipisicing elit. Accusantium aliquid voluptates provident  officia.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    }
]

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    //Call the function and add a value
    obtainReview(currentItem);
});

//Make a function with a parameter
function obtainReview(person){
    //Get the reviews in an array
    const reviewItem = reviews[person];
    photo.src = reviewItem.image;
    name.textContent = reviewItem.name;
    job.textContent = reviewItem.job;
    summary.textContent = reviewItem.description;
}

//show next person
nextReview.addEventListener('click', function(){
    currentItem++;
    // Minus 1, with this reflects the actual last item in the array
    if (currentItem >= reviews.length - 1) {
        currentItem = 0;
    }
    obtainReview(currentItem);
});

previousReview.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1; 
    }
    obtainReview(currentItem);
});

randomReview.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    obtainReview(currentItem);
});

//show previous person

// nextReview.addEventListener('click', function(){
//     currentItem++;
//     if (currentItem >= reviews.length) {
//         currentItem  = 0;
//     }
// });



