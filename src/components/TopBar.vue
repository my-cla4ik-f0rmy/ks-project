<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <!--<button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button>-->
      <span class="mdc-top-app-bar__title">PicGen</span> </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Download" onclick="save();">file_download</button>
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Print this page" onclick="draw();">refresh</button>
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded" aria-label="Bookmark this page" onclick="shareImage()">share</button>
    </section>
  </div>
</header>
</template>
<script>
export default{
  methods: {
    saveLayout() {
        this.ps.save();
    },
    // ... остальные методы вашего компонента
}
}
</script>
<style lang='scss'>


@use "@material/icon-button";
@use "@material/top-app-bar/mdc-top-app-bar";
@use "@material/top-app-bar"; // namespace top-app-bar contains fill-color mixin

.mdc-top-app-bar {
  // fill-color($color) is defined in the top-app-bar namespace
  @include top-app-bar.fill-color(#6cfdaa);
  @include top-app-bar.ink-color(#000);
}
  


@import "@material/icon-button/mdc-icon-button";


</style>