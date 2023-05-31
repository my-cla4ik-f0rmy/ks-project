<script setup>
import RadioButtons from "./components/RadioButtons.vue";
import TextInput from "./components/TextInput.vue"
import Menu from "./components/Menu.vue"
import Size from "./components/size.vue"
import Sketch from "./components/Sketch.vue"

</script>

<template>
  <div class="main">
    <div class="name">Шаблонус</div>
    <Menu title="Шаблон" idS="Menu"></Menu>
    <Size  title="Тип" idS="Size"></Size>
    <TextInput title="Заголовок" idS="title"></TextInput>
    <TextInput title="Блок №1" idS="info1"></TextInput>
    <TextInput title="Блок №2" idS="info2"></TextInput>
    <RadioButtons v-show="type == '2'"></RadioButtons>
    <Sketch></Sketch>
  </div>
</template>

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


.name{
  font-size: 35px;
}
</style>
