<template>
  <div class="first-categories-breadcrumbs-wrapper">
    <ul class="breadcrumbs--categories">
      <li class="breadcrumbs--item first">{{ newItemData.main }}</li>
      <li class="breadcrumbs--item second">{{ newItemData.second }}</li>
      <li class="breadcrumbs--item">{{ newItemData.third }}</li>
    </ul>
    <button type="button" @click="backToFirstForm">Изменить категорию</button>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: ["newItemData"],
  methods: {
    backToFirstForm() {
      console.log("BACK");
      // this.$emit("backToFirstForm");
    },
  },
};
</script>

<style scoped lang="scss">
.first-categories-breadcrumbs-wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #ebebeb;
  button {
    padding: 6px 24px;
    border: 1px solid transparent;
    &:hover {
      cursor: pointer;
      background: transparent;
      border: 1px solid #0003;
    }
  }
  .breadcrumbs--categories {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .breadcrumbs--item {
      &.first,
      &.second {
        &::after {
          content: url(@/assets/images/i-chevron-right.svg);
          display: inline-block;
          vertical-align: middle;
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
