<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo class="logo"/>
        <navigation/>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="{ id, owner } in items" :key="id"
              @click="$router.push({ name: 'Stories', params: { initialSlide: id } })">
            <story-user-item
              :avatar="owner.avatar_url"
              :username="owner.login"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
  <div class="g-container posts-container">
    <ul class="posts__list">
      <li v-for="item in items" :key="item.id" class="posts__item">
        <post
          :name="item.owner.login"
          :avatar="item.owner.avatar_url"
          :repo-id="item.id"
          :issues="item.issues"
          :repo="item.name"
          :owner="item.owner.login"
        >
          <template #card>
            <card
              :title="item.name"
              :description="item.description || ''"
              :stars="item.stargazers_count"
              :forks="item.forks_count"
            ></card>
          </template>
        </post>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import StoryUserItem from '@/components/storyUserItem/storyUserItem'
import logo from '@/components/logo/logo'
import navigation from '@/components/navigation/navigation'
import post from '@/components/post/post'
import card from '@/components/card/card'

import * as api from '@/api'

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
      items: []
    }
  },
  methods: {
    handlePress () {}
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">

</style>
