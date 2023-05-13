<template>

    
    
<label class="mdc-text-field mdc-text-field--outlined mdc-text-field--no-label" style="width: 100%">

    
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    
    <span class="mdc-notched-outline__trailing"></span>
    

  </span>
  
  <select id='mySelect' style="width: 100%" class="mdc-text-field__input" v-model="selectedOption">
      <option value="1">Пост</option>
      <option value="2">Аватарка</option>
      <option value="3">Пост 2</option>
      <option value="4">Мозайка</option>
    </select>
</label>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '1' // Выбранная опция по умолчанию
    };
  }
};
</script>

<style lang="scss">
@use "@material/list/mdc-list";
@use "@material/menu-surface/mdc-menu-surface";
@use "@material/menu/mdc-menu";
@use "@material/select/styles";
</style>