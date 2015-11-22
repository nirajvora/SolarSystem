void setup( ){
  size(400,400);
}

background(0);
var Star = function( x, y, radius ) {
    this.x = x;
    this.y = y;
    fill(255, 255, 0);
    rectMode(CENTER);
    rect(x, y, 2 * radius, 2 * radius, radius);
};

var Planet = function( dist, radius, ref, r, g, b) {
    var r = r || 84;
    var g = g || 98;
    var b = b || 255;
    
    this.x = ref.x;
    this.y = ref.y + dist;
    
    fill(r, g, b);
    rectMode(CENTER);
    rect(this.x, this.y, 2 * radius, 2 * radius, radius);
};

var sun = new Star(200,200,10);
var earth = new Planet(100, 4, sun);