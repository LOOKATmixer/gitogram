<template>
  <div class="slide">
    <div class="slide__header">
      <Progress/>
      <User/>
    </div>
    <div class="slide__content">
      Some text
    </div>
    <div class="slide__footer">
      <Button>Follow</Button>
    </div>
  </div>
</template>

<script>
import Progress from '../progress/progress'
import User from '../user/user'
import Button from '../button/button'

export default {
  name: 'slide',
  components: {
    Progress,
    Button,
    User
  },
  props: {}
}
</script>

<style src="./slide.scss" lang="scss" scoped></style>
