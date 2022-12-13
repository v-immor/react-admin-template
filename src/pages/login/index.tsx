import React from 'react'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import { AlipayOutlined, GithubOutlined, LockOutlined, TranslationOutlined, TwitterOutlined, UserOutlined, WechatOutlined } from '@ant-design/icons'

import styles from './index.module.less'
import Footer from '../../layouts/Footer'

function Page() {
  return (
    <div className={styles.login}>
      <div className="py-4 px-10 text-right text-xl">
        <TranslationOutlined className="cursor-pointer hover:text-blue-400" />
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          <h1>React Admin Antd Template By Vite</h1>
          <p>fast develop your admin frontend</p>
        </div>
        <Form className={styles.form}>
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input className={styles.input} prefix={<UserOutlined />} placeholder="用户名：input any" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password className={styles.input} prefix={<LockOutlined />} placeholder="密码：v-admin.antd" />
          </Form.Item>

          <div className="flex items-center justify-between">
            <div>
              <Checkbox />
              <span className="ml-1">自动登录</span>
            </div>
            <Button type="link">忘记密码?</Button>
          </div>

          <Button type="primary" className="w-full mt-4">
            登录
          </Button>

          <div className="mt-6 flex items-center">
            <label className="text-gray-400">其他登录方式：</label>
            <Space className="text-xl">
              <GithubOutlined className="hover:text-blue-200 cursor-pointer" />
              <TwitterOutlined className="hover:text-blue-200 cursor-pointer" />
              <WechatOutlined className="hover:text-blue-200 cursor-pointer" />
              <AlipayOutlined className="hover:text-blue-200 cursor-pointer" />
            </Space>
          </div>
        </Form>
      </div>

      <Footer />
    </div>
  )
}

export default Page
