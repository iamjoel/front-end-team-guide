import { Input as AntInput} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
  title: '输入框',
  decorators: [withKnobs],
}

export const Basic = () => ({
    components: { AntInput },
    template: `
      <div>
        <ant-input />
      </div>
    `
})

export const Disable = () => ({
  components: { AntInput },
  props: {
    isDisabled: {
      default: boolean('是否禁用', true),
    }
  },
  template: `
    <div>
      <ant-input 
        :disabled="isDisabled"
      />
    </div>
  `
})


