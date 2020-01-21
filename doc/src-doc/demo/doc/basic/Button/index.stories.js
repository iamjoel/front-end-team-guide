import { Button as AntButton} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import doc from './README.md'

import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
  title: '按钮',
  decorators: [withKnobs],
  component: AntButton,
  parameters: {
    componentSubtitle: '代码片段快捷键： ant-btn-(type:[primary|danger|default|link)',
    notes: doc,

  },
}

export const Type = () => ({
    components: { AntButton },
    props: {
      type: {
        default: select('类型', {
          '主要': 'primary',
          '危险': 'danger',
          '默认': 'default',
          '幽灵': 'link'
        }, 'default'),
      }
    },
    methods: {
      handleClick() {
        action('clicked')
      }
    },
    template: `
      <div>
        <ant-button 
          @click="handleClick"
          :type="type">
          类型切换
        </ant-button>
        <ant-button 
          v-for="(item, i) in ['primary', 'danger', 'link']" :key="item"
          :type="item"
        >
          {{item}}
        </ant-button>
      </div>
    `
})


export const Disabled = () => ({
    components: { AntButton },
    props: {
      isDisabled: {
        default: boolean('是否禁用', false),
      }
    },
    template: `
      <div>
        <ant-button 
          type="primary"
          :disabled="isDisabled"
        >
          {{isDisabled ? '' : '非'}}禁用按钮
        </ant-button>
        <ant-button 
          type="primary"
          disabled
        >
          禁用按钮
        </ant-button>
      </div>
    `
});
