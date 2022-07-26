<template>
  <div class="second-page--content">
    <h3 class="if-hard-title">
      Если у вас возникли трудности, почитайте <a href="#">памятку</a> по
      заполнению товара.
    </h3>
    <TitleComponent title="Категория"></TitleComponent>
    <BreadCrumb :newItemData="newItemData"></BreadCrumb>

    <TitleComponent title="Название товара"></TitleComponent>
    <InputComponent placeholder="Название:"></InputComponent>

    <TitleComponent title="Артикул"></TitleComponent>
    <InputComponent placeholder="Артикул:"></InputComponent>

    <TitleComponent
      title="Товар изготавливается по предзаказу"
    ></TitleComponent>
    <InputComponent placeholder="Срок изготовления:"></InputComponent>
    <InputComponent placeholder="Количество изделий:"></InputComponent>

    <TitleComponent title="Видео"></TitleComponent>
    <VideoComponent></VideoComponent>

    <TitleComponent title="Фотографии"></TitleComponent>
    <PhotoComponent></PhotoComponent>

    <TitleComponent title="Цена"></TitleComponent>
    <InputComponent placeholder="Цена:"></InputComponent>
    <InputComponent placeholder="НДС:"></InputComponent>

    <TitleComponent title="Размер"></TitleComponent>

    <TitleComponent title="Цвет"></TitleComponent>

    <TitleComponent title="Состав"></TitleComponent>
    <TextareaComponent></TextareaComponent>

    <TitleComponent title="Страна производитель"></TitleComponent>

    <TitleComponent title="Сезон"></TitleComponent>

    <TitleComponent title="Стиль"></TitleComponent>
    <InputComponent placeholder="Стиль:"></InputComponent>

    <TitleComponent title="Вид застежки"></TitleComponent>

    <TitleComponent title="Текстовое описание товара"></TitleComponent>
    <TextareaComponent></TextareaComponent>

    <TitleComponent title="Вес"></TitleComponent>
    <InputComponent placeholder="Вес:"></InputComponent>

    <TitleComponent title="Длина"></TitleComponent>
    <InputComponent placeholder="Длина:"></InputComponent>

    <TitleComponent title="Ширина"></TitleComponent>
    <InputComponent placeholder="Ширина:"></InputComponent>

    <TitleComponent title="Высота"></TitleComponent>
    <InputComponent placeholder="Высота:"></InputComponent>

    <TitleComponent title="Настройка возрастного ограничения"></TitleComponent>

    <TitleComponent title="Настройка видимости товара"></TitleComponent>

    <BtnComponent name="Сохранить"></BtnComponent>
    <BtnComponent name="Сохранить и добавить еще"></BtnComponent>
    <BtnComponent name="Отменить"></BtnComponent>
  </div>
</template>

<script>
import Btn from "@/components/AddNewSecondPageComponents/SecondPageBtn.vue";
import Input from "@/components/AddNewSecondPageComponents/SecondPageInput.vue";
import Title from "@/components/AddNewSecondPageComponents/SecondPageInputTitle.vue";
import Photo from "@/components/AddNewSecondPageComponents/SecondPagePhoto.vue";
import Video from "@/components/AddNewSecondPageComponents/SecondPageVideo.vue";
import Textarea from "@/components/AddNewSecondPageComponents/SecondPageTextArea.vue";
import BreadCrumbs from "@/components/AddNewSecondPageComponents/SecondPageFIrstCategoriesBreadCrumbs.vue";

export default {
  name: "AddNewPageSecondPage",
  props: ["newItemData"],
  components: {
    BtnComponent: Btn,
    InputComponent: Input,
    TitleComponent: Title,
    PhotoComponent: Photo,
    VideoComponent: Video,
    TextareaComponent: Textarea,
    BreadCrumb: BreadCrumbs,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.if-hard-title {
  font-size: 17px;
  font-weight: 400;
  margin: 10px 0 50px 0;
  a {
    color: $pink;
    text-decoration: underline;
    transition: all 0.2s ease-in-out;
    &:hover{
      font-weight: 700;
    }
  }
  &::before{
    content: url(@/assets/icons/warning.svg);
    width: 24px;
    height: 24px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }
}
</style>
