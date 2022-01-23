import topline from './topline'

export default {
  title: 'Topline',
  components: { topline }
}

const template = () => ({
  components: { xTopline: topline },
  data () {
    return {}
  },
  template: `
    <x-topline></x-topline>
  `
})

export const DefaultView = template.bind({})
