import Media from '../../src/media/Index'

export default {
  title: 'Media'
}

export const Basic = () => ({
  components: { Media },
  template: `
    <Media>
     content...
    </Media>
  `
})
