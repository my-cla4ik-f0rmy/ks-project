<template>
    <div class="output">

        <button  v-show="type == '1'" @click="shuffleColors" class="mdc-button mdc-button--unelevated" style="width: 100%;">
            <span class="mdc-button__ripple"></span>Перемешать цвета</button>
        <div class="sketch" id="sketch-div" ref="canvas"></div>
        <button @click="saveCanvas" class="mdc-button mdc-button--unelevated" style="width: 100%;"> <span
                class="mdc-button__ripple"></span>Скачать</button>
    </div>
</template>

<script>


export default {
    data() {
        return {
            type: '',
            colorEncoding: {
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
            },
            fontSize: {
                size80: 80,
                size48: 48,
                size180: 180,
                size60: 60,
            },
            colorRadio: '',
            title: '',
            info: '',
            colorMatrix: [
                ['#63B0DE', '#E9C154', '#28C67A', '#E87256', '#28C67A', '#E9C154'],
                ['#63B0DE', '#E87256', '#E9C154', '#63B0DE', '#E87256', '#28C67A'],
                ['#E9C154', '#28C67A', '#E87256', '#28C67A', '#63B0DE', '#E87256'],
                ['#E87256', '#28C67A', '#63B0DE', '#E9C154', '#28C67A', '#E87256'],
                ['#63B0DE', '#E87256', '#28C67A', '#E9C154', '#28C67A', '#63B0DE'],
                ['#28C67A', '#E9C154', '#E87256', '#63B0DE', '#E9C154', '#28C67A']
            ]
        };

    },

    methods: {
        shuffleColors() {
            for (let i = this.colorMatrix.length - 1; i > 0; i--) {
                for (let j = this.colorMatrix[i].length - 1; j > 0; j--) {
                    const randomRowIndex = Math.floor(Math.random() * (i + 1));
                    const randomColIndex = Math.floor(Math.random() * (j + 1));
                    [this.colorMatrix[i][j], this.colorMatrix[randomRowIndex][randomColIndex]] = [this.colorMatrix[randomRowIndex][randomColIndex], this.colorMatrix[i][j]];
                }
            }
        },
        saveLayout() {
            this.ps.save();
        },

        mycanvas: function (p) {
            p.preload = () => {
                //p.OpenSansBold = p.loadFont('./src/assets/font/OpenSans-Bold.ttf');
            } // dont user arrow function otherwise "this" wouldn't work
            p.setup = () => {
                p.pixelDensity(3.0);
                var b = document.getElementById('sketch-div');
                var w = b.clientWidth;
                var h = b.clientHeight;
                p.createCanvas(360, 360);
                p.createGraphics(1080, 1080);
                p.loop();
            }
            p.draw = () => {
                if (this.type === '1') {
                    let isDraw = 1;
                    p.resizeCanvas(360, 300);

                    firstLayout(this.title, this.info,this.colorRadio, this.fontSize.size80, this.colorEncoding, isDraw, this.colorMatrix)
                } else if (this.type === '2') {
                    p.resizeCanvas(360, 360);

                    secondLayout(this.fontSize.size80, this.type)
                }

                function firstLayout(title, info, colorRadio, fontSize, colop, isDraw, colorMatrix) {

                    let colors = {
                        '#63B0DE': 25, // 25% квадратов будет синего цвета
                        '#E9C154': 25, // 25% квадратов будет желтого цвета
                        '#28C67A': 25, // 25% квадратов будет зеленого цвета
                        '#E87256': 25 // 25% квадратов будет оранжевого цвета
                    };
                    p.background(300);
                    p.fill("#63B0DE");

                    let square_coutn = 6;
                    let squareSize = (360) / square_coutn;
                    let squaresPerRow = square_coutn;
                    let squaresPerCol = 6;
                    let totalSquares = squaresPerRow * squaresPerCol;
                    let squareColors = [];


                    /* if (isDraw == 1){
                        shuffle(squareColors)
                        isDraw = 0;
                    } */
                    // рисуем квадраты с полученными цветами



                    for (let i = 0; i < squaresPerRow; i++) {
                        for (let j = 0; j < squaresPerCol; j++) {
                            let color = colorMatrix[i][j];
                            squareColors.push(color);
                        }
                    }


                    for (let i = 0; i < squaresPerRow; i++) {
                        for (let j = 0; j < squaresPerCol; j++) {
                            let index = i + j * squaresPerRow;
                            let x = i * squareSize;
                            let y = j * squareSize;
                            p.fill(squareColors[index]);
                            p.rect(x, y, squareSize, squareSize);
                        }
                    }



                    function shuffle(array) {
                        for (let i = array.length - 1; i > 0; i--) {
                            const j = Math.floor(Math.random() * (i + 1));
                            [array[i], array[j]] = [array[j], array[i]];
                        }
                    }
                    p.noStroke()
                    p.fill("#ffffff");
                    p.textFont('MyFont')
                    p.textSize(31)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(title, 30, 27, 300);

                    p.textSize(20)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text("19 МАЯ 14:30", 30, 210, 300);

                    p.textSize(31)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(info, 30, 232, 300);
                    p.fill("#63B0DE");


                }

                function secondLayout(size80, type) {
                    p.background(400);
                    p.fill(200, 0, 0);
                    p.fill(200, 255, 0);
                    p.textSize(size80)
                    p.textFont('MyFont')
                    p.textLeading(100);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(type, 50, 50, 200);
                }


            }


        },
        saveCanvas() {
            this.ps.saveCanvas('myCanvas', 'png');
        },



    },

    mounted: function () {
        let isDraw = 1;
        let self = this;
        let canvas = this.$refs.canvas;
        this.ps = new p5(this.mycanvas, canvas);

      
        let select = document.querySelector('.mdc-select');
        this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
        setInterval(() => {
            this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
            this.title = document.getElementById("sample5").value;
            this.info = document.getElementById("sample6").value;


        }, 100);



    }

}

</script>

<style>
@font-face {
    font-family: 'MyFont';
    src: url('../font/OpenSans-ExtraBold.ttf') format('truetype');
    /* Дополнительные свойства шрифта */
}

body {
    font-family: 'MyFont', sans-serif;
}
</style>