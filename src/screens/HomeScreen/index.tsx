import { DonatDiagram, RowComponent, StatusComponent } from '@/components'
import { InfoBlock } from '@/components/InfoBlock'
import { mockData } from '@/mock/mock'
import React, { useState } from 'react'

import { ScrollView } from 'react-native'
import { styles } from './styles'

export const HomeScreen = () => {
  const [dataArr, setDataArr] = useState([])
  const amoutArr = mockData.reduce((arr, item) => {
    arr.push(item.amount)
    return arr
  }, [])

  // useEffect(() => {
  //   if (mockData) {
  //     const amoutArr = mockData.reduce((arr, item) => {
  //       arr.push(item.amount)
  //       return arr
  //     }, [])
  //     setDataArr(amoutArr)
  //   }
  // }, [])

  console.log('dataArr =>', dataArr)
  return (
    <ScrollView style={styles.container}>
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
        <DonatDiagram />
      </InfoBlock>
    </ScrollView>
  )
}
