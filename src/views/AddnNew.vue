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
              :hover="true"
              :clicked="true"
              :categories="MainCategories"
              @postValue="setSecondBlock"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :hover="secondBlockHover"
              :clicked="secondBlockClicked"
              :categories="SecondCategories"
              @postValue="setThirdBlock"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :hover="thirdBlockHover"
              :clicked="thirdBlockClicked"
              :categories="ThirdCategories"
              @postValue="saveThirdBlockValue"
            ></addNewPageCategoryWindow>
          </div>
        </div>
        <pre>
          СОСТАВ:
          1: {{ newItemData.main }}
          2: {{ newItemData.second }}
          3: {{ newItemData.third }}


          all:
          MainCategories: {{ MainCategories }}      SecondCategories: {{
            SecondCategories
          }}   ThirdCategories: {{ ThirdCategories }}
         
          
        </pre>
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
      categories: {
        first: [
          {
            name: "Женщины",
            second: [
              {
                name: "Второй столбик Женщины1",
                third: [
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                  { name: "Третий столбик женщины1" },
                ],
              },
              {
                name: "Второй столбик Женщины2",
                third: [
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                  { name: "Третий столбик женщины2" },
                ],
              },
              {
                name: "Второй столбик Женщины3",
                third: [
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                  { name: "Третий столбик женщины3" },
                ],
              },
              {
                name: "Второй столбик Женщины4",
                third: [
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                  { name: "Третий столбик женщины4" },
                ],
              },
            ],
          },
          {
            name: "Мужчины",
            second: [
              {
                name: "Второй столбик Мужчины1",
                third: [
                  { name: "Третий столбик мужчины1" },
                  { name: "Третий столбик мужчины1" },
                  { name: "Третий столбик мужчины1" },
                  { name: "Третий столбик мужчины1" },
                  { name: "Третий столбик мужчины1" },
                  { name: "Третий столбик мужчины1" },
                ],
              },
              {
                name: "Второй столбик Мужчины2",
                third: [
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                  { name: "Третий столбик мужчины2" },
                ],
              },
              {
                name: "Второй столбик Мужчины3",
                third: [
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                  { name: "Третий столбик мужчины3" },
                ],
              },
              {
                name: "Второй столбик Мужчины4",
                third: [
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                  { name: "Третий столбик мужчины4" },
                ],
              },
            ],
          },
          {
            name: "Дети",
            second: [
              {
                name: "Второй столбик Дети1",
                third: [
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                  { name: "Третий столбик дети1" },
                ],
              },
              {
                name: "Второй столбик Дети2",
                third: [
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                  { name: "Третий столбик дети2" },
                ],
              },
              {
                name: "Второй столбик Дети3",
                third: [
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                  { name: "Третий столбик дети3" },
                ],
              },
              {
                name: "Второй столбик Дети4",
                third: [
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                  { name: "Третий столбик дети4" },
                ],
              },
            ],
          },
        ],
      },
      newItemData: {
        main: "",
        second: "",
        third: "",
      },
      //отображение блоков по hover
      secondBlockHover: false,
      thirdBlockHover: false,
      //отображение блоков по click
      secondBlockClicked: false,
      thirdBlockClicked: false,
      //Массив с категориями, куда добаляют сеттеры из методов
      MainCategories: null,
      SecondCategories: null,
      ThirdCategories: null,
    };
  },
  components: {
    headerComponent: Header,
    addNewPageCategoryWindow: AddNewPageCategoryWindow,
  },
  methods: {
    //Добавление категорий в виде строк в массив 1 блока
    setFirstCategories: function (array) {
      this.MainCategories = [...array];
      this.SecondCategories = null;
    },
    //Добавление категорий в виде строк в массив 2 блока
    setSecondCategories: function (obj, name) {
      for (let i in obj) {
        if (obj[i].name === name) {
          this.SecondCategories = [...obj[i].second];
          this.newItemData.main = name;
          this.ThirdCategories = null;
        }
      }
    },
    //Добавление категорий в виде строк в массив 3 блока
    setThirdCategories: function (obj, name) {
      for (let i in obj) {
        if (obj[i].name === name) {
          this.ThirdCategories = [...obj[i].third];
          this.newItemData.second = name;
        }
      }
    },
    //сеттер для хранилища 2 блока
    setSecondBlock: function (value, name) {
      this.setSecondCategories(this.categories.first, name);
      this.secondBlockHover = value;
    },
    //сеттер для хранилища 3 блока
    setThirdBlock: function (value, name) {
      this.setThirdCategories(this.SecondCategories, name);
      this.thirdBlockHover = value;
    },
    saveThirdBlockValue: function (value, name) {
      this.newItemData.third = name;
    },
  },
  created() {
    // Категории для первого блока
    this.setFirstCategories(this.categories.first);
  },
};
</script>

<style lang="scss">
$bold: 700;
.add-new-page--categories--wrapper {
  display: flex;
  flex-direction: row;
}
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
