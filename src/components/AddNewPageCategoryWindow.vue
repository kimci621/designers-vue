<template>
  <div class="list-main-wrapper f" v-if="this.hover || (this.clicked && this.categories)">
    <div class="list-wrapper">
      <ul class="add-new-page-window">
        <li
          class="add-new-page-window--item"
          v-for="(category, index) in categories"
          @mouseover="mouseOverEvent($event.target, category.name)"
          @mouseleave="mouseLeaveEvent($event.target, category.name)"
          @click="clickEvent($event.target, index, category.name)"
        >
          {{ category.name }} <span class="add-new-page-window--item--icon"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddNewPageCategoryWindow",
  props: {
    //наименования категорий, приходит из AddNew.vue
    categories: Array,
    //скрытие/появление через состояния
    hover: Boolean,
    clicked: Boolean,
  },
  data() {
    return {
      isLogin: Boolean,
      //Отключение рендера новых категорий при hover, если был кликнут элемент
      stopHover: true,
    };
  },
  methods: {},
  computed: {},
  methods: {
    classTrigger: function (items, index, parent) {
      //активная кнопка, присвоение класса active
      if (items[index].classList.contains("active")) {
        items[index].classList.remove("active");
        items[index].querySelector("span").classList.remove("active");
        this.stopHover = true;
      } else {
        //Удаляем классы у всех и добавляем нажатой категории
        //категория
        parent.querySelectorAll(".add-new-page-window--item").forEach((item) => {
          item.classList.remove("active");
        });
        items[index].classList.add("active");
        //галочка
        parent.querySelectorAll("span").forEach((span) => {
          span.classList.remove("active");
        });
        items[index].querySelector("span").classList.add("active");
        this.stopHover = false;
      }
    },
    clickEvent(target, index, name) {
      //оставь переменные!!!
      const parent = target.parentNode;
      const listItems = parent.children;
      this.classTrigger(listItems, index, parent);
      //рендер новых категорий по клику
      this.$emit("postValue", true, name);
    },
    //скрытие блока
    mouseLeaveEvent: function () {
      this.stopHover ? this.$emit("postValue", false) : null;
    },
    //если не зажата категория, отправляет и ренедерит новые категории с помощью название
    mouseOverEvent: function (target, name) {
      this.stopHover ? this.$emit("postValue", true, name) : null;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
$bg-active: #f9f9f9;
$border-color: #ebebeb;
.bg-active {
  background-color: $bg-active;
}
.list-wrapper {
  display: block;
  height: 100%;
  overflow-y: auto;
  width: 100%;
  margin: 0;
  padding: 0;
}
.list-main-wrapper {
  max-width: 380px;
  width: 100%;
  height: 380px;
  padding: 24px 0 24px 16px;
  overflow: hidden;
  border: 1px solid $border-color;
  &:hover {
    background-color: $bg-active;
  }
  &:not(:last-child) {
    background-color: $bg-active;
  }
}
.add-new-page-window {
  background-color: transparent;
  // width: calc(100% / 3);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  &--item {
    padding: 8px 0 8px 16px;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  &--item:hover {
    background-color: #fff;
  }
  &--item--icon {
    display: inline-block;
    visibility: hidden;
  }
  &--item--icon::after {
    content: url(@/assets/icons/clicked-ok.svg);
    display: inline-block;
    vertical-align: middle;
  }
  &--item--icon.active {
    display: inline-block;
    visibility: visible;
  }
  &--item.active {
    color: $pink;
    font-weight: 700;
  }
  &:hover,
  &.active {
    background-color: inherit;
  }

  // list wrapper scrollbar
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    width: 1px;
    background: #000000;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  &::-webkit-scrollbar-thumb {
    /* - ползунок */
    width: 5px;
    border-radius: 5px;
    background: $pink;
  }
  &::-webkit-scrollbar-track-piece {
    /* - видимая часть трека */
    width: 1px;
    border-radius: 5px;
    background: #000000;
  }
}
</style>
