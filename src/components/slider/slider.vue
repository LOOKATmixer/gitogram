<template>
  <div class="stories__container" ref="slider">
    <ul class="stories__list" ref="item">
      <li class="stories__list_item"
          v-for="(trending, ndx) in getUnstarredOnly"
          :key="trending.id">
        <slide
          :data="getStoryData(trending)"
          :active="slideNdx === ndx"
          :loading="slideNdx === ndx && loading"
          :btnsShown="activeBtns"
          @onNextSlide="handleSlide(ndx + 1)"
          @onPrevSlide="handleSlide(ndx - 1)"
          @onProgressFinish="handleSlide(ndx + 1)"
          @onFollow="starRepo(trending.id)"
          @onUnFollow="unStarRepo(trending.id)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
import slide from '../../components/slide/slide'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'slider',
  components: {
    slide
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  emits: ['goToMain'],
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    ...mapGetters(['getUnstarredOnly']),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const {
        id,
        owner,
        name
      } = this.trendings[this.slideNdx]
      await this.fetchReadme({
        id,
        owner: owner.login,
        repo: name
      })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    moveSlider (slideNdx) {
      const {
        slider,
        item
      } = this.$refs
      const slideWidth = getComputedStyle(item).getPropertyValue('width')
      this.slideNdx = slideNdx
      this.sliderPosition = parseInt(slideWidth) / 10 * parseInt(slideNdx)
      slider.style.transform = `translateX(-${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      if (slideNdx < this.trendings.length) {
        this.moveSlider(slideNdx)
        await this.loadReadme()
      } else {
        this.$emit('goToMain')
      }
    }
  },
  async mounted () {
    await this.fetchTrendings()
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.loadReadme()
  }
}
</script>

<style src="./slider.scss" lang="scss" scoped></style>
