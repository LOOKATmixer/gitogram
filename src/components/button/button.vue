<template>
  <button :class="['button', theme, { 'hover-text': withHoverText }]" :data-hover-text="hoverText">
  <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    hoverText: {
      type: String
    },
    theme: {
      type: String
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}

</script>

<style src="./button.scss" lang="scss" scoped></style>
