import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function Form({addTask}) {
    const [text, setText] = useState('')

    const changeText = (text) => {
        setText(text)
    }

    return (
        <View>
            <TextInput placeholder='Input Task' style={styles.input} onChangeText={changeText} />
            <Button color="#f194ff" title='Add task' onPress={() => addTask(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '60%',
        marginVertical: 30,
        marginHorizontal: '20%',
    },

})