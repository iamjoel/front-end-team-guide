import { addParameters, addDecorator } from '@storybook/vue'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import centered from '@storybook/addon-centered/vue'

addDecorator(centered)

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS, // 默认是  MINIMAL_VIEWPORTS
      kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
          width: '600px',
          height: '963px',
        },
      },
    },
    defaultViewport: 'responsive'
  },
  backgrounds: [
    { name: 'twitter', value: '#00aced', default: true },
    { name: 'facebook', value: '#3b5998' },
  ],
  // doc 配置
  docs: {
    inlineStories: true,
    iframeHeight: '60px',
  },
})


