import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteTask}) {


  return (
    <TouchableOpacity onPress={() => deleteTask(el.key)}>
        <Text style={styles.text}>
            {el.text}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 50,
        height: 100,
        backgroundColor: 'rgb(138, 138, 138);',
    },
    text: {
        padding: 20,
        border: '1px solid #000',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '60%',
        marginLeft: '20%',
        margin: 10,
        borderRadius: 10,
    }
})