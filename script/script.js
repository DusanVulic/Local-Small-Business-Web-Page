// ********** set date ************
const date = document.querySelector('.date');
// DOM check : console.log(date);
date.innerHTML = new Date().getFullYear();
//



// ********** navigation papameters and linking to specific page parts ************

// toggle button :
const toggleMenuButton = document.getElementById('mobile-menu');
//DOM check : console.log(toggleMenuButton);


// link container : 
const navMenu = document.querySelector('.nav-menu');
//DOM check : console.log(navMenu);

//all nav links :
const menuLinks = document.querySelectorAll('.nav-links');
//DOM check console.log(menuLinks);


// ********** show / hide navigation menu links with toggle button ************

const showMenuHAndler = () => {

    navMenu.classList.toggle('active-menu');
    toggleMenuButton.classList.toggle('is-active')
}

toggleMenuButton.addEventListener('click', showMenuHAndler);




// ********** ADDING  fix position to a navbar and show/hide back to top button ************

//select NAVBAR 
const navbar = document.querySelector('.navbar');
// DOM check console.log(navbar);

//select back to top button 
const backToTopBtn = document.querySelector('.top-link');
// DOM check console.log(backToTopBtn);




// ********** function for adding fix position to a navbar and show/hide back to top button ************

const showBackToTopHandler = () => {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 70) {
        navbar.classList.add('fixed-navbar');


    } else {
        navbar.classList.remove('fixed-navbar');
    }
    if (scrollHeight > 500) {
        backToTopBtn.classList.add('show-link');
    } else {
        backToTopBtn.classList.remove('show-link');
    }

}

//event listener to show /hide back to top button 
window.addEventListener('scroll', showBackToTopHandler);






// ********** close menu and linking to specicic page position ************

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        //prevent default linking
        event.preventDefault();
        // navigation to specific page part
        const id = event.currentTarget.getAttribute('href').slice(1);
        //  console.log(id);
        const element = document.getElementById(id);
        // selecting position of a navbar
        const navHeight = navbar.getBoundingClientRect().height;


        // fixed navbar "glitch"  fixing : 
        const fixedNavbar = navbar.classList.contains('fixed-navbar');



        // positioning /seting the height parameter
        let position = element.offsetTop - navHeight;

        if (!fixedNavbar) {
            position = position + 35;
        }


        console.log(position);
        //  send /scroll to that position
        window.scrollTo({
            left: 0,
            top: position,
        })

        // menu close
        if (navMenu.classList.contains('active-menu')) {
            navMenu.classList.remove('active-menu');
            console.log('klik klik klik');
            toggleMenuButton.classList.toggle('is-active')
        }
    })
})




// ********** Open and close answers at QUESTION SECTION  with traversing the DOM ************


// const buttons = document.querySelectorAll(".question-btn");
// // DOM check console.log(buttons);

// buttons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     })
// })




// ********** Open and close answers at QUESTION SECTION ************

const questions = document.querySelectorAll('.question');
// DOM check console.log(questions);

questions.forEach((question) => {
    // console.log(question);
    const button = question.querySelector('.question-btn');
    //console.log(button);
    button.addEventListener('click', () => {

        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })

});



// ********** REVIEWS SECTION ************


// reviewers data

const reviews = [{
        id: 1,
        name: "Mirjana Sečanski",
        job: "Recruiter Professional",
        img: "./images/person-1.jpg",
        text: "Željana ne samo što je edukovan maser koji zna svoj posao, već je i veoma pozitivna, prijatna i nasmejana osoba. Kao njen redovan klijent i madero i relax masaže mogu samo sve pohvale da joj uputim. Jedna je od najboljih u gradu za maderoterapiju.",
    },
    {
        id: 2,
        name: "srdjan randjelović",
        job: "Photographer",
        img: "./images/person-2.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "dušan vulić",
        job: "Designer",
        img: "./images/person-3.jpg",
        text: "Obzirom da zbog prirode posla provodim mnogo vremena pred računarom relax masaža mi je postala i više nego osnovna potreba. Nakon što sam promenio nekoliko salona za masažu, tražeći onaj pravi, slobodno mogu da izjavim da je ovo taj ! Sve pohvale ne samo za kvalitet usluge masaže već i za poslovnost i odnos sa klijentima.",
    },
    {
        id: 4,
        name: "isidora vukičević",
        job: "Personal trainer",
        img: "./images/person-4.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

//select DOM items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', () => { showPerson(currentItem) });

const showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// prev and next functions

const prevReview = () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}

const nextReview = () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

//show prev person
prevBtn.addEventListener('click', prevReview);


//show next person
nextBtn.addEventListener('click', nextReview);







//################# FORM !!! ##########//




var form = document.getElementById("form");

const handleSubmit = async(event) => {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Hvala što ste nam poslali poruku, javićemo Vam se uskoro ! ";
        form.reset();

        setTimeout(() => { status.innerHTML = "" }, 3000);

    }).catch(error => {
        status.innerHTML = "Oops! Postoji problem sa slanjem Vašeg upita, molimo Vas pokušajte ponovo kasnije."
    });
}
form.addEventListener("submit", handleSubmit)

//################# END of FORM !!! ##########//


// ********** GALLERY SECTION ************


// function to get DOM elements: 


// function getElement(selection) {
//     const element = document.querySelector(selection);
//     if (element) {
//         return element;
//     }
//     throw new Error(
//         `Please check "${selection}" selector, no such element exists`
//     );
// }


const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exists`
    );
}

class Gallery {

    constructor(element) {

        this.container = element;
        //console.log(element);
        this.list = [...element.querySelectorAll('.gallery-img')];
        // console.log(this.list);
        //target 
        this.modal = getElement('.modal');
        this.modalImg = getElement('.main-img');
        this.imageName = getElement('.image-name')
        this.modalImages = getElement('.modal-images');
        this.closeBtn = getElement('.close-modal-btn');
        this.prevBtn = getElement('.gallery-next-btn');
        this.nextBtn = getElement('.gallery-prev-btn');

        //bind functions
        //this.openModal = this.openModal.bind(this);

        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.chooseImage = this.chooseImage.bind(this);




        //container event
        this.container.addEventListener(
            'click',
            function(e) {
                if (e.target.classList.contains('gallery-img')) {
                    this.openModal(e.target, this.list)
                }
            }.bind(this)
        );
    }


    openModal(selectedImage, list) {


        this.setMainImage(selectedImage);
        this.modalImages.innerHTML = list.map(function(image) {

            return `<img src="${image.src}" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id===image.dataset.id ? "modal-img selected": "modal-img" }"/>`;
        }).join('');
        this.modal.classList.add('open');

        this.closeBtn.addEventListener('click', this.closeModal);
        this.nextBtn.addEventListener('click', this.nextImage);
        this.prevBtn.addEventListener('click', this.prevImage);
        this.modalImages.addEventListener('click', this.chooseImage);
    }
    setMainImage(selectedImage) {
        this.modalImg.src = selectedImage.src;
        this.imageName.textContent = selectedImage.title;
    }

    // button functions 

    closeModal() {
        this.modal.classList.remove('open');
        //removing event listeners after close modal
        this.closeBtn.removeEventListener('click', this.closeModal);
        this.nextBtn.removeEventListener('click', this.nextImage);
        this.prevBtn.removeEventListener('click', this.prevImage);
        this.modalImages.removeEventListener('click', this.chooseImage);


    }


    nextImage() {

        const selected = this.modalImages.querySelector('.selected');
        const next = selected.nextElementSibling || this.modalImages.firstElementChild;
        selected.classList.remove('selected');
        next.classList.add('selected');
        this.setMainImage(next);

    }


    prevImage() {
        const selected = this.modalImages.querySelector('.selected');
        const prev = selected.previousElementSibling || this.modalImages.lastElementChild;
        selected.classList.remove('selected');
        prev.classList.add('selected');
        this.setMainImage(prev);

    }


    chooseImage(e) {
        if (e.target.classList.contains('modal-img')) {
            console.log(e.target);
            const selected = this.modalImages.querySelector('.selected');
            selected.classList.remove('selected');

            this.setMainImage(e.target);
            e.target.classList.add('selected');
        }
    }

}
const gallery = new Gallery(getElement('.gallery-center'))