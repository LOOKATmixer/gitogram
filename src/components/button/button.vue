<template>
  <button :class="['button', theme == 'green' ? 'green' : 'grey', {loading, disabled}]">
    <preloader v-if="loading" class="button__preloader"/>
    <slot v-if="!loading"></slot>
  </button>
</template>

<script>
import preloader from '../../components/preloader/preloader'

export default {
  name: 'Button',
  components: {
    preloader
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'green'
    }
  }
}

</script>

<style src="./button.scss" lang="scss" scoped></style>
