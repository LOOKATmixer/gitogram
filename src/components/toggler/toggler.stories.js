import toggler from './toggler'

export default {
  title: 'Toggler',
  component: { toggler }
}

const template = () => ({
  components: { xToggler: toggler },
  template: `
   <x-toggler />
  `
})

export const DefaultView = template.bind({})
