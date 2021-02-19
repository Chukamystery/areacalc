const circle = document.querySelector('.circle')
const square = document.querySelector('.square')
const rectangle = document.querySelector('.rectangle')
const cylinder = document.querySelector('.cylinder')
const circleCalc = document.querySelector('.circle-calc')
const squareCalc = document.querySelector('.square-calc')
const rectangleCalc = document.querySelector('.rectangle-calc')
const cylinderCalc = document.querySelector('.cylinder-calc')
const navOptions = document.querySelector('.nav-options')
const area = document.querySelectorAll('.area')
const areaCalc = document.querySelectorAll('.area-calc');
const circleValue = document.querySelector('#circle')
const circleBtn = document.querySelector('.circle-calc-btn')
const circleResult = document.querySelector('.circle-result')
const squareValue = document.querySelector('#square')
const squareBtn = document.querySelector('.square-calc-btn')
const squareResult = document.querySelector('.square-result')
const rectangleValueOne = document.querySelector('.rec-value-1')
const rectangleValueTwo = document.querySelector('.rec-value-2')
const rectangleBtn = document.querySelector('.rectangle-calc-btn')
const rectangleResult = document.querySelector('.rectangle-result')
const cylinderValueOne = document.querySelector('.cylinder-value-1')
const cylinderValueTwo = document.querySelector('.cylinder-value-2')
const cylinderBtn = document.querySelector('.cylinder-calc-btn')
const cylinderResult = document.querySelector('.cylinder-result')


function format() {
    area.forEach((cur) => {
        cur.classList.remove('active')
    });

    areaCalc.forEach((cur) => {
        cur.classList.remove('active-index')
    });

}


square.addEventListener('click', () => {
    //Remove all active classes
    format()

    //add active classes to clicked item
    square.classList.add('active');
    squareCalc.classList.add('active-index')

})

circle.addEventListener('click', () => {
    //Remove all active classes
    format()

    //add active classes to clicked item
    circleCalc.classList.add('active-index')
    circle.classList.add('active');

})

rectangle.addEventListener('click', () => {
    //Remove all active classes
    format()
        //add active classes to clicked item
    rectangle.classList.add('active');
    rectangleCalc.classList.add('active-index')
})

cylinder.addEventListener('click', () => {
    //Remove all active classes
    format()
        //add active classes to clicked item
    cylinder.classList.add('active');
    cylinderCalc.classList.add('active-index')

})



const areaCircle = (radius) => {

    let pie = 3.14159;

    let result = pie * (radius * radius);
    console.log(result)
    circleResult.textContent = result;
}

// areaCircle(circleValue.value);



const areaSquare = (a) => {
    let result1 = (a * a);
    console.log(result1)
    squareResult.textContent = result1;
}

// areaSquare(5);

const areaRectangle = (w, l) => {
    let result = w * l;
    console.log(result)
    rectangleResult.textContent = result;
}

// areaRectangle(4, 6);

const areaCylinder = (r, h) => {
    let pie = 3.14159;

    let result = (2 * pie * r * h) + (2 * pie * (r * r));

    console.log(result)
    cylinderResult.textContent = result;

}

// areaCylinder(4, 5);

circleBtn.addEventListener('click', () => {
    areaCircle(circleValue.value);
})

squareBtn.addEventListener('click', () => {
    areaSquare(squareValue.value);
})

rectangleBtn.addEventListener('click', () => {
    areaRectangle(rectangleValueOne.value, rectangleValueTwo.value);
})

cylinderBtn.addEventListener('click', () => {
    areaCylinder(cylinderValueOne.value, cylinderValueTwo.value);
})