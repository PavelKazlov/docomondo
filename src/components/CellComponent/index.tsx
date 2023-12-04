import React from 'react'
import { Text, View } from 'react-native'

import { Icon } from '@rneui/base'
import { styles } from './style'

type CellComponentType = {
  datum: string | boolean | number
}

export const CellComponent: React.FC<CellComponentType> = ({ value }) => {
  return <View style={styles.container}>{value === true ? <Icon name={'info'} /> : <Text>{value}</Text>}</View>
}
