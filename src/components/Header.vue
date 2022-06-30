<template>
  <header class="header" :class="{ 'header-alternative': isActive }">
    <div class="container">
      <div class="row">
        <div class="header--wrapper f jc-sb">
          <div class="header--logo-nav-wrapper f">
            <a href="/" class="header--logo"></a>
            <nav class="header--nav">
              <ul class="header--nav--list f" v-if="activeTopList">
                <li class="header--nav--list--item light">
                  <a href="#">Пара слов о Cult</a>
                </li>
                <li class="header--nav--list--item light">
                  <a href="#">Сотрудничество</a>
                </li>
              </ul>
              <ul class="header--nav--list f">
                <li class="header--nav--list--item pink">
                  <a class="hover-underline-animation" href="#">Женщины</a>
                </li>
                <li class="header--nav--list--item pink">
                  <a class="hover-underline-animation" href="#">Мужчины</a>
                </li>
                <li class="header--nav--list--item pink">
                  <a class="hover-underline-animation" href="#">Дети</a>
                </li>
                <li class="header--nav--list--item pink">
                  <a class="hover-underline-animation" href="#">Дизайнеры</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="header--btns f">
            <button type="button" class="header--btns--item search-btn">
              <img src="@/assets/icons/search.svg" alt="search icon" />
              <span>Найти...</span>
            </button>

            <a href="#" class="header--btns--item favorite-btn"></a>
            <a href="#" class="header--btns--item cart-btn"></a>
            <a href="#" class="header--btns--item login-btn">
              <img src="@/assets/icons/cabinet.svg" alt="login icon" />
              <span>{{ loginLabel }}</span>
            </a>
            <a href="#" class="header--btns--item leave-btn" v-if="isLogin">
            <img src="@/assets/icons/leave.svg" alt="leave page icon"></a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    activeTopList: Boolean,
    isActive: Boolean,
  },
  data() {
    return {
      isLogin: true,
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
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/media-mixins.scss";

.header {
  &--wrapper {
    margin: 0 auto;
    width: 100%;
    align-items: center;
  }
  .header--nav {
    margin-left: 10px;
  }
  & .header--logo {
    width: 142px;
    height: 40px;
    margin: 5px 0;
    background-image: url(@/assets/icons/logo_cult_black.svg);
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
  }
  & .header--btns--item {
    background-repeat: no-repeat;
    background-position: center;
    font-weight: $navBtnsWeight;
    cursor: pointer;
    &.search-btn {
      margin-right: 20px;
      border: none;
      background-color: transparent;
      padding: 6px 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: inline-block;
        height: 19.9px;
      }
      span {
        margin-left: 8px;
      }
    }
    &.favorite-btn {
      margin: 6px 12px;
      width: 24px;
      height: 24px;
      background-image: url(@/assets/icons/favorite.svg);
    }
    &.cart-btn {
      margin: 6px 12px;
      width: 24px;
      height: 24px;
      background-image: url(@/assets/icons/cart-black.svg);
    }
    &.login-btn {
      padding: 6px 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: inline-block;
        height: 19.9px;
      }
      span {
        margin-left: 8px;
      }
    }

    &.leave-btn {
      width: 24px;
      height: 19.2px;
    }
  }
  & .header--nav--list--item {
    padding: 9.6px 0;
    margin: 16px;
  }
  & .header--nav--list--item.light {
    margin: 14px 15px;
  }
  & .header--logo-nav-wrapper,
  .header--btns {
    align-items: center;
  }
  & .logo-nav {
    margin-left: 36px;
  }
  & .header--nav--list--item {
    transition: all 0.3s ease-in-out;
    font-size: $navSize;
    font-weight: $navWeight;
    &.light {
      opacity: 0.5;
    }
    &.light:hover {
      opacity: 1;
    }

    .hover-underline-animation {
      display: inline-block;
      position: relative;
      color: $black;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: $pink;
        transform-origin: center;
        transition: transform 0.3s ease-out;
      }
      &:hover {
        color: $pink;
        &:after {
          transform: scaleX(1);
          transform-origin: center;
        }
      }
    }
  }
}

.header--wrapper {
  @include not-desktop {
    margin: 0 36.8px;
  }
}

.header-alternative{
  height: 100px;
  border-bottom: 1px solid #ebebeb;
  .container, .row{
    height: 100%;
  }
}
</style>
