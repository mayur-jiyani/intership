// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();


// factories fun
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }

//     }
// }

// let circle = createCircle(2);
// circle.draw();

// constuction fun
// function createCircle(radius) {
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// let another = new createCircle(21);


// let car = {
//     color: 'black'
// };
// car['brand'] = 'Tesla';

// delete car.brand;


// function Circle(radius) {
//     this.radius = radius,
//     this.draw = function () {
//         console.log('draw');
//     }
// }

// let circle = new Circle(10);
// for (let key in circle) {
//     console.log(key, circle[key]);
// }

function Stopwatch() {
    let startTime, end, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error(' Stopwatch is already running')
        running = true;
        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error(' Stopwatch is not running')
        running = false;
        startTime = new Date();

        const seconds = (end.getTime() - startTime.getTime())/1000;
        duration +=seconds;
    };

    this.reset = function() {
        startTime = null;
        end = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
} 