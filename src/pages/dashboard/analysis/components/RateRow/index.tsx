import { Card, Row, Statistic } from 'antd'
import React from 'react'
import { Column } from '@ant-design/charts'
import FastTimePicker from '@components/FastTimePicker'

import styles from './index.module.less'

export interface RateRowProps {}

const data = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
]

const topData = Array.from({ length: 10 }, (_, idx) => ({
  name: `东风路${idx + 1}店`,
  sales: 10086,
}))

const RateRow: React.FC<RateRowProps> = (props) => {
  return (
    <Card
      className={styles['rate-row']}
      title={
        <div className="flex justify-between items-center">
          <span className="font-bold">销售额</span>
          <FastTimePicker />
        </div>
      }
    >
      <div className="flex">
        <Column
          className="flex-1"
          data={data}
          xField="type"
          yField="sales"
          meta={{
            type: {
              alias: '类别',
            },
            sales: {
              alias: '销售额',
            },
          }}
        />
        <div className={styles['top10']}>
          <span className="py-2 px-4 font-bold">排行榜</span>
          <ul className={styles['top10-list']}>
            {topData.map((val, idx) => (
              <li key={val.name} className="px-3">
                <div className={styles['top10-item']}>
                  <label>{idx + 1}</label>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="ml-2">{val.name}</span>
                    <Statistic className="ml-2 font-normal text-sm" value={val.sales} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default RateRow
