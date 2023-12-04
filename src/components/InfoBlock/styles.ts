import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    margin: 12,
    backgroundColor: Colors.blockBackground,
    borderWidth: 2,
    borderColor: Colors.blockBorder,
    borderRadius: 10,
  },
  titlestyle: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 12,
  },
})
