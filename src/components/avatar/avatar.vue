<template>
  <div class="avatar">
    <img :src="avatar" class="img" alt="avatar">
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    }
  }
}

</script>

<style src="./avatar.scss" lang="scss" scoped></style>
