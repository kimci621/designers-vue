<template>
    <h2 class="h2">{{ title }}</h2>
</template>

<script>
export default {
  name: "Title",
  props: ["title"],
};
</script>

<style scoped lang="scss">
h2.h2 {
  font-weight: 700;
  font-size: 18px;
  margin: 20px 0;
  // ::after{
  //   content: url(@/assets/images/i-lightning.svg);
  //   width: 24px;
  //   height: 24px;
  // }
}
</style>
