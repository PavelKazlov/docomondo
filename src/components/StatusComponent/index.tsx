import { Colors } from '@/constants'
import { mockData } from '@/mock/mock'
import React from 'react'
import { View } from 'react-native'
import { StatusRowDiagram } from '../StatusRowDiagram'

export const StatusComponent = () => {
  // let statuses = new Map()
  let openCount = 0
  let overdue = 0
  let rejected = 0

  mockData.map((item) => {
    let counstatus = item.state === 'open' ? ++openCount : item.state === 'overdue' ? ++overdue : ++rejected
    // statuses.set(item.state, counstatus)
  })

  const openCountPercent = (openCount * 100) / mockData.length
  const overduePercent = (overdue * 100) / mockData.length
  const rejectedPercent = (rejected * 100) / mockData.length
  console.log({ openCountPercent, overduePercent, rejectedPercent })

  return (
    <View style={{}}>
      <StatusRowDiagram percent={openCountPercent} status='open' quantity={openCount} color={Colors.open} />
      <StatusRowDiagram percent={overduePercent} status='ooverduepen' quantity={overdue} color={Colors.overdue} />
      <StatusRowDiagram percent={rejectedPercent} status='rejected' quantity={rejected} color={Colors.rejected} />
      {/* <View
        style={{
          backgroundColor: Colors.error,
          width: `${openCountPercent}%`,
          // width: `100%`,
          height: 45,
          borderWidth: 1,
          borderColor: 'red',
        }}
      > */}
    </View>
  )
}
