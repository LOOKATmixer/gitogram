<template>
  <div class="slide" :class="{ active }">
    <div class="slide__header">
      <Progress :active-line="active" @onFinish="$emit('onProgressFinish')" />
      <User
        :name="data.username"
        :avatar="data.userAvatar"
      />
    </div>
    <div class="slide__content">
      <div class="preloader" v-if="loading">
        <preloader/>
      </div>
      <div class="slide__content_container" v-else>
        <div class="slide__content_text" v-html="data.content" v-if="data.content?.length"></div>
        <placeholder v-else :paragraphs="2"/>
      </div>
    </div>
    <div class="slide__footer">
      <Button>Follow</Button>
    </div>
    <template v-if="active">
      <button
        @click="$emit('onNextSlide')"
        v-if="btnsShown.includes('next')" class="btn btn__next">
        <icon class="icon" name="arrow"/>
      </button>
      <button
        @click="$emit('onPrevSlide')"
        v-if="btnsShown.includes('prev')" class="btn btn__prev"
      >
        <icon class="icon" name="arrow"/>
      </button>
    </template>
  </div>
</template>

<script>
import Progress from '../progress/progress'
import User from '../user/user'
import Button from '../button/button'
import preloader from '../preloader/preloader'
import placeholder from '../placeholder/placeholder'
import { icon } from '../../icons'

export default {
  name: 'slide',
  components: {
    Progress,
    Button,
    User,
    preloader,
    placeholder,
    icon
  },
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  emits: ['onNextSlide', 'onPrevSlide', 'onProgressFinish']
}
</script>

<style src="./slide.scss" lang="scss" scoped></style>
