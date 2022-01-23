import storyUserItem from './storyUserItem'

export default {
  title: 'StoryUserItem',
  components: { storyUserItem }
}

const template = () => ({
  components: { xStoryUserItem: storyUserItem },
  data () {
    return {}
  },
  template: `
    <x-storyUserItem></x-storyUserItem>
  `
})

export const DefaultView = template.bind({})
