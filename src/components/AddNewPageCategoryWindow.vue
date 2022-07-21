<template>
  <div
    class="list-main-wrapper f"
    :class="{ bgactive: bgActive }"
    v-if="this.hover && this.categories && this.mobileActive"
  >
    <div class="list-wrapper">
      <ul class="add-new-page-window">
        <li
          class="add-new-page-window--item"
          v-if="position === 3 && [...this.categories].length === 0"
          @mouseover="
            mouseOverEvent($event.target, 'Без категории 3-го уровня')
          "
          @mouseleave="
            mouseLeaveEvent($event.target, 'Без категории 3-го уровня')
          "
          @click="clickEvent($event.target, 0, 'Без категории 3-го уровня')"
        >
          Без подкатегории
          <span class="add-new-page-window--item--icon"></span>
        </li>
        <li
          class="add-new-page-window--item"
          v-for="(category, index) in categories"
          @mouseover="mouseOverEvent($event.target, category.name)"
          @mouseleave="mouseLeaveEvent($event.target, category.name)"
          @click="clickEvent($event.target, index, category.name)"
        >
          {{ category.name }}
          <span class="add-new-page-window--item--icon"></span>
          <span class="add-new-page-window--item--icon mobile"></span>
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="list-main-wrapper--btn"
      v-if="sendButton"
      @click="nextPage"
    >
      Продолжить
    </button>
  </div>
</template>

<script>
export default {
  name: "AddNewPageCategoryWindow",
  props: [
    "categories",
    "hover",
    "position",
    "sendButton",
    "DataforPost",
    "mobileActive",
  ],
  data() {
    return {
      isLogin: Boolean,
      //Отключение рендера новых категорий при hover, если был кликнут элемент
      stopHover: true,
      bgIsActive: false,
      bgActive: false,
    };
  },
  computed: {},
  methods: {
    removeActive: function (items, i) {
      items[i].classList.remove("active");
      items[i]
        .querySelectorAll("span")
        .forEach((span) => span.classList.remove("active"));
      this.stopHover = true;
      this.changeBgClass(false);
      //удаляем  имя выбранной по клику категории в localState родителя
      this.$emit("deleteCategory", this.position);
      this.$emit("mobileFirstFormWindowSwitch", this.position, "next");
    },
    removeActiveFromAll: function (parent) {
      //Удаляем классы у всех и добавляем нажатой категории
      parent.querySelectorAll(".add-new-page-window--item").forEach((item) => {
        item.classList.remove("active");
      });
      //галочка
      parent.querySelectorAll("span").forEach((span) => {
        span.classList.remove("active");
      });
    },
    addActive: function (items, i, parent) {
      //Удаляем классы у всех и добавляем нажатой категории
      parent.querySelectorAll(".add-new-page-window--item").forEach((item) => {
        item.classList.remove("active");
      });
      items[i].classList.add("active");
      //галочка
      parent.querySelectorAll("span").forEach((span) => {
        span.classList.remove("active");
      });
      items[i]
        .querySelectorAll("span")
        .forEach((span) => span.classList.add("active"));
      this.stopHover = false;
      //сохраняет имя выбранной по клику категории в localState родителя
      this.$emit("setCategory", this.position, items[i].textContent);
      this.changeBgClass(true);
      this.$emit("mobileFirstFormWindowSwitch", this.position, "next");
    },
    classTrigger: function (items, index, parent) {
      let collection = items;
      let indexOfCollection = index;
      let parentOfCollection = parent;
      //Ликвидация активной кнопки, удаление класса active
      if (collection[indexOfCollection].classList.contains("active") === true) {
        this.removeActive(collection, indexOfCollection);
      } else if (
        collection[indexOfCollection].classList.contains("active") === false
      ) {
        this.addActive(collection, indexOfCollection, parentOfCollection);
      }
    },
    clickEvent(target, index, name) {
      if (target.classList[0] == "add-new-page-window--item") {
        //оставь переменные!!!
        const parent = target.parentNode;
        const listItems = parent.children;
        this.classTrigger(listItems, index, parent);
        //стираем активную кнопку у соседнего элемента при смене категории
        if (document.querySelectorAll(".list-main-wrapper")[this.position]) {
          this.removeActiveFromAll(
            document.querySelectorAll(".list-main-wrapper")[this.position]
          );
          //стираем активную кнопку у последнего элемента если был нажат 1
          if (
            this.position === 1 &&
            document.querySelectorAll(".list-main-wrapper")[2]
          ) {
            this.removeActiveFromAll(
              document.querySelectorAll(".list-main-wrapper")[2]
            );
            this.$emit("postValue", false);
          }
        }
        //рендер новых категорий по клику
        this.$emit("postValue", true, name);
      }
      if (target.classList[0] == "add-new-page-window--item--icon") {
        //оставь переменные!!!
        const parent = target.parentNode.parentNode;
        const listItems = parent.children;
        this.classTrigger(listItems, index, parent);
        //стираем активную кнопку у соседнего элемента при смене категории
        if (document.querySelectorAll(".list-main-wrapper")[this.position]) {
          this.removeActiveFromAll(
            document.querySelectorAll(".list-main-wrapper")[this.position]
          );
          this.$emit("postValue", false);
        }
        //рендер новых категорий по клику
        this.$emit("postValue", true, name);
      }
    },
    //скрытие блока
    mouseLeaveEvent: function () {
      this.stopHover ? this.$emit("postValue", false) : null;
    },
    //если не зажата категория, отправляет и ренедерит новые категории с помощью название
    mouseOverEvent: function (target, name) {
      this.stopHover ? this.$emit("postValue", true, name) : null;
    },
    changeBgClass: function (bool) {
      this.bgActive = bool;
    },
    nextPage: function () {
      console.log(JSON.stringify(this.DataforPost));
      this.$emit("secondPageActiveTrigger", false, true);
    },
    //предыдущее окно
    prevMobileWindow() {
      this.$emit("mobileFirstFormWindowSwitch", this.position, "back");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  // max-width: 380px;
  width: calc(100% / 3);
  height: 450px;
  padding: 24px 0 24px 16px;
  overflow: hidden;
  border: 1px solid $border-color;
  position: relative;
  &:hover {
    background-color: $bg-active;
  }
  &:not(:last-child) {
    background-color: $bg-active;
  }
  &--btn {
    position: absolute;
    bottom: 24px;
    right: 50%;
    transform: translateX(50%);
    width: calc(100% - 64px);
    height: 24px;
    padding: 24px;
    line-height: 24px;
    background-color: $pink;
    border: none;
    border-radius: 4px;
    color: #fff;
    line-height: 0;
    font-size: 14px;
    font-weight: 700;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
    &:active {
      box-shadow: 0px 4px 8px rgba(228, 30, 78, 0.3);
    }
  }
}
.list-main-wrapper.bgactive {
  background-color: $bg-active;
  & .list-wrapper {
    & .add-new-page-window {
      &--item:hover {
        background-color: transparent;
      }
    }
  }
}
.add-new-page-window {
  background-color: transparent;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;

  &--item {
    padding: 8px 0 8px 16px;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
  }
  &--item:hover {
    //!!! нужна доработка чтобы не было эффекта на телефонах <850px
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
  &--item--icon.mobile {
    display: none;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    border: 2px solid #000;
    border-radius: 50%;
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
       background: $pink;
  }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    width: 1px;
    background: $pink;
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
    background: $pink;
  }
}
// .back-btn {
//   display: none;
// }
@media (max-width: 850px) {
  .list-main-wrapper {
    width: 100%;
  }

  .add-new-page-window--item {
    padding: 0;
    // border: 1px solid #EBEBEB;
    border-radius: 0;
    padding: 12px 24px;
    font-size: 12px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 24px;
    & + & {
      border-bottom: 1px solid #ebebeb;
    }
    &:nth-child(1) {
      border-bottom: 1px solid #ebebeb;
      border-top: 1px solid #ebebeb;
    }
  }

  .add-new-page-window {
    &--item--icon {
      display: none;
      &::after {
        display: none;
      }
    }
    &--item--icon.mobile.active {
      display: inline-block;
      position: relative;
      visibility: visible;
      &::before {
        content: url(@/assets/icons/clicked-ok-green.svg);
        position: absolute;
        right: -13px;
        top: -15px;
      }
    }
  }

  .list-main-wrapper--btn {
    // display: none;
    position: fixed;
  }
}
</style>
