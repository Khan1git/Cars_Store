// The home section image exchange function 


function changeBackgroundImage() {
    const  imageUrls = [
        'url("./Images/car8.jpg")',
        'url("./Images/homepage.jpg")',

    ];
    const randomIndex =  Math.floor(Math.random() * imageUrls.length);

     document.getElementById('home1').style.backgroundImage = imageUrls[randomIndex];

    setInterval(changeBackgroundImage, 5000);
}

window.onload = function () {
    changeBackgroundImage();
};



// THE vehicle page mangement code
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const showButtons = document.querySelectorAll('#car-model .courses button');
    const homeSection = document.getElementById('home');
    const carInfo = homeSection.querySelector('#info');
    
    // Array to store car details and images
    const cars = [
        {
            name: 'THE HELL CAT 2023',
            model: '2023',
            year: '2023',
            cost: '$372,000',
            image: './Images/car4.jpg'
        },
        {
            name: 'THE BLUE VEGUN',
            model: '2023',
            year: '2023',
            cost: '$272,000',
            image: './Images/car2.jpg'
        },
        {
            name: 'THE YELLOW VELVET',
            model: '2023',
            year: '2023',
            cost: '$442,000',
            image: '"Images/car9.jpg"'
        },
        {
            name: 'THE NIGHT MONSTER',
            model: '2023',
            year: '2023',
            cost: '$142,000',
            image: "Images/car13.jpg"
        },
        {
            name: 'THE BLACK LEOPARD ',
            model: '2023',
            year: '2023',
            cost: '$542,000',
            image: "Images/car16.jpg"
        },
        {
            name: 'THE RED BULL ',
            model: '2023',
            year: '2023',
            cost: '$542,000',
            image: "Images/card1.png"
        },
        {
            name: 'THE BLACK PYTHON ',
            model: '2023',
            year: '2023',
            cost: '$542,000',
            image: "Images/card2.jpg"
        },
        {
            name: 'THE CYCLONE BEE ',
            model: '2023',
            year: '2023',
            cost: '$542,000',
            image: "Images/card3.jpg"
        },
        {
            name: 'THE SILVER WARRIOR ',
            model: '2023',
            year: '2023',
            cost: '$542,000',
            image: "Images/card4.jpg"
        }
    ];

    // Function to update home section with car details and image
    function updateHomeSection(index) {
        const car = cars[index];
        homeSection.style.backgroundImage = `url(${car.image})`;
        carInfo.innerHTML = `
            <h1>CAR INFO</h1>
            <p>VEHICLE NAME: ${car.name}</p>
            <p>MODEL: ${car.model}</p>
            <p>YEAR: ${car.year}</p>
            <p>COST: ${car.cost}</p>
            <div>
                <button>ORDER</button>
                <button>CART</button>
            </div>
        `;
    }

    // Event listener for "SHOW" buttons
    showButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            updateHomeSection(index);
        });
    });
});

const cart = document.getElementById('cart');

cart.addEventListener('click', () => {
    alert("Car added to cart");
});
