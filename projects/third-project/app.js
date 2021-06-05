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
        image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHPBjrVHa19kg/profile-displayphoto-shrink_800_800/0/1619937771833?e=1628121600&v=beta&t=SMPqO_yUttJ5lwj-GP21HbNFoJhptu82y9reCVB6Vh8'
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
// console.log(reviews[0]);


nextReview.addEventListener('click', function(){
    // console.log(reviews[currentItem]);
    currentItem++;
    if (currentItem >= reviews.length) {
        currentItem  = 0;
    }

});



