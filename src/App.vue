<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import RadioButtons from "./components/RadioButtons.vue";
import MyTextArea from "./components/MyTextArea.vue";
import TextInput from "./components/TextInput.vue"
import Menu from "./components/Menu.vue"
</script>

<template>
  <div class="main">
    
    <div class="settings">
      <div class="text h1">Настройки</div>
      <Menu></Menu>
      <TextInput title="Заголовок" idS="sample5" ></TextInput>
      <RadioButtons v-show="selectedOption !== '4'"></RadioButtons>
      <MyTextArea v-show="selectedOption !== '2'"></MyTextArea>
      <button class="mdc-button mdc-button--raised mdc-button--leading" onclick="draw();" style="width: 100%;">
            <span class="mdc-button__ripple"></span>
            <i class="material-icons mdc-button__icon" aria-hidden="true"
              >refresh</i
            >
            <span class="mdc-button__label">Обновить</span>
          </button>
      <div class="buttons-block">
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
        
      </div>
    </div>
    <div class="output">
      <div class="sketch" id="sketch-div"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "1",
    };
  },
};



</script>



<style lang='scss'>
@use "@material/theme";
@use "../node_modules/@material/button/styles.scss";




</style>
