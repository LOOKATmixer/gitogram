<template>
  <div class="card">
    <div class="card__title_wrap">
      <h2 class="card__title">{{ title }}</h2>
    </div>
    <div class="card__description_wrap">
      <p class="card__description">{{ description }}</p>
    </div>
    <div class="card__stats">
      <stats :stars="stars" :forks="forks"/>
    </div>
  </div>
</template>

<script>
import stats from '../../components/stats/stats'

export default {
  name: 'card',
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Card description'
    },
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

<style src="./card.scss" lang="scss" scoped></style>
