<template>
  <div class="add-new-page">
    <headerComponent :activeTopList="false" :isActive="true"></headerComponent>
    <main>
      <div class="container">
        <!-- <pre>
      {{ newItemData.main }}
      {{ newItemData.second }}
      {{ newItemData.third }}
      </pre
        > -->
        <div class="first-page--wrapper f column" v-if="firstPageActive">
          <a href="#" class="back-to-profile-btn">Вернуться в личный кабинет</a>
          <h2 class="first-page--title">Добавление товара</h2>
          <div class="first-page--title--mobile--wrapper">
            <button @click="firstFormPrevWindow" class="back-btn"></button>
            <h3>Выберите категорию</h3>
            <div class="page-bumber">
              <span>0{{ firstFormWindowIndex }}</span
              ><span class="light">/</span><span class="light">3</span>
            </div>
          </div>
          <div class="first-page--content f">
            <addNewPageCategoryWindow
              :mobileActive="activeMobile.first"
              :hover="true"
              :categories="MainCategories"
              @postValue="setSecondBlock"
              :position="1"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
              @mobileFirstFormWindowSwitch="mobileFirstFormWindowSwitch"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :mobileActive="activeMobile.second"
              :hover="secondBlockHover"
              :categories="SecondCategories"
              @postValue="setThirdBlock"
              :position="2"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
              @mobileFirstFormWindowSwitch="mobileFirstFormWindowSwitch"
            ></addNewPageCategoryWindow>
            <addNewPageCategoryWindow
              :mobileActive="activeMobile.third"
              :hover="thirdBlockHover"
              :categories="ThirdCategories"
              :position="3"
              @setCategory="setCategoryString"
              @deleteCategory="deleteCategoryString"
              :DataforPost="newItemData"
              :sendButton="btnActive"
              @secondPageActiveTrigger="secondPageActiveTrigger"
              @mobileFirstFormWindowSwitch="mobileFirstFormWindowSwitch"
            ></addNewPageCategoryWindow>
            <!-- @postValue="saveThirdBlockValue" -->
          </div>
        </div>
        <div
          class="second-page--wrapper f column"
          v-if="secondPageActive"
        >
          <a
            href="#"
            class="back-to-profile-btn second-form"
            @click="secondPageActiveTrigger(true, false)"
            >Вернуться к выбору категорий</a
          >
          <h2 class="second-page--title">Добавление товара</h2>
          <addNewPageSecondPage :newItemData="newItemData"></addNewPageSecondPage>
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
      mode: "desktop",
      //Активность окон для мобильных
      activeMobile: {
        first: true,
        second: true,
        third: true,
      },
      //Активность 1 и 2 форм
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
      //Номер активного окна первой формы
      firstFormWindowIndex: undefined,
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
    //запись в объект первой формы
    setCategoryString: function (index, name) {
      if (index == 1 && name) {
        (this.newItemData.second = undefined),
          (this.newItemData.third = undefined);
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
    //удаление из объекта первой формы
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
    //свитчер для второй формы
    secondPageActiveTrigger(boolFirst, boolSecond) {
      this.firstPageActive = boolFirst;
      this.secondPageActive = boolSecond;
    },
    //свитчер активности окон для мобильных 850px
    mobileFirstFormWindowSwitch(index, value) {
      if (index < 3 && value !== "back") {
        this.firstFormWindowIndex = index + 1;
      }
      if (window.innerWidth <= 850) {
        if (index === 1) {
          this.activeMobile.first = value;
        }
        if (index === 2) {
          this.activeMobile.second = value;
        }
        if (index === 3) {
          this.activeMobile.third = value;
        }
        if (index === 1 && value === "next") {
          this.activeMobile.first = false;
          this.activeMobile.second = true;
          this.activeMobile.third = false;
        }
        if (index === 2 && value === "next") {
          this.activeMobile.first = false;
          this.activeMobile.second = false;
          this.activeMobile.third = true;
        }
        if (index === 2 && value === "back") {
          this.activeMobile.first = true;
          this.activeMobile.second = false;
          this.activeMobile.third = false;
        }
        if (index === 3 && value === "back") {
          this.activeMobile.first = false;
          this.activeMobile.second = true;
          this.activeMobile.third = false;
        }
      }
    },
    changeModeForFirstForm() {
      if (window.innerWidth <= 850) {
        this.mobileFirstFormWindowSwitch(1, true);
        this.mobileFirstFormWindowSwitch(2, false);
        this.mobileFirstFormWindowSwitch(3, false);
        this.mode = "mobile";
      }
      if (window.innerWidth >= 851) {
        this.mobileFirstFormWindowSwitch(1, true);
        this.mobileFirstFormWindowSwitch(2, true);
        this.mobileFirstFormWindowSwitch(3, true);
        this.mode = "desktop";
      }
    },
    firstFormPrevWindow() {
      this.mobileFirstFormWindowSwitch(this.firstFormWindowIndex, "back");
      this.firstFormWindowIndex > 1
        ? (this.firstFormWindowIndex = this.firstFormWindowIndex - 1)
        : null;
    },
  },
  watch: {
    mode(newMode, oldMode) {
      if (newMode) {
        this.deleteCategoryString(1);
        this.deleteCategoryString(2);
        this.deleteCategoryString(3);
        //При переходе с мобильной версии в десктоп скрываем 2 и 3 категории
        this.SecondCategories = undefined;
        this.ThirdCategories = undefined;
        document
          .querySelectorAll(".list-main-wrapper.f.bgactive")
          .forEach((item) => item.classList.remove("bgactive"));
      }
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
  beforeMount() {
    this.changeModeForFirstForm();
    this.firstFormWindowIndex = 1;
  },
  mounted() {
    // Категории для первого блока
    this.setFirstCategories(this.categoriesFromStore.first);
  },
  created() {
    let windowListener = () => {
      this.changeModeForFirstForm();
      if (window.innerWidth >= 851) {
        this.activeMobile.first = true;
        this.activeMobile.second = true;
        this.activeMobile.third = true;
      }
      this.firstFormWindowIndex !== 1 ? (this.firstFormWindowIndex = 1) : null;
      document
        .querySelectorAll(".add-new-page-window--item.active")
        .forEach((item) => item.classList.remove("active"));
      document
        .querySelectorAll(".add-new-page-window--item--icon.mobile.active")
        .forEach((item) => item.classList.remove("active"));
      // document.querySelectorAll(".list-main-wrapper.bgactive").forEach(item=>item.classList.remove("bgactive"))
    };
    window.addEventListener("resize", windowListener);
  },
  beforeDestroy() {
    window.removeEventListener("resize", windowListener);
  },
};
</script>

<style lang="scss" scoped>
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
  &--mobile--wrapper {
    display: none;
  }
}

.first-page--content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

@media (max-width: 1200px) {
  .first-page--wrapper.f.column,
  .second-page--wrapper.f.column {
    margin: 0 15px 100px;
  }
}

@media (max-width: 850px) {
  .first-page--content {
    flex-direction: column;
  }
  .first-page--wrapper.f.column,
  .second-page--wrapper.f.column {
    margin: 0 -15px;
    padding: 0;
  }
  .list-main-wrapper.f {
    border: none;
    background-color: #fff;
    padding: 0;
  }
  .first-page--title,
  .back-to-profile-btn {
    display: none;
  }
  .back-to-profile-btn.second-form {
    display: block;
  }
  .first-page--title--mobile--wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 24px;
    text-align: center;
    font-weight: 700;
    .light {
      color: rgb(166, 166, 166);
      font-size: 12px;
    }
  }
  .back-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    &::before {
      content: url(@/assets/icons/arrow-left.svg);
      width: 18px;
      height: 18px;
    }
  }
}


@media (max-width: 700px) {
  .first-page--content {
    justify-content: center;
    flex-direction: column;
  }
}
</style>
