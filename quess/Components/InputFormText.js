import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const InputFormText = () => {
  return (
    <View>
      <Text>
        Add text here
      </Text>

      <TextInput
          style={styles.textInput}
          
          placeholder="Type here..."
        />
        <Button
          
          title="Write to Clipboard"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: '600',
  },
  seperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
    width: '80%',
    marginVertical: 40,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});


export default InputFormText
