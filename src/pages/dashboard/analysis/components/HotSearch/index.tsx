import { Card } from 'antd'
import React from 'react'
import { WordCloud } from '@ant-design/charts'

import styles from './index.module.less'

export interface HotSearchProps {}

const data = [
  {
    name: '搜索',
    value: 123123,
  },
  {
    name: '搜索2',
    value: 1232123,
  },
]

const HotSearch: React.FC<HotSearchProps> = (props) => {
  return (
    <Card title="热门搜索">
      <WordCloud
        data={data}
        weightField="value"
        wordField="name"
        interactions={[
          {
            type: 'element-active',
          },
        ]}
        wordStyle={{
          fontSize: [24, 80],
        }}
        state={{
          active: {
            style: {
              lineWidth: 3,
            },
          },
        }}
      />
    </Card>
  )
}

export default HotSearch
