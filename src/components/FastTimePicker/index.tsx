import React from 'react'
import { DatePicker, DatePickerProps } from 'antd'
import { RangePickerProps } from 'antd/es/date-picker'
import dayjs, { Dayjs, OpUnitType } from 'dayjs'

import './index.less'
import classNames from 'classnames'

export type EventValue<DateType> = DateType | null
export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null

export type FastTimePickerProps =
  | (Omit<RangePickerProps, 'value' | 'onChange' | 'format'> & { fastMenus?: FastMenuKeys[] | false; format?: string; wrapperClassName?: string }) &
      (
        | {
            stringTime: true
            value?: RangeValue<string>
            onChange?: (value: RangeValue<string>) => void
          }
        | {
            stringTime?: false
            value?: RangePickerProps['value']
            onChange?: RangePickerProps['onChange']
          }
      )

const DEFAULT_FORMAT = 'YYYY-MM-DD'
export type FastMenuKeys = 'today' | 'week' | 'month' | 'year'

const FAST_MENUS: Record<FastMenuKeys, string> = {
  today: '今日',
  week: '本周',
  month: '本月',
  year: '本年',
}

const FAST_MENUS_KEYS = Object.keys(FAST_MENUS) as unknown as FastMenuKeys[]

const FastTimePicker: React.FC<FastTimePickerProps> = ({ fastMenus = FAST_MENUS_KEYS, stringTime, value, onChange, format = DEFAULT_FORMAT, wrapperClassName, ...props }) => {
  const [date, setDate] = React.useState<RangeValue<Dayjs>>(null)
  const [fastKey, setFastKey] = React.useState<FastMenuKeys>()

  const handleChange = (values: RangeValue<Dayjs>, formatString: [string, string]) => {
    if (!onChange) setDate(values)
    else {
      if (stringTime) onChange(formatString)
      else onChange(values, formatString)
    }
  }

  const handleFastMenuClick = (type: FastMenuKeys) => {
    const now = dayjs()

    let format: OpUnitType

    switch (type) {
      case 'today':
        format = 'day'
        break
      case 'week':
      case 'month':
      case 'year':
        format = type
        break
      default:
        throw new TypeError(`type must belong to FastMenuKeys: today | week | month | year; current -> ${type}`)
    }
    const start = now.startOf(format)
    const end = now.endOf(format)
    setFastKey(type)
    handleChange([start, end], [start.format(format), end.format(format)])
  }

  let finalValue = date

  if (typeof value !== 'undefined') {
    const [start, end] = value || [null, null]
    finalValue = [typeof start === 'string' ? dayjs(start) : start, typeof end === 'string' ? dayjs(end) : end]
  }

  return (
    <div className={classNames('fast-time-picker', wrapperClassName)}>
      {fastMenus && (
        <div className="fast-time-picker-options">
          {fastMenus.map((menuKey) => (
            <span
              key={menuKey}
              className={classNames('fast-time-picker-options_item', fastKey === menuKey && 'fast-time-picker-options_item-actived')}
              onClick={() => handleFastMenuClick(menuKey)}
            >
              {FAST_MENUS[menuKey]}
            </span>
          ))}
        </div>
      )}

      <DatePicker.RangePicker value={finalValue} onChange={handleChange} format={format} {...props} />
    </div>
  )
}

export default FastTimePicker
