<template>
    <div class="output">
        <div class="sketch" id="sketch-div" ref="canvas"></div>
    </div>
</template>

<script>


export default {
    data() {
        return {
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
            type: '',
        };

    },

    methods: {

        mycanvas: function (p) {
            p.preload = () => {
                p.OpenSansBold = p.loadFont('src/font/OpenSans-Bold.ttf');
            } // dont user arrow function otherwise "this" wouldn't work
            p.setup = () => {
                p.pixelDensity(3.0);
                var b = document.getElementById('sketch-div');
                var w = b.clientWidth;
                var h = b.clientHeight;
                p.createCanvas(350, 350);
                p.one = p.createGraphics(1080, 1080);
                p.loop();
            }
            p.draw = () => {
                if (this.type === '1') {
                    firstLayout(this.fontSize.size80, this.type)
                } else if (this.type === '2'){
                    secondLayout(this.fontSize.size80, this.type)
                }

                function firstLayout(size80, type){
                    p.background(100);
                    p.fill(200, 0, 0);
                    p.fill(200, 255, 0);
                    p.textSize(size80)
                    p.textLeading(100);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(type, 50, 50, 200);
                }

                function secondLayout(size80, type){
                    p.background(400);
                    p.fill(200, 0, 0);
                    p.fill(200, 255, 0);
                    p.textSize(size80)
                    p.textLeading(100);
                    p.textAlign(p.LEFT, p.TOP);
                    p.text(type, 50, 50, 200);
                }

            }



        }
    },
    mounted: function () {


        let canvas = this.$refs.canvas;
        this.ps = new p5(this.mycanvas, canvas);
        let select = document.querySelector('.mdc-select');
        this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
        setInterval(() => {
            this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
        }, 100);


    }

}

</script>