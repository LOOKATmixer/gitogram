<template>
  <div class="comment">
    <p>
      <span class="comment__username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true,
      default: 'default username'
    },
    text: {
      type: String,
      required: true,
      default: 'default text'
    }
  }
}

</script>

<style src="./comment.scss" lang="scss" scoped></style>
