<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="icon">
          <icon name="home" />
        </div>
      </template>
      <template #content>
        <div>Content</div>
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'

export default {
  name: 'feeds',
  components: {
    icon,
    topline
  }
}
</script>

<style lang="scss" scoped>
.icon {
  color: red;
  width: 50px;
}
</style>
