
<template>
  <div class="mdc-form-field">
    <div class="mdc-radio">
        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios" value="1" checked>
        <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
    </div>
    <label for="radio-1">Синий</label>
    <div class="mdc-radio">
        <input class="mdc-radio__native-control" type="radio" id="radio-2" name="radios" value="2">
        <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
    </div>
    <label for="radio-2">Зеленый</label>
    <div class="mdc-radio">
        <input class="mdc-radio__native-control" type="radio" id="radio-3" name="radios" value="3">
        <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
    </div>
    
    
    <label for="radio-3">Оранжевый</label>

</div>
</template>


<style lang="scss" >
@use "@material/theme" with (
  $primary: #006491,
  $secondary: #006491,
 
  $on-primary: #006491,
  $on-secondary: #006491,
  $surface: red,
  
);
@use "@material/radio/styles";
@use "@material/form-field";

@include form-field.core-styles;

.mdc-radio{
    $ink-color: #006491
}
</style>