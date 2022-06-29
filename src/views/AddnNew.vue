<template>
  <div class="add-new-page">
    <headerComponent :activeTopList="false" :isActive="true"></headerComponent>
    <main>
      <div class="container">
        <div class="add-new-page--wrapper f column mt-20">
          <a href="#" class="add-new-page--back-to-profile-btn"
            >Вернуться в личный кабинет</a
          >
          <h2 class="add-new-page--title">Добавление товара</h2>
          <div class="add-new-page--categories--wrapper f">
            <addNewPageCategoryWindow
              :visible="true"
              :listItems="array.q"
              @postValue="migrateValue"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :listItems="array.w"
              :visible="secondBlock"
              @postValue="migrateValueForThird"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :listItems="array.e"
              :visible="thirdBlock"
            ></addNewPageCategoryWindow>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import AddNewPageCategoryWindow from "@/components/AddNewPageCategoryWindow.vue";

export default {
  name: "AddnNew",
  data() {
    return {
      secondBlock: false,
      thirdBlock: false,
      array: {
        q: ["Женщины", "Мужчины", "Дети"],
        w: [
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
        ],
        e: [
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
          "ВторойСтолбик",
        ],
      },
    };
  },
  components: {
    headerComponent: Header,
    addNewPageCategoryWindow: AddNewPageCategoryWindow,
  },
  methods: {
    triggerSecondBlock: function (bool) {
      this.secondBlock = bool;
    },
    triggerThirdBlock: function (bool) {
      this.thirdBlock = bool;
    },
    migrateValue: function (value) {
      this.secondBlock = value;
    },
    migrateValueForThird: function (value) {
      this.thirdBlock = value;
    },
  },
};
</script>

<style lang="scss">
$bold: 700;

.add-new-page {
  &--back-to-profile-btn {
    margin: 12px 0;
    font-weight: $bold;
    font-size: 16px;
    line-height: 24px;
    padding: 0 16px 0 0;
    &::before {
      content: url(@/assets/icons/arrow-left.svg);
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  &--title {
    font-weight: $bold;
    line-height: 32px;
    font-size: 24px;
    text-align: left;
  }
  &--categories--wrapper {
    margin: 16px 0 40px;
  }
}
</style>
