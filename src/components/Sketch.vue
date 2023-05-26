<template>
    <div class="output">
        <div class="buttons">
            <button @click="saveCanvas" class="mdc-button mdc-button--outlined mdc-button--icon-leading">
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon" aria-hidden="true">download</i>
                <span class="mdc-button__label">Скачать</span>
            </button>
            <button @click="shuffleColors" v-show="type == '1'"
                class="mdc-button mdc-button--outlined mdc-button--icon-leading">
                <span class="mdc-button__ripple"></span>
                <i class="material-icons mdc-button__icon" aria-hidden="true">cached</i>
                <span class="mdc-button__label">Перемешать цвета</span>
            </button>

        </div>
        <div class="sketch" id="sketch-div" ref="canvas"></div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            type: '',

            fontSize: {
                size80: 80,
                size48: 48,
                size180: 180,
                size60: 60,
            },
            postSize: {
                post: 300,
                storis: 640,
            },
            colorRadio: '',
            title: '',
            info: '',
            info1: '',
            size: '',
            colorMatrix: [
                ['#63B0DE', '#E9C154', '#28C67A', '#E87256', '#28C67A', '#E9C154'],
                ['#63B0DE', '#E87256', '#E9C154', '#63B0DE', '#E87256', '#28C67A'],
                ['#E9C154', '#28C67A', '#E87256', '#28C67A', '#63B0DE', '#E87256'],
                ['#E87256', '#28C67A', '#63B0DE', '#E9C154', '#28C67A', '#E87256'],
                ['#63B0DE', '#E87256', '#28C67A', '#E9C154', '#28C67A', '#63B0DE'],
                ['#E87256', '#28C67A', '#63B0DE', '#E9C154', '#28C67A', '#E87256'],
                ['#63B0DE', '#E9C154', '#28C67A', '#E87256', '#28C67A', '#E9C154'],
                ['#28C67A', '#E9C154', '#E87256', '#63B0DE', '#E9C154', '#28C67A'],
                ['#63B0DE', '#E87256', '#28C67A', '#E9C154', '#28C67A', '#63B0DE'],
                ['#E87256', '#28C67A', '#63B0DE', '#E9C154', '#28C67A', '#E87256'],
                ['#63B0DE', '#E87256', '#28C67A', '#E9C154', '#28C67A', '#63B0DE'],
                ['#28C67A', '#E9C154', '#E87256', '#63B0DE', '#E9C154', '#28C67A'],
            ],
            colors:{
                blue:'#63B0DE',
                orange: '#E87256',
                green: '#28C67A',
                yellow: '#E9C154'
            }
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
                    if (this.size === '1') {

                        p.resizeCanvas(360, this.postSize.post);
                        var indent = 27
                        var indent2 = 232


                    } else {

                        p.resizeCanvas(360, this.postSize.storis);
                        var indent = 100
                        var indent2 = 352

                    }

                    firstLayout(this.title, this.info, this.info1, this.colorMatrix, indent, indent2)
                } else if (this.type === '2') {
                    

                    if (this.size === '1') {

                        p.resizeCanvas(360, 300);
                        var indent = 27
                        var indent2 = 232


                    } else {

                        p.resizeCanvas(360, this.postSize.storis);
                        var indent = 100
                        var indent2 = 352

                    }

                    secondLayout(this.title, this.info, this.info1, indent, indent2, this.colorRadio)
                } else if (this.type === '3') {
                    

                    if (this.size === '1') {

                        p.resizeCanvas(360, 300);



                    } else {

                        p.resizeCanvas(360, this.postSize.storis);


                    }

                    thirdLayout()
                }

                function firstLayout(title, info, info1, colorMatrix) {


                    p.background(300);
                    p.fill("#63B0DE");

                    let square_coutn = 6;
                    let squareSize = (360) / square_coutn;
                    let squaresPerRow = 11;
                    let squaresPerCol = 6;
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


                    for (let i = 0; i < squaresPerCol; i++) {
                        for (let j = 0; j < squaresPerRow; j++) {
                            let index = i + j * squaresPerCol;
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
                    p.text(title.toUpperCase(), 30, indent, 300);

                    p.textSize(20)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(info1.toUpperCase(), 30, indent2 - 20, 300);

                    p.textSize(31)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(info.toUpperCase(), 30, indent2, 300);
                    p.fill("#63B0DE");


                }

                function secondLayout(title, info, info1, indent, indent2, colorRadio) {


                    if (colorRadio === '1'){
                        p.background('#63B0DE');

                    } else if (colorRadio === '2'){
                        p.background('#28C67A');

                    }else if (colorRadio === '3'){
                        p.background('#E87256');

                    }else if (colorRadio === '4'){
                        p.background('#E9C154');

                    }

                    p.noStroke()
                    p.fill("#ffffff");
                    p.textFont('MyFont')
                    p.textSize(31)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(title.toUpperCase(), 30, indent, 300);

                    p.textSize(20)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(info1.toUpperCase(), 30, indent2 - 20, 300);

                    p.textSize(31)
                    p.textLeading(40);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(info.toUpperCase(), 30, indent2, 300);
                    p.fill("#63B0DE");


                }

                function thirdLayout(){

                }


            }


        },
        saveCanvas() {
            this.ps.saveCanvas(this.title, 'png');
        },



    },

    mounted: function () {
        let isDraw = 1;
        let self = this;
        let canvas = this.$refs.canvas;
        this.ps = new p5(this.mycanvas, canvas);


        let select = document.querySelector('.mdc-select');
        let select2 = document.querySelector('.Size');
        let select3 = document.querySelector('.colors');


        this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
        setInterval(() => {
            this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
            this.size = select2.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
            this.colorRadio = select3.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
            this.title = document.getElementById("title").value;
            this.info = document.getElementById("info1").value;
            this.info1 = document.getElementById("info2").value;


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

.buttons {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
}

body {
    font-family: 'MyFont', sans-serif;
}
</style>