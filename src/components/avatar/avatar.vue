<template>
  <div class="avatar">
    <img :src="avatar" class="img" alt="avatar">
  </div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/200/200'
    }
  }
}

</script>

<style src="./avatar.scss" lang="scss" scoped></style>
