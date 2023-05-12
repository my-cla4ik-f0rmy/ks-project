

<template>
<label class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--with-internal-counter area" style="width: 100%;">
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading"></span>
    <span class="mdc-notched-outline__notch">
      <span class="mdc-floating-label" id="my-label-id">Информация</span>
    </span>
    <span class="mdc-notched-outline__trailing"></span>
  </span>
  <span class="mdc-text-field__resizer">
    <textarea class="mdc-text-field__input" aria-labelledby="my-label-id" rows="8" cols="40" maxlength="140" id="sample6"></textarea>
    <span class="mdc-text-field-character-counter">0 / 140</span>
  </span>
  
</label>
</template>


<script>
selectedOption = select.querySelector('.mdc-deprecated-list-item--selected').getAttribute('data-value');


</script>

<style lang="scss">


@use "@material/floating-label/mdc-floating-label";
@use "@material/line-ripple/mdc-line-ripple";
@use "@material/notched-outline/mdc-notched-outline";
@use "@material/textfield";

@include textfield.core-styles;

.mdc-text-field{
  @include textfield.outline-color(orange);
}



</style>




