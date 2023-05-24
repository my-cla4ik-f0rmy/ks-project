<script setup>
import RadioButtons from "./components/RadioButtons.vue";
import MyTextArea from "./components/MyTextArea.vue";
import TextInput from "./components/TextInput.vue"
import Menu from "./components/Menu.vue"
import TopBar from "./components/TopBar.vue"
import Sketch from "./components/Sketch.vue"


</script>

<template>
  <!--  <TopBar/> -->
  <div class="main">
<!--     <div class="text h1">Настройки</div>
 -->    <Menu></Menu>
    <TextInput title="Заголовок" idS="sample5"></TextInput>
    <TextInput title="Блок №1" idS="info1"></TextInput>
    <MyTextArea v-show="type !== '2'"></MyTextArea>
    <RadioButtons v-show="type !== '1'"></RadioButtons>
    <Sketch></Sketch>



  </div>
</template>

<script>


export default {
  data() {
    return {
      type: '',
    };

  },

  methods: {

    mycanvas: function () { }
  },
  mounted: function () {


    let select = document.querySelector('.mdc-select');
    this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
    setInterval(() => {
      this.type = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');
    }, 100);


  }

}

</script>



<style lang='scss'>
@use "@material/theme" with ($primary: #007db7,
  $secondary: #006491,
  $background: #fff,


);
@use "@material/shape" with ($small-component-radius: 5px,
  $medium-component-radius: 5px);
@use "material-components-web";
@use "@material/button";
@use "@material/button/styles.scss";


@import "./variables";
</style>
