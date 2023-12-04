import { Text } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'

export const BlockHeader = (header: string) => {
  return (
    <View>
      <Text h4>{header}</Text>
    </View>
  )
}
