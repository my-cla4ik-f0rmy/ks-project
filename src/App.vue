<script setup>
import RadioButtons from "./components/RadioButtons.vue";
import MyTextArea from "./components/MyTextArea.vue";
import TextInput from "./components/TextInput.vue"
import Menu from "./components/Menu.vue"
import TopBar from "./components/TopBar.vue"

</script>

<template>
  <TopBar/>
  <div class="main mdc-top-app-bar--fixed-adjust">
    
    <div class="settings">
      <!--<div class="text h1">Настройки</div>-->
      <TextInput title="Заголовок" idS="sample5" ></TextInput>
      <RadioButtons ></RadioButtons>
      <MyTextArea v-show="selectedOption !== '2'"></MyTextArea>
      <!--<div class="buttons-block">
        <button class="mdc-button mdc-button--raised mdc-button--leading" onclick="draw();" style="width: 100%;">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true"
              >refresh</i
            >
            <span class="mdc-button__label">Обновить</span>
          </button>
        <button class="mdc-button mdc-button--raised mdc-button--leading" onclick="shareImage()" style="width: 100%;">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true"
              >share</i
            >
            <span class="mdc-button__label">Поделиться</span>
          </button>
        <button class="mdc-button mdc-button--raised mdc-button--leading" onclick="save('blshv_'+document.getElementById('sample5').value)" style="width: 100%;">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true"
              >download</i
            >
            <span class="mdc-button__label">Скачать</span>
          </button>
        
      </div>-->
    </div>
    <div class="output">
      <div class="sketch" id="sketch-div"></div>
    </div>
  </div>
</template>

<script>



</script>



<style lang='scss'>

@use "@material/theme" with (
  $primary: #006491,
  $secondary: #006491,
  $background: #fff,
  
);
@use "@material/shape" with (
  $small-component-radius: 7px,
  $medium-component-radius: 7px
);
@use "material-components-web";
@use "@material/button";
@use "@material/button/styles.scss";


@import "./variables";



</style>
