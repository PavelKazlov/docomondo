import { Text } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'

type StatusRowDiagramType = {
  percent: number
  quantity: number
  status: string
  color: string
}

export const StatusRowDiagram: React.FC<StatusRowDiagramType> = ({ status, percent, quantity, color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: `${percent}%`,
        // width: `100%`,
        height: 45,
        borderWidth: 1,
        borderColor: 'red',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.9 }}>
          <Text>{status}</Text>
        </View>
        <View style={{ flex: 0.1 }}>
          <Text>{quantity}</Text>
        </View>
      </View>
    </View>
  )
}
