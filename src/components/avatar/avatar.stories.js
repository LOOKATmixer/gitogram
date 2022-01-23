import avatar from './avatar'

export default {
  title: 'Avatar',
  components: { avatar }
}

const template = () => ({
  components: { xAvatar: avatar },
  template: `
   <x-avatar></x-avatar>
  `
})

export const DefaultView = template.bind({})
