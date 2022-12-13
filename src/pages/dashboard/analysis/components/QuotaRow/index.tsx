import { Progress } from '@ant-design/charts'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Card, Col, Row, Statistic, Tooltip } from 'antd'
import React from 'react'

import styles from './index.module.less'
import MiniArea from './MiniArea'
import MiniColumn from './MiniColumn'

export interface QuotaProps {}

const mock = [264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539, 243, 226, 192]

const QuotaRow: React.FC<QuotaProps> = (props) => {
  return (
    <Row className={styles['quota-row']} gutter={[12, 12]}>
      <Col lg={6} md={12} xs={24}>
        <Card className={styles['quota-card']}>
          <div className={styles.title}>
            <span>总销售额</span>
            <Tooltip title="指标">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div className={styles.total}>
            <Statistic prefix="￥" value={123123} />
          </div>
          <div className={styles['quota-card-rate']}>
            <div>
              <label>周同比</label>
              <span>11</span>
            </div>
            <div>
              <label>日同比</label>
              <span>11</span>
            </div>
          </div>

          <div className={styles['quota-card-footer']}>
            <label>日销售额</label>
            <span>￥1231</span>
          </div>
        </Card>
      </Col>

      <Col lg={6} md={12} xs={24}>
        <Card className={styles['quota-card']}>
          <div className={styles.title}>
            <span>访问量</span>
            <Tooltip title="指标">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div className={styles.total}>
            <Statistic value={123123} />
          </div>

          <MiniArea data={mock} />

          <div className={styles['quota-card-footer']}>
            <label>日访问量</label>
            <span>1231</span>
          </div>
        </Card>
      </Col>

      <Col lg={6} md={12} xs={24}>
        <Card className={styles['quota-card']}>
          <div className={styles.title}>
            <span>支付笔数</span>
            <Tooltip title="指标">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div className={styles.total}>
            <Statistic value={123123} />
          </div>

          <MiniColumn data={mock} />

          <div className={styles['quota-card-footer']}>
            <label>转化率</label>
            <span>￥1231</span>
          </div>
        </Card>
      </Col>

      <Col lg={6} md={12} xs={24}>
        <Card className={styles['quota-card']}>
          <div className={styles.title}>
            <span>运营活动效果</span>
            <Tooltip title="指标">
              <QuestionCircleOutlined />
            </Tooltip>
          </div>
          <div className={styles.total}>
            <span>78%</span>
          </div>

          <Progress className="mt-3" autoFit percent={0.78} height={30} barWidthRatio={0.2} color={['#5B8FF9', '#E8EDF3']} />

          <div className={styles['quota-card-footer']}>
            <div>
              <label>周同比</label>
              <span>11</span>
            </div>
            <div>
              <label>日同比</label>
              <span>11</span>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default QuotaRow
