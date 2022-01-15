<template>
  <nav class="nav">
    <a href="/" class="icon">
      <icon name="home"/>
    </a>
    <a href="/" class="avatar">
      <avatar :avatar="avatar"/>
    </a>
    <a href="#!" class="icon">
      <icon name="logout"/>
    </a>
  </nav>
</template>

<script>
import { icon } from '../../icons'
import avatar from '@/components/avatar/avatar'

export default {
  name: 'navigation',
  components: {
    icon,
    avatar
  },
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/200/200'
    }
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
