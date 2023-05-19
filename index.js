const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
  set area(a) {
    this.radius = Math.sqrt(a / Math.PI);
  },
};
circle.radius = 2;
console.log(circle.area);

circle.area = 20;
console.log(circle.radius);
