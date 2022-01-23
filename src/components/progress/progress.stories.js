import progress from './progress'

export default {
  title: 'Progress',
  components: { progress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: { xProgress: progress },
  data () {
    return { args }
  },
  template: `
   <x-progress @onFinish="args.onFinish" />
  `
})

export const DefaultView = template.bind({})
