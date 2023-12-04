import { Text } from '@rneui/base'
import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type InfoBlockType = {
  children: ReactNode
  title: string
  isTable?: boolean
}

export const InfoBlock: React.FC<InfoBlockType> = ({ children, title, isTable = false }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titlestyle}>
        <Text h4>{title}</Text>
      </View>
      {isTable && (
        <View style={styles.headerContainer}>
          <Text>Datum</Text>
          <Text>Aussteller</Text>
          <Text>Betrag</Text>
          <Text>Beleg</Text>
          <Text>Status</Text>
        </View>
      )}
      <View>{children}</View>
    </View>
  )
}
