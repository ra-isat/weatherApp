import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

export default function Header() {


  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'rgb(138, 138, 138);',
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})