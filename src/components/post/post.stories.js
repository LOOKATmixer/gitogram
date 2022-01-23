import post from './post'

export default {
  title: 'Post',
  components: { post }
}

const template = () => ({
  components: { xPost: post },
  data () {
    return {}
  },
  template: `
    <x-post></x-post>
  `
})

export const DefaultView = template.bind({})
