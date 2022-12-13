import React from 'react'
import { Table } from 'antd'

import styles from './index.module.less'

export interface ITableProps {}

const ITable: React.FC<ITableProps> = (props) => {
  return <div className={styles['index']}>ITable content</div>
}

export default ITable
