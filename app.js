void setup( ){
  size(400,400);
}

var inc = 0;
var minc = 0;
var Minc = 5;
var Star = function( x, y, radius ) {
    this.x = x;
    this.y = y;
    fill(255, 255, 0);
    rectMode(CENTER);
    rect(x, y, 2 * radius, 2 * radius, radius);
};
var Planet = function( dist, radius, ref, speed, r, g, b) {
    var r = r || 84, g = g || 98, b = b || 255;
    var speed = speed || 0.1;
    fill(r, g, b);
    rectMode(CENTER);
    this.x = (dist * cos(inc)) + ref.x;
    this.y = (dist * sin(inc)) + ref.y;
    rect(this.x, this.y, 2 * radius, 2 * radius, radius);
    inc += speed;
};
var Moon = function( dist, radius, ref, speed, r, g, b) {
    var r = r || 84, g = g || 98, b = b || 255;
    var speed = speed || 0.05;
    fill(r, g, b);
    rectMode(CENTER);
    this.x = (dist * cos(minc)) + ref.x;
    this.y = (dist * sin(minc)) + ref.y;
    rect(this.x, this.y, 2 * radius, 2 * radius, radius);
    minc += speed;
};
var Mars = function( dist, radius, ref, speed, r, g, b) {
    var r = r || 84, g = g || 98, b = b || 255;
    var speed = speed || 0.05;
    fill(r, g, b);
    rectMode(CENTER);
    this.x = (dist * cos(Minc)) + ref.x;
    this.y = (dist * sin(Minc)) + ref.y;
    rect(this.x, this.y, 2 * radius, 2 * radius, radius);
    Minc += speed;
};

draw = function() {
    background(0);
    var sun = new Star(200,200,10);
    var earth = new Planet(90, 5, sun);
    var moon = new Moon(10, 3, earth, 0.5, 180,180,180);
    var mars = new Mars(150, 6, sun, 0.2, 255, 0, 100);
};
