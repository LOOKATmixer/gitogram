import slide from './slide'

export default {
  title: 'Slide',
  components: { slide }
}

const template = () => ({
  components: { xSlide: slide },
  data () {
    return {}
  },
  template: `
    <x-slide></x-slide>
  `
})

export const DefaultView = template.bind({})
