<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: "Input",
  props: ["placeholder"],
};
</script>

<style scoped lang="scss">
input {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
  padding: 12px 48px;
  border: 1px solid #a6a6a6;
  border-radius: 24px;
  background: transparent;
  transition: box-shadow 0.3s;
  margin-bottom: 20px;
  &:focus{
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(220,53,69,.25);
  }
}
</style>
