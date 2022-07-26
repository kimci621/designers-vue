<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: ["name"],
};
</script>

<style scoped lang="scss">
button {
  padding: 12px 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  border: none;
  background: #EBEBEB;
  transition: filter 0.3s;
  cursor: pointer;
  border-radius: .25rem;
  margin-right: 25px;
  &:hover{
    filter: drop-shadow(0 8px 16px rgba(0,0,0,.2));
  }
}
</style>
