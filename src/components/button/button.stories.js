import button from './button'

export default {
  title: 'Button',
  components: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
   <x-button v-bind="args" theme="green">Following</x-button>
  `
})

export const DefaultView = template.bind({})

DefaultView.args = {
  hoverText: 'Unfollow'
}
