import { DonatDiagram, LinearDiagram, RowComponent, StatusComponent } from '@/components'
import { InfoBlock } from '@/components/InfoBlock'
import { mockData } from '@/mock/mock'
import React, { useState } from 'react'

import { Button, ScrollView } from 'react-native'
import { styles } from './styles'

export const HomeScreen = () => {
  const [dataArr, setDataArr] = useState([])
  const amoutArr = mockData.reduce((arr, item) => {
    arr.push(item.amount)
    return arr
  }, [])

  const link = 'https://v6.exchangerate-api.com/v6/45bebbb56e5e42c207bd97c0/latest/USD'

  const onHandlePress = () => {
    try {
      fetch(link)
        .then((result) => result.json())
        .then((res) => console.log('res =>', res))
    } catch (error) {
      console.log('error =>', error)
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Button onPress={onHandlePress} title={'Get Data'} />

      <InfoBlock title={'Actuel'} isTable>
        {mockData
          ? mockData.map((item, i) => {
              return (
                <RowComponent
                  key={i}
                  datum={item.date}
                  aussteller={item.issuer}
                  betrag={item.amount}
                  beleg={item.recipe}
                  status={item.state}
                />
              )
            })
          : null}
      </InfoBlock>

      <InfoBlock title={'Status Ttransactionen'}>
        <StatusComponent />
      </InfoBlock>

      <InfoBlock title={'Ausgaben'}>
        {/* <DonatDiagram data={dataArr} /> */}
        <DonatDiagram data={amoutArr} />
      </InfoBlock>
      <InfoBlock title={'Ausgaben'}>
        <LinearDiagram />
      </InfoBlock>
    </ScrollView>
  )
}
