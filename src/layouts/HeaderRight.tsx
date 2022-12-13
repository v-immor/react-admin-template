import { BellOutlined, GithubOutlined, LogoutOutlined, QuestionCircleOutlined, SettingOutlined, TranslationOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import React from 'react'

import styles from './HeaderRight.module.less'

export interface HeaderRightProps {}

const HeaderRight: React.FC<HeaderRightProps> = (props) => {
  return (
    <div className={styles['header-right']}>
      <div className={styles['header-right-item']}>
        <QuestionCircleOutlined title="帮助" />
      </div>
      <div className={styles['header-right-item']}>
        <BellOutlined />
      </div>
      <div className={styles['header-right-item']}>
        <Dropdown
          overlayClassName={styles['header-right-dropdown']}
          overlayStyle={{
            minWidth: 128,
          }}
          menu={{
            items: [
              {
                label: '个人中心',
                icon: <UserOutlined />,
                key: 'personal-center',
              },
              {
                label: '个人设置',
                icon: <SettingOutlined />,
                key: 'personal-setting',
              },
              {
                type: 'divider',
              },
              {
                label: '退出登录',
                icon: <LogoutOutlined />,
                key: 'logout',
              },
            ],
          }}
        >
          <div>user</div>
        </Dropdown>
      </div>
      <div className={styles['header-right-item']}>
        <TranslationOutlined />
      </div>
      <div className={styles['header-right-item']}>
        <GithubOutlined />
      </div>
    </div>
  )
}

export default HeaderRight
