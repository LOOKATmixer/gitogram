import logo from './logo'

export default {
  title: 'Logo',
  component: { logo }
}

const template = () => ({
  components: { xLogo: logo },
  template: `
   <x-logo />
  `
})

export const DefaultView = template.bind({})
