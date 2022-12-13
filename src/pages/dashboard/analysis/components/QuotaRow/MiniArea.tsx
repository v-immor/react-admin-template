import React from 'react'
import { TinyArea } from '@ant-design/charts'

export interface MiniAreaProps {
  data: number[]
}

const MiniArea: React.FC<MiniAreaProps> = (props) => {
  return (
    <TinyArea
      smooth
      autoFit={false}
      areaStyle={{
        fill: '#d6e3fd',
      }}
      height={60}
      data={props.data}
    />
  )
}

export default MiniArea
