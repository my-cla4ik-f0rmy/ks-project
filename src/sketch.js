

var Test = {
  data: {
    color1: "#1D628B",
    color2: "#2680B5",
    color3: "#399BD5",
    color4: "#63B0DE",
    color11: "#1F975D",
    color12: "#22A867",
    color13: "#24B770",
    color14: "#27C679",
    color21: "#B75842",
    color22: "#C75F48",
    color23: "#DB6B51",
    color24: "#E87156",
    fontsize: 80,
    fontsize2: 48,
    fontsize3: 180,
    fontsize4: 80,
    fontsize5: 60,
  }

}


//setInterval(draw, 1000);

function preload() {
  gen = false
  OpenSansBold = loadFont('./src/font/OpenSans-Bold.ttf');
  font2 = loadFont('./src/font/OpenSans-SemiBold.ttf');
  font3 = loadFont('./src/font/OpenSans-ExtraBold.ttf');
  img1 = loadImage('./src/images/student.svg')
  img2 = loadImage('./src/images/new.png')
  img3 = loadImage('./src/images/parent.svg')
  moon = loadImage('./src/images/moon.png');
  logo = loadImage('./src/images/social_media/logo.png');
  img = loadImage('./src/images/moon.png');
  color1 = "#1D628B";
  color2 = "#2680B5";
  color3 = "#399BD5";
  color4 = "#63B0DE";
  color11 = "#1F975D";
  color12 = "#22A867";
  color13 = "#24B770";
  color14 = "#27C679";
  color21 = "#B75842";
  color22 = "#C75F48";
  color23 = "#DB6B51";
  color24 = "#E87156";
  fontsize = 80;
  fontsize2 = 48;
  fontsize3 = 180;
  fontsize4 = 80;
  fontsize5 = 60;
  title = '3ИСП-3к';

}





let input;
let radio;
let g = 0;
let shareButton;

function setup() {
  pixelDensity(3.0);
  var b = document.getElementById('sketch-div');
  var w = b.clientWidth;
  var h = b.clientHeight;
  width = w
  height = h
  let canvas = createCanvas(350, 350);
  canvas.parent('sketch-div');
 
  select = document.getElementById('mySelect');
  type = select.value;


  one = createGraphics(1080, 1080);
  two = createGraphics(1080, 1080);
  three = createGraphics(1620, 1080);
  four = createGraphics(1080, 1080);
  
 // noLoop();


}



function makeRadio(number, option, parent) {
  radio = createRadio()
  radio.option(number, option)
  radio.addClass('custom-radio')
  radio.parent(parent)
}



function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data, '');
    img.hide();
  } else {
    img = null;
  }
}



function draw() {
  type = select.value;
  if (type == '1') {
    resizeCanvas(400, 400)
    post_sm();
    image(one, 0, 0, width, height);
    loop();

  } else if (type == '2') {
    resizeCanvas(400, 400)
    ava_chat();
    image(two, 0, 0, width, height);
    loop();

  } else if (type == '3') {
    resizeCanvas(400, 266.6666666666667)
    post_one();
    image(three, 0, 0, width, height);
    loop();

  } else if (type == '4') {
    resizeCanvas(400, 400)
    drawSquares();
    image(four, 0, 0, width, height);
    loop();
  }

}




function post_sm() {
  const name = document.getElementById("sample5").value;
  const name2 = document.getElementById("sample6").value;
  znach = document.querySelector('input[name="radios"]:checked').value
  if (znach == 1) {
    color_rec1 = color1;
    color_rec2 = color2;
    color_rec3 = color3;
    color_rec4 = color4;
  } else if (znach == 2) {
    color_rec1 = color11;
    color_rec2 = color12;
    color_rec3 = color13;
    color_rec4 = color14;
  } else if (znach == 3) {
    color_rec1 = color21;
    color_rec2 = color22;
    color_rec3 = color23;
    color_rec4 = color24;
  }

  background('#345534')
  one.background('#fdssdf')
  one.noStroke();
  one.fill(color_rec1)
  one.rect(810, 0, 270, 270)
  one.noStroke();
  one.fill(color_rec2)
  one.rect(810, 270, 270, 270)
  one.noStroke();
  one.fill(color_rec3)
  one.rect(810, 540, 270, 270)
  one.noStroke();
  one.fill(color_rec4)
  one.rect(810, 810, 270, 270)
  one.fill('#000000')
  one.textFont(OpenSansBold);
  one.textSize(fontsize)
  one.textWrap(WORD);
  one.textLeading(100);
  one.textAlign(LEFT, TOP);
  one.text(name, 50, 50, 707);
  let tHeight = textAscent(name) + textDescent(name);
  if (textWidth(name) > 95) {
    var down = 300;
  } else {
    down = 200;
  }

  one.textLeading(65);
  one.textFont(font2);
  one.textSize(fontsize2)
  one.text(tHeight, 50, down, 707);
  one.textLeading(70);
  one.textFont(font2);
  one.textSize(fontsize3)
  one.image(logo, 895, 895, 101, 115);
  loop();

}



function ava_chat() {

  const name = document.getElementById("sample5").value;
  znach = document.querySelector('input[name="radios"]:checked').value

  if (znach == 1) {
    two.image(img1, 0, 0, 1080, 1080)
  } else if (znach == 2) {
    two.image(img2, 0, 0, 1080, 1080)
  } else if (znach == 3) {
    two.image(img3, 0, 0, 1080, 1080)
  }
  two.fill('#000000');
  two.textFont(OpenSansBold);
  two.textSize(fontsize3)
  two.textWrap(WORD);
  two.textLeading(180);
  two.textAlign(CENTER, CENTER);
  two.text(name, 540, 500, 0);
  loop();


}


function post_one() {

  const name = document.getElementById("sample5").value;
  const name2 = document.getElementById("sample6").value;
  znach = document.querySelector('input[name="radios"]:checked').value
  if (znach == 1) {
    color_rec1 = color1;
    color_rec2 = color2;
    color_rec3 = color3;
    color_rec4 = color4;
  } else if (znach == 2) {
    color_rec1 = color11;
    color_rec2 = color12;
    color_rec3 = color13;
    color_rec4 = color14;
  } else if (znach == 3) {
    color_rec1 = color21;
    color_rec2 = color22;
    color_rec3 = color23;
    color_rec4 = color24;
  }

  three.fill(color_rec4)
  three.rect(0, 0, 1620, 270)
  three.noStroke();
  three.fill(color_rec3)
  three.rect(0, 270, 810, 270)
  three.noStroke();
  three.fill(color_rec2)
  three.rect(0, 540, 540, 270)
  three.noStroke();
  three.fill(color_rec1)
  three.rect(0, 810, 405, 270)
  three.fill('ffffff');
  three.textFont(OpenSansBold);
  three.textSize(96)
  three.textWrap(WORD);
  three.textAlign(LEFT, TOP);
  three.text(name, 80, 60);

  three.textFont(OpenSansBold);
  three.textSize(fontsize5)
  three.textWrap(WORD);
  three.textLeading(70);
  three.text(name2, 80, 1175, 131);

  image(img, 100, 67, width, height)
  loop();
  isGenSCalled = false;
}

let colors = {
  '#63B0DE': 25, // 25% квадратов будет синего цвета
  '#E9C154': 25, // 25% квадратов будет желтого цвета
  '#28C67A': 25, // 25% квадратов будет зеленого цвета
  '#E87256': 25 // 25% квадратов будет оранжевого цвета
};


function genS(squareSize, totalSquares, squaresPerRow, squaresPerCol) {

  let squareColors = [];

  for (g = 0; g < 1; g++) {
    for (let color in colors) {
      let count = Math.round(totalSquares * colors[color] / 100);
      for (let i = 0; i < count; i++) {
        squareColors.push(color);
      }
    }
    shuffle(squareColors, true); // перемешиваем массив цветов
    // рисуем квадраты с полученными цветами
    for (let i = 0; i < squaresPerRow; i++) {
      for (let j = 0; j < squaresPerCol; j++) {
        let index = i + j * squaresPerRow;
        let x = i * (squareSize);
        let y = j * (squareSize);
        four.fill(squareColors[index]);
        four.rect(x + 900, y, squareSize, squareSize);

      }
    }
  }
}


let isGenSCalled = false;



function drawSquares() {
  const name = document.getElementById("sample5").value;
  const name2 = document.getElementById("sample6").value;
  four.background('#ffffff')
  square_coutn = 1;
  four.noStroke();
  let squareSize = (1080 / 6) / square_coutn;
  let squaresPerRow = square_coutn;
  let squaresPerCol = 6;
  let totalSquares = squaresPerRow * squaresPerCol; 
  if (!isGenSCalled){
      genS(squareSize, totalSquares, squaresPerRow, squaresPerCol);
      isGenSCalled = true;
  
  }
  
  four.fill('#000')
  four.textFont(OpenSansBold);
  four.textSize(fontsize)
  four.textWrap(WORD);
  four.textLeading(100);
  four.textAlign(LEFT, TOP);
  four.text(name, 50, 50, 801);
  four.textLeading(65);
  four.textFont(font2);
  four.textSize(fontsize5)
  four.text(name2, 50, 200, 801);
  noLoop();
}



function shareImage() {
  if (navigator.share) {
    canvas.toBlob(function (blob) {
      navigator.share({
        files: [new File([blob], 'blshv_' + document.getElementById('sample5').value + '.png', { type: 'image/png' })],
      });
    });
  }
}





function save() {
  save('blshv' + document.getElementById('sample5').value);
  const canvas = document.getElementById('canvas');
  const dataURL = canvas.toDataURL();
  console.log(dataURL);

  


}




