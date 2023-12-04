import { Colors } from '@/constants'
import React from 'react'
import { Text, View } from 'react-native'

import { Icon } from '@rneui/base'
import { styles } from './style'

type RowComponentType = {
  datum: string
  aussteller: string
  betrag: number
  beleg: boolean
  status: string
}

export const RowComponent: React.FC<RowComponentType> = ({ datum, aussteller, betrag, beleg, status }) => {
  return (
    <View style={styles.container}>
      <Text>{datum}</Text>
      <Text>{aussteller}</Text>
      <Text>{betrag}</Text>
      {status === 'overdue' ? <Icon name={'check'} color={Colors.primary} size={18} /> : <Icon name={'bolt'} />}

      <View
        style={{
          backgroundColor: status === 'overdue' ? Colors.overdueStatusBG : Colors.otherStatusBG,
          borderRadius: 10,
          padding: 3,
        }}
      >
        <Text>{status}</Text>
      </View>
    </View>
  )
}
