import user from './user'

export default {
  title: 'User',
  components: { user }
}

const template = () => ({
  components: { xUser: user },
  data () {
    return {}
  },
  template: `
    <x-user></x-user>
  `
})

export const DefaultView = template.bind({})
