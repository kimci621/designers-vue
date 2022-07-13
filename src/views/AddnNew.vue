<template>
  <div class="add-new-page">
    <headerComponent :activeTopList="false" :isActive="true"></headerComponent>
    <main>
      <div class="container">
        <div class="first-page--wrapper f column" v-if="firstPageActive">
          <a href="#" class="back-to-profile-btn">Вернуться в личный кабинет</a>
          <h2 class="first-page--title">Добавление товара</h2>
          <div class="first-page--content f">
            <addNewPageCategoryWindow
              :hover="true"
              :categories="MainCategories"
              @postValue="setSecondBlock"
              :position="1"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :hover="secondBlockHover"
              :categories="SecondCategories"
              @postValue="setThirdBlock"
              :position="2"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :hover="thirdBlockHover"
              :categories="ThirdCategories"
              :position="3"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
              :DataforPost="newItemData"
              :sendButton="btnActive"
              @secondPageActiveTrigger="secondPageActiveTrigger"
            ></addNewPageCategoryWindow>
            <!-- @postValue="saveThirdBlockValue" -->
          </div>
        </div>
        <div class="second-page--wrapper f column" v-if="secondPageActive">
          <a
            href="#"
            class="back-to-profile-btn"
            @click="secondPageActiveTrigger(true, false)"
            >Вернуться к выбору категорий</a
          >
          <h2 class="second-page--title">Добавление товара</h2>
          <addNewPageSecondPage></addNewPageSecondPage>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import AddNewPageCategoryWindow from "@/components/AddNewPageCategoryWindow.vue";
import AddNewPageSecondPage from "@/components/AddNewPageSecondPage.vue";
import store from "@/store/index.js";

export default {
  name: "AddnNew",
  store,
  data() {
    return {
      firstPageActive: true,
      secondPageActive: false,
      //выбранные категории
      newItemData: {
        main: undefined,
        second: undefined,
        third: undefined,
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
    addNewPageSecondPage: AddNewPageSecondPage,
  },
  methods: {
    //Добавление категорий в виде строк в массив 1 блока
    setFirstCategories: function (array) {
      this.MainCategories = [...array];
    },
    //Добавление категорий в виде строк в массив 2 блока
    setSecondCategories: function (obj, name) {
      for (let i in obj) {
        if (obj[i].name === name) {
          this.SecondCategories = [...obj[i].second];
        }
      }
      this.ThirdCategories = null;
    },
    //Добавление категорий в виде строк в массив 3 блока
    setThirdCategories: function (obj, name) {
      for (let i in obj) {
        if (obj[i].name === name) {
          this.ThirdCategories = [...obj[i].third];
        }
      }
    },
    //сеттер для хранилища 2 блока
    setSecondBlock: function (value, name) {
      //сохраняем для сохранения выбранных категорий
      this.setSecondCategories(this.categoriesFromStore.first, name);
      this.secondBlockHover = value;
    },
    //сеттер для хранилища 3 блока
    setThirdBlock: function (value, name) {
      //сохраняем для сохранения выбранных категорий
      this.setThirdCategories(this.SecondCategories, name);
      this.thirdBlockHover = value;
    },

    setCategoryString: function (index, name) {
      if (index == 1 && name) {
        (this.newItemData.second = undefined), (this.newItemData.third = undefined);
        this.newItemData.main = name;
      }
      if (index == 2 && name) {
        this.newItemData.third = undefined;
        this.newItemData.second = name;
      }
      if (index == 3 && name) {
        this.newItemData.third = name;
      }
      return;
    },
    deleteCategoryString(index) {
      if (index == 1) {
        this.newItemData.main = undefined;
      }
      if (index == 2) {
        this.newItemData.second = undefined;
      }
      if (index == 3) {
        this.newItemData.third = undefined;
      }
      return;
    },
    secondPageActiveTrigger(boolFirst, boolSecond) {
      this.firstPageActive = boolFirst;
      this.secondPageActive = boolSecond;
    },
  },
  computed: {
    //getter from store
    categoriesFromStore() {
      return this.$store.state.categories;
    },
    btnActive() {
      return (
        this.newItemData.main !== undefined &&
        this.newItemData.second !== undefined &&
        this.newItemData.third !== undefined
      );
    },
  },
  mounted() {
    // Категории для первого блока
    this.setFirstCategories(this.categoriesFromStore.first);
  },
};
</script>

<style lang="scss">
@import "@/styles/media-mixins";

$bold: 700;
.back-to-profile-btn {
  font-weight: $bold;
  font-size: 16px;
  line-height: 24px;
  padding: 0 16px 0 0;
  margin: 32px 0 12px 0;
  &::before {
    content: url(@/assets/icons/arrow-left.svg);
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
  }
}
.first-page--title,
.second-page--title {
  font-weight: $bold;
  line-height: 32px;
  font-size: 24px;
  text-align: left;
  margin-bottom: 16px;
}

.first-page--content {
  display: flex;
  flex-direction: row;
  width: 100%;
}


//second page
.second-page--wrapper {
}

@media (max-width: 1200px) {
  .first-page--wrapper.f.column, .second-page--wrapper.f.column{
    margin: 0 15px;
  }
}

@media (max-width: 800px) {
  .first-page--wrapper.f.column, .second-page--wrapper.f.column{
    margin: 0 5px;
  }
}

@media (max-width: 700px) {
  .first-page--content {
    justify-content: center;
    flex-direction: column;
  }
}
</style>
