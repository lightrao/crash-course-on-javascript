// Function Declaration
function walk() {
    console.log("walk");
}
walk();

// Function Expression
const run = function () {
    console.log("run");
};
run();
const move = run;
move();