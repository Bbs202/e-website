const wrapper = document.querySelector(".sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem");

const products= [
    {
        id: 1,
        title: "AIR FORCE",
        price: 650,
        colors: [
            {
            code: "white",
            img: "./img/air2.jpg",
            },
        ],
    },

    {
        id: 2,
        title: "JORDAN",
        price: 950,
        colors: [
            {
            code: "black",
            img: "./img/jordan3.jpg",
            },
        ],
    },

    {
        id: 3,
        title: "BLAZER",
        price: 500,
        colors: [
            {
            code: "white",
            img: "./img/blazer1.jpg",
            },
        ],
    },

    {
        id: 1,
        title: "CRATER",
        price: 650,
        colors: [
            {
            code: "gray",
            img: "./img/crater1.jpg",
            },
        ],
    },

    {
        id: 1,
        title: "HIPPE",
        price: 450,
        colors: [
            {
            code: "black",
            img: "./img/hippe4.jpg",
            },
        ],
    },
]

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=> {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        //change the chosen product
        chosenProduct = products[index]

        //change text of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "$" + chosenProduct.price
        currentProductImg.src = chosenProduct.colors[0].img


        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
        size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close")

productButton.addEventListener("click", () =>{
    payment.style.display = "flex"
});
close.addEventListener("click", () =>{
    payment.style.display = "none"
})