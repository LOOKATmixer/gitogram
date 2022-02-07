<template>
  <nav class="nav">
    <button class="icon" @click="$router.push({ name: 'Main' })">
      <icon name="home"/>
    </button>
    <button class="avatar">
      <avatar :avatar="avatar"/>
    </button>
    <button class="icon" @click="logout">
      <icon name="logout"/>
    </button>
  </nav>
</template>

<script>
import { icon } from '../../icons'
import avatar from '../../components/avatar/avatar'

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
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'Auth' })
      window.location.reload()
    }
  }
}
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
