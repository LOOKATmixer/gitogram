<template>
  <div class="post">
    <div class="post__user">
      <user :name="name" :avatar="avatar"/>
    </div>
    <div class="post__card">
      <slot name="card"></slot>
    </div>
    <div class="toggler">
      <toggler @onToggle="toggleClick"/>
    </div>
    <div v-if="showComment">
      <div v-if="issues.loading">
        <Placeholder :rows="1"/>
      </div>
      <ul v-else-if="issues.length" class="post__comments comments_list">
        <li class="comment__item" v-for="item in issues" :key="item.id">
          <comment :username="item.user.login" :text="item.body" @loadIssues="$emit('getIssues')"/>
        </li>
      </ul>
    </div>
  </div>
  <div class="post__date">
    {{ postDate }}
  </div>
</template>

<script>
import user from '../../components/user/user'
import toggler from '../../components/toggler/toggler'
import comment from '../../components/comment/comment'
import Placeholder from '@/components/placeholder/placeholder'

export default {
  name: 'post',
  components: {
    Placeholder,
    user,
    toggler,
    comment
  },
  data () {
    return {
      showComment: false,
      currentId: ''
    }
  },
  props: {
    name: {
      type: String
    },
    avatar: {
      type: String
    },
    hasIssues: {
      type: Boolean,
      default: false
    },
    issues: {
      type: Array,
      default: () => []
    },
    username: {
      type: String
    },
    text: {
      type: String
    },
    postDate: {
      type: String
    },
    repoIs: {
      type: Number
    }
  },
  emits: ['loadIssues'],
  methods: {
    toggleClick (state) {
      this.showComment = state
      this.$emit('loadIssues')
    }
  }
}
</script>

<style src="./post.scss" lang="scss" scoped></style>
