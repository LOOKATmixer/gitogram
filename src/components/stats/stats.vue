<template>
  <div class="stats">
    <div class="stats__container stats__border-right">
      <icon class="stats__icon" name="star"></icon>
      <div class="stats__name">Star</div>
    </div>
    <div class="stats__container stats__border-right">
      {{ stars }}
    </div>
    <div class="stats__container stats__border-right">
      <icon class="stats__icon" name="fork"></icon>
      <div class="stats__name">Fork</div>
    </div>
    <div class="stats__container">{{ forks }}</div>
  </div>
</template>

<script>
import icon from '../../icons/icon'

export default {
  name: 'stats',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true,
      default: 0
    },
    forks: {
      type: Number,
      required: true,
      default: 0
    }
  }
}

</script>

<style src="./stats.scss" lang="scss" scoped></style>
