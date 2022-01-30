<template>
  <div class="stories">
    <div class="g-container">
      <header class="header">
        <button class="logo" @click="$router.push({ name: 'Main' })">
          <logo />
        </button>
        <button class="close__btn" @click="$router.push({ name: 'Main' })">
          <icon name="close" class="icon"/>
        </button>
      </header>
    </div>
    <div class="stories__content">
      <slider :initialSlide="Number($route.params.initialSlide)"/>
    </div>
  </div>
</template>

<script>
import logo from '../../components/logo/logo'
import { icon } from '../../icons/'
import slider from '../../components/slider/slider'

export default {
  name: 'stories',
  components: {
    logo,
    icon,
    slider
  }
}
</script>

<style lang="scss" scoped src="./stories.scss">

</style>
