<template>
  <div class="post">
    <div class="post__user">
      <user :name="name" :avatar="avatar"/>
    </div>
    <div class="post__card">
      <slot name="card"></slot>
    </div>
    <div class="issues">
      <issues :issues="issues" @loadIssues="$emit('getIssues')" />
    </div>
  </div>
  <div class="post__date">
    {{ postDate }}
  </div>
</template>

<script>
import user from '../../components/user/user'
import issues from '../../components/issues/issues'

export default {
  name: 'post',
  components: {
    user,
    issues
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
    }
  },
  emits: ['getIssues']
}
</script>

<style src="./post.scss" lang="scss" scoped></style>
