<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo/>
        <navigation/>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @click="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="g-container posts-container">
    <ul class="posts__list">
      <li v-for="(item, ndx) in 3" :key="ndx" class="posts__item">
        <post>
          <template #card>
            <card></card>
          </template>
        </post>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import StoryUserItem from '@/components/storyUserItem/storyUserItem'
import logo from '@/components/logo/logo'
import navigation from '@/components/navigation/navigation'
import post from '@/components/post/post'
import card from '@/components/card/card'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    StoryUserItem,
    topline,
    logo,
    navigation,
    post,
    card
  },
  data () {
    return {
      stories
    }
  },
  methods: {
    handlePress () {
      console.log('click')
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">

</style>
