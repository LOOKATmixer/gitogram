import card from './card'

export default {
  title: 'Card',
  components: { card }
}

const template = () => ({
  components: { xCard: card },
  data () {
    return {}
  },
  template: `
    <x-card></x-card>
  `
})

export const DefaultView = template.bind({})
