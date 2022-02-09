<template>
  <div class="toggler">
    <toggler @onToggle="toggle"/>
  </div>
  <div class="comments" v-if="shown">
    <ul class="comments__list">
        <template v-if="issues&& issues.length">
          <li class="comments__item" v-for="issue in issues" :key="issue.id">
            <comment
              :username="issue.user.login"
              :text="issue.body"
            />
          </li>
        </template>
      <placeholder v-else :paragraphs="2"/>
    </ul>
  </div>
</template>

<script>

import { toggler } from '../toggler'
import { comment } from '../comment'
import { placeholder } from '../placeholder'

export default {
  components: {
    toggler,
    comment,
    placeholder
  },
  data () {
    return {
      shown: false
    }
  },
  props: {
    issues: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ['loadIssues'],
  methods: {
    toggle (isOpened) {
      this.shown = isOpened

      if (isOpened && this.issues.length === 0) {
        this.$emit('loadIssues')
      }
    }
  }
}
</script>

<style src="./issues.scss" lang="scss" scoped></style>
