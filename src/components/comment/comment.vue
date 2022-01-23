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
      default: 'username'
    },
    text: {
      type: String,
      default: 'comment text'
    }
  }
}

</script>

<style src="./comment.scss" lang="scss" scoped></style>
