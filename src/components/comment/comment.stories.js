import comment from './comment'

export default {
  title: 'Comment',
  component: { comment }
}

const template = () => ({
  components: { xComment: comment },
  template: `
   <x-comment />
  `
})

export const DefaultView = template.bind({})
