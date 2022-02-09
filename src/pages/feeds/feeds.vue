<template>
  <div class="topline">
    <topline>
      <template #headline>
        <logo class="logo"/>
        <navigation :avatar="user.avatar_url"/>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item"
              v-for="{ id, owner } in getUnstarredOnly" :key="id"
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
      <li v-for="item in starred" :key="item.id" class="posts__item">
        <post
          :name="item.owner.login"
          :avatar="item.owner.avatar_url"
          :issues="item.issues"
          :postDate="item.created_at"
          @getIssues="getIssues({
                id: item.id,
                owner: item.owner.login,
                repo: item.name })"
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

import { mapState, mapGetters, mapActions } from 'vuex'

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
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      user: state => state.user.data,
      starred: state => state.starred.starred
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  emits: ['getIssues'],
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      getUser: 'user/getUser',
      getStarred: 'starred/getStarred',
      getIssues: 'starred/getIssues'
    }),
    handlePress () {
    }
  },
  async created () {
    await this.getUser()
  },
  async mounted () {
    await this.fetchTrendings()
    await this.getStarred()
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss">

</style>
