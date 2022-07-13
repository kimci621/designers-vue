<template>
  <header class="header" :class="{ 'header-alternative': isActive }">
    <div class="container">
      <div class="row">
        <div class="header--wrapper f jc-sb">
          <div class="header--logo-nav-wrapper f">
            <button class="mobile-btn">
              <img src="@/assets/icons/mobile-btn.svg" alt="mobile button" />
            </button>
            <a href="/" class="header--logo">
              <img src="@/assets/icons/logo_cult_black.svg" alt="logo"
            /></a>
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
            </button>

            <a href="#" class="header--btns--item favorite-btn"
              ><img src="@/assets/icons/favorite.svg" alt="like"
            /></a>
            <a href="#" class="header--btns--item cart-btn">
              <img src="@/assets/icons/cart-black.svg" alt="cart"
            /></a>
            <a href="#" class="header--btns--item login-btn">
              <img src="@/assets/icons/cabinet.svg" alt="login icon" />
              <span>{{ loginLabel }}</span>
            </a>
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

.mobile-btn {
  display: none;
}

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
    display: inline-block;
    vertical-align: middle;
    width: 103px;
    height: 18px;
  }
  & .header--btns--item {
    font-weight: $navBtnsWeight;
    cursor: pointer;
    margin: 0 10px;
    img {
      width: 22px;
      height: 22px;
    }
    &.search-btn {
      border: none;
      background-color: transparent;
      margin: 0 10px;
      padding: 0;
      img {
        width: 26px;
        height: 26px;
      }
    }

    &.favorite-btn {
      img {
        height: 20px;
      }
    }

    &.login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: inline-block;
      }
      span {
        margin-left: 11.5px;
      }
    }
  }
  & .header--nav--list--item {
    padding: 10px 0;
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
    line-height: 19px;
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

.header-alternative {
  height: 100px;
  border-bottom: 1px solid #ebebeb;
  .container,
  .row {
    height: 100%;
  }
}

.mobile-btn {
  border: none;
  background-color: transparent;
  img {
    width: 30px;
    height: 30px;
  }
}

@media (max-width: 900px) {
  .header--wrapper {
    margin: 0 15px;
  }
}

@media (max-width: 850px) {
  .login-btn span {
    display: none;
  }
}

@media (max-width: 800px) {
  .header--nav--list--item {
    display: none;
  }

  .header--wrapper {
    display: flex;
    justify-content: space-between;
  }

  .mobile-btn {
    display: inline-block;
    vertical-align: middle;
  }

  .header--wrapper {
    margin: 0 5px;
    position: relative;
  }

  .header--logo {
    order: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .search-btn {
    position: absolute;
    left: 40px;
  }

  .header {
    height: 70px;
  }
}
</style>
