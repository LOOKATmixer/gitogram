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
    <div v-if="has_issues=true">
      <div v-if="showComment">
        <ul class="post__comments comments_list">
          <li class="comment__item" v-for="item in issues.data" :key="item">
            <comment :username="item.user.login" :text="item.body"/>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>No questions</div>
  </div>
  <div class="post__date">
    15 JANUARY
  </div>
</template>

<script>
import user from '../../components/user/user'
import toggler from '../../components/toggler/toggler'
import comment from '../../components/comment/comment'

export default {
  name: 'post',
  components: {
    user,
    toggler,
    comment
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
    }
  },
  data () {
    return {
      showComment: false
    }
  },
  methods: {
    toggleClick (state) {
      this.showComment = state
    }
  }
}

</script>

<style src="./post.scss" lang="scss" scoped></style>
