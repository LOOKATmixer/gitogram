<template>
  <ul class="placeholder" v-for="paragraph of paragraphs" :key="paragraph">
    <li class="placeholder__row" v-for="row in (rows || 3)" :key="row"/>
  </ul>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    paragraphs: Number,
    rows: Number
  }
}
</script>

<style src="./placeholder.scss" lang="scss" scoped></style>
