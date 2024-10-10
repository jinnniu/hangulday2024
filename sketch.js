let lightlime;
let yellow;
let sunflower;
let bisque;
let bubblegum;
let fluorescentpink;
let fluorescentorange;
let brightred;
let orange;
let metallicgold;
let brown;
let violet;
let risofederalblue;
let green;
let kellygreen;
let fluorescentgreen;
let mint;
let seafoam;
let teal;
let cornflower;
let aqua;
let blue;
let lightgray;
let black;
let pink;

// let img;
let ditherType = "atkinson";

function preload() {
  img1 = loadImage("./assets/popuri-1.jpeg");
  img2 = loadImage("./assets/popuri-2.jpeg");
  img3 = loadImage("./assets/popuri-3.jpeg");
  img0 = loadImage("./assets/walnut-boxing.png");
}

function setup() {
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);

  // popuri Riso color
  lightlime = new Riso("lightlime");
  yellow = new Riso("yellow");
  sunflower = new Riso("sunflower");
  bisque = new Riso("bisque");
  bubblegum = new Riso("bubblegum");
  fluorescentpink = new Riso("fluorescentpink");
  fluorescentorange = new Riso("fluorescentorange");
  brightred = new Riso("brightred");
  orange = new Riso("orange");
  metallicgold = new Riso("metallicgold");
  brown = new Riso("brown");
  violet = new Riso("violet");
  risofederalblue = new Riso("risofederalblue");
  green = new Riso("green");
  kellygreen = new Riso("kellygreen");
  fluorescentgreen = new Riso("fluorescentgreen");
  mint = new Riso("mint");
  seafoam = new Riso("seafoam");
  teal = new Riso("teal");
  cornflower = new Riso("cornflower");
  aqua = new Riso("aqua");
  blue = new Riso("blue");
  lightgray = new Riso("lightgray");
  black = new Riso("black");
  pink = new Riso("fluorescentpink");
}

function draw() {
  background(255);
  let threshold = map(mouseX, 0, width, 0, 255);
  clearRiso();

  // //text labels
  // black.text("lightlime", (windowWidth / 24) * 0, 10);
  // black.text("sunflower", (windowWidth / 24) * 1, 10);
  // black.text("bisque", (windowWidth / 24) * 2, 10);
  // black.text("none", (windowWidth / 24) * 3, 10);

  let ditheredpinkTop = ditherImage(img3, ditherType, threshold);
  let dithercornflowerTop = ditherImage(img1, ditherType, threshold);
  let ditherkellygreenTop = ditherImage(img2, ditherType, threshold);

  // top images
  pink.image(
    ditheredpinkTop,
    windowWidth / 2,
    0,
    windowWidth / 2,
    windowHeight - windowWidth / 24
  );
  cornflower.image(
    dithercornflowerTop,
    0,
    0,
    windowWidth / 2,
    windowHeight - windowWidth / 24
  );
  kellygreen.image(
    ditherkellygreenTop,
    windowWidth / 4,
    0,
    windowWidth / 2,
    windowHeight - windowWidth / 24
  );

  // bottom images
  let ditherlightlime = ditherImage(img0, ditherType, threshold);
  let ditheryellow = ditherImage(img0, ditherType, threshold);
  let dithersunflower = ditherImage(img0, ditherType, threshold);
  let ditherbisque = ditherImage(img0, ditherType, threshold);
  let ditherbubblegum = ditherImage(img0, ditherType, threshold);
  let ditherfluorescentpink = ditherImage(img0, ditherType, threshold);
  let ditherfluorescentorange = ditherImage(img0, ditherType, threshold);
  let ditherbrightred = ditherImage(img0, ditherType, threshold);
  let ditherorange = ditherImage(img0, ditherType, threshold);
  let dithermetallicgold = ditherImage(img0, ditherType, threshold);
  let ditherbrown = ditherImage(img0, ditherType, threshold);
  let ditherviolet = ditherImage(img0, ditherType, threshold);
  let ditherrisofederalblue = ditherImage(img0, ditherType, threshold);
  let dithergreen = ditherImage(img0, ditherType, threshold);
  let ditherkellygreen = ditherImage(img0, ditherType, threshold);
  let ditherfluorescentgreen = ditherImage(img0, ditherType, threshold);
  let dithermint = ditherImage(img0, ditherType, threshold);
  let ditherseafoam = ditherImage(img0, ditherType, threshold);
  let ditherteal = ditherImage(img0, ditherType, threshold);
  let dithercornflower = ditherImage(img0, ditherType, threshold);
  let ditheraqua = ditherImage(img0, ditherType, threshold);
  let ditherblue = ditherImage(img0, ditherType, threshold);
  let ditherlightgray = ditherImage(img0, ditherType, threshold);
  let ditherblack = ditherImage(img0, ditherType, threshold);

  lightlime.image(
    ditherlightlime,
    0,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  yellow.image(
    ditheryellow,
    (windowWidth / 24) * 1,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  sunflower.image(
    dithersunflower,
    (windowWidth / 24) * 2,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  bisque.image(
    ditherbisque,
    (windowWidth / 24) * 3,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  bubblegum.image(
    ditherbubblegum,
    (windowWidth / 24) * 4,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  fluorescentpink.image(
    ditherfluorescentpink,
    (windowWidth / 24) * 5,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  fluorescentorange.image(
    ditherfluorescentorange,
    (windowWidth / 24) * 6,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  brightred.image(
    ditherbrightred,
    (windowWidth / 24) * 7,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  orange.image(
    ditherorange,
    (windowWidth / 24) * 8,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  metallicgold.image(
    dithermetallicgold,
    (windowWidth / 24) * 9,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  brown.image(
    ditherbrown,
    (windowWidth / 24) * 10,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  violet.image(
    ditherviolet,
    (windowWidth / 24) * 11,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  risofederalblue.image(
    ditherrisofederalblue,
    (windowWidth / 24) * 12,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  green.image(
    dithergreen,
    (windowWidth / 24) * 13,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  kellygreen.image(
    ditherkellygreen,
    (windowWidth / 24) * 14,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  fluorescentgreen.image(
    ditherfluorescentgreen,
    (windowWidth / 24) * 15,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  mint.image(
    dithermint,
    (windowWidth / 24) * 16,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  seafoam.image(
    ditherseafoam,
    (windowWidth / 24) * 17,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  teal.image(
    ditherteal,
    (windowWidth / 24) * 18,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  cornflower.image(
    dithercornflower,
    (windowWidth / 24) * 19,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  aqua.image(
    ditheraqua,
    (windowWidth / 24) * 20,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  blue.image(
    ditherblue,
    (windowWidth / 24) * 21,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  lightgray.image(
    ditherlightgray,
    (windowWidth / 24) * 22,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );
  black.image(
    ditherblack,
    (windowWidth / 24) * 23,
    windowHeight - windowWidth / 24,
    windowWidth / 24,
    windowWidth / 24
  );

  drawRiso();
  noLoop();
}

// function mouseClicked() {
//   exportRiso();
// }

function keyReleased() {
  //function to change dither type with a keypress
  if (key == 1) exportRiso();
}
