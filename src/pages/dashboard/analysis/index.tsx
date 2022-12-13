import React from 'react'
import { Card, Col, Row, Space } from 'antd'
import QuotaRow from './components/QuotaRow'
import RateRow from './components/RateRow'

import styles from './index.module.less'
import HotSearch from './components/HotSearch'

function Page() {
  return (
    <Space className="pt-6 flex" direction="vertical" size={[24, 24]}>
      <QuotaRow />
      <RateRow />
      <Row gutter={[24, 24]}>
        <Col md={12} xs={24}>
          <HotSearch />
        </Col>
        <Col md={12} xs={24}>
          <Card title="占位"> ddd</Card>
        </Col>
      </Row>

      <Card title="热力地图">地图</Card>
    </Space>
  )
}

export default Page
