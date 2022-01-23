import navigation from './navigation'

export default {
  title: 'Navigation',
  components: { navigation }
}

const template = () => ({
  components: { xNavigation: navigation },
  data () {
    return {}
  },
  template: `
    <x-navigation></x-navigation>
  `
})

export const DefaultView = template.bind({})
