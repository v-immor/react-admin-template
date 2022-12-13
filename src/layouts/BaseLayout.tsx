import React, { useMemo, useState } from 'react'
import { Layout, Menu } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CoffeeOutlined, DashboardOutlined, LaptopOutlined, MenuFoldOutlined, MenuUnfoldOutlined, NumberOutlined } from '@ant-design/icons'
import classnames from 'classnames'
import { Scrollbars } from 'rc-scrollbars'

import styles from './BaseLayout.module.less'
import HeaderRight from './HeaderRight'
import { ItemType } from 'antd/es/menu/hooks/useItems'

export interface BaseLayoutProps {}

export interface Menu {
  title?: string
  key?: string
  path: string
  icon?: React.ReactNode
  children?: Menu[]
}

const MENUS: Menu[] = [
  {
    title: 'Welcome',
    key: 'welcome',
    path: '/welcome',
    icon: <CoffeeOutlined />,
  },
  {
    title: 'Dashboard',
    key: 'dashboard',
    path: '/dashboard',
    icon: <DashboardOutlined />,
    children: [
      {
        title: 'Analysis',
        key: 'analysis',
        path: '/dashboard/analysis',
      },
      {
        title: 'Monitor',
        key: 'monitor',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    title: 'Worksplace',
    key: 'worksplace',
    path: '/worksplace',
    icon: <LaptopOutlined />,
  },
  {
    title: 'About',
    key: 'about',
    path: '/about',
    icon: <NumberOutlined />,
  },
]

const PARENT_PREFIX = '^^^'

const getParentKeys = (nodeKey: string, menus: ItemType[]) => {
  const results: string[] = []

  const traverse = (ms: any) => {
    if (!ms.children?.length || !nodeKey.includes(ms.key)) return
    results.push(ms.key)
    for (let m of ms.children) traverse(m)
  }
  menus.forEach((v) => traverse(v))

  return results
}

const getMenus = (menus?: Menu[]): { menus: ItemType[]; keyToPath: Record<string, string> } => {
  const keyToPath: Record<string, string> = {}

  const traverse = (ms?: Menu[], parentKey: string = ''): ItemType[] | undefined => {
    if (!ms) return
    return ms.map<ItemType>((ms) => {
      const key = parentKey + `${PARENT_PREFIX}${ms.key ?? ms.path}`
      keyToPath[key] = ms.path
      return {
        label: ms.title,
        key,
        title: ms.title,
        icon: ms.icon,
        children: traverse(ms.children, key),
      }
    })
  }

  return {
    menus: traverse(menus) || [],
    keyToPath,
  }
}

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  const { menus, keyToPath } = useMemo(() => getMenus(MENUS), [])
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string>(() => {
    const path = location.pathname === '/' ? '/welcome' : location.pathname
    for (let key in keyToPath) {
      if (keyToPath[key] === path) return key
    }
    return ''
  })

  const navigate = useNavigate()

  const expandedKeys = useMemo(() => getParentKeys(selectedKey, menus), [])

  return (
    <Layout className={styles['base-layout']}>
      <Layout.Sider theme="light" trigger={null} collapsible collapsed={collapsed}>
        <div className={classnames(styles.logo, 'bg-white')}>logo</div>
        <Menu
          mode="inline"
          defaultOpenKeys={expandedKeys}
          selectedKeys={[selectedKey]}
          onSelect={(val) => {
            const path = keyToPath[val.key]
            if (path) navigate(path)
            setSelectedKey(val.key)
          }}
          items={menus}
        />
      </Layout.Sider>
      <Scrollbars autoHeight autoHeightMin="100vh" autoHeightMax="100vh">
        <Layout.Header className={classnames(styles.header, '!bg-white')}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'hover:text-blue-300',
            onClick: () => setCollapsed(!collapsed),
          })}
          <HeaderRight />
        </Layout.Header>
        <Layout.Content className={styles.content}>
          <Outlet />
        </Layout.Content>
      </Scrollbars>
    </Layout>
  )
}

export default BaseLayout
