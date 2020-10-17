//Grid declarations
const container = document.querySelector('.container');
const gridSquare = document.createElement('div');
gridSquare.classList.add('grid');

//Button declarations
const darkenBtn =  document.querySelector('#darken-button');
darkenBtn.addEventListener('click', function() {
    gridSquare.style.border = '0px';
    createGrid();
    pencilStart();
})
const blackBtn = document.querySelector('#black-button');
blackBtn.addEventListener('click', function() {
    gridSquare.style.border = '1px solid black';
    createGrid();
    blackStart();
})

//Slider declarations
let sliderDiv = document.querySelector('.slider-div');
let slider = document.querySelector('#slider');
let sliderValue = document.querySelector('#slider-value');
sliderValue.textContent = slider.value;

//Slider events
slider.addEventListener('input', function() {
    gridSquare.style.border = '1px solid black';
});
slider.addEventListener('input', displaySlider);
slider.addEventListener('input', createGrid);

//Making the slider responsively display correct value
function displaySlider() {
    sliderValue.textContent = this.value;
};

//Create the intial grid
function createGrid() {
    container.innerHTML = '';
    let gridSize = slider.value * slider.value;

    gridSquare.style.height = `${100 / slider.value}%`;
    gridSquare.style.width = `${100 / slider.value}%`;

    for (i = 0; i < gridSize; i++) {
        container.appendChild(gridSquare.cloneNode());
    };
    draw();
};

function draw() {
    let grid = document.querySelectorAll('.grid');
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", function() {
            grid[i].style.backgroundColor = '#000';
        });  
    }
}

function blackStart() {
    penColor = '#000';
    draw();
}

function pencilStart() {
    let grid = document.querySelectorAll('.grid');
    for (let i = 0; i < grid.length; i++) {
        let red = 255;
        let green = 255;
        let blue = 255;
        grid[i].onmouseover = function () {
            changeToBlackAndWhite(grid[i], red-=25.5, green-=25.5, blue-=25.5);
        }
    }
}

function changeToBlackAndWhite(grid, red, green, blue) {
    grid.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue +')';
};



//Main function, where all sub-functions get called
function main() {
    createGrid();
    draw();
}

main();




