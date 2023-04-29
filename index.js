// OOP
const circle = {
    radius: 3,
    location: {
        x: 1,
        y: 2
    },
    isVisible: true,
    draw: function () {
        console.log("draw circle");
    },
    move: function () {
        console.log("move circle");
    }
};

circle.draw();// method