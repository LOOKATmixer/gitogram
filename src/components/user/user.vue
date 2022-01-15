<template>
  <div class="user__container">
    <div class="user">
      <avatar class="user__avatar" :avatar="avatar"/>
    </div>
    <div class="user__name">{{ name }}</div>
  </div>
</template>

<script>
import avatar from '@/components/avatar/avatar'

export default {
  name: 'user',
  components: {
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/200/200'
    },
    name: {
      type: String,
      required: true,
      default: 'John Galt'
    }
  }
}

</script>

<style src="./user.scss" lang="scss" scoped></style>
