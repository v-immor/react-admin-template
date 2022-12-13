import React from 'react'
import { Button, Space } from 'antd'
import { CopyrightOutlined, GithubOutlined } from '@ant-design/icons'

import styles from './Footer.module.less'
import classNames from 'classnames'

export interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className={classNames(styles.footer, props.className)}>
      <Space>
        <Button type="link" href="https://ant.design/index-cn">
          ant design
        </Button>
        <Button type="link" href="#">
          <GithubOutlined />
        </Button>
        <Button type="link" href="https://tanstack.com/query/v4">
          react-query
        </Button>
      </Space>
      <div className={styles.copyright}>
        <Space>
          <CopyrightOutlined />
          react admin antd template
        </Space>
      </div>
    </footer>
  )
}

export default Footer
