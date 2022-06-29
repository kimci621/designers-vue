<template>
  <ul class="add-new-page-window" v-if="visible">
    <li
      class="add-new-page-window--item"
      v-for="i in listItems"
      @click="$emit('postValue', true)"
      @mouseover="$emit('postValue', true)"
    >
      <!-- @mouseleave="delay" -->
      {{ i }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "AddNewPageCategoryWindow",
  props: {
    listItems: Array,
    visible: Boolean,
  },
  data() {
    return {
      isLogin: Boolean,
    };
  },
  methods: {
    loginTrigger() {
      this.isLogin = !this.isLogin;
    },
  },
  computed: {
    loginLabel() {
      return this.isLogin ? "Name" : "Войти";
    },
  },
  methods: {
    delay() {
      setTimeout(() => {
        this.$emit("postValue", false);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
$bg-active: #f9f9f9;

.add-new-page-window {
  background-color: #fff;
  width: calc(100% / 3);
  height: 380px;
  padding: 24px 0 24px 16px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #eee;
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
    color: $pink;
  }
  &:hover {
    background-color: $bg-active;
  }
  // scrollbar
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
    background: #e41e4e;
  }
  &::-webkit-scrollbar-track-piece {
    /* - видимая часть трека */
    width: 1px;
    border-radius: 5px;
    background: #000000;
  }
}
</style>
