import React from 'react'
import { TinyColumn } from '@ant-design/charts'

export interface MiniColumnProps {
  data: number[]
}

const MiniColumn: React.FC<MiniColumnProps> = (props) => {
  return <TinyColumn autoFit height={60} data={props.data} />
}

export default MiniColumn
