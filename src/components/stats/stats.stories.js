import stats from './stats'

export default {
  title: 'Stats',
  components: { stats }
}

const template = () => ({
  components: { xStats: stats },
  data () {
    return {}
  },
  template: `
    <x-stats></x-stats>
  `
})

export const DefaultView = template.bind({})
