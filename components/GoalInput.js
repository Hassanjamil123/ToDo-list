import React, {useState } from 'react';
import {View, Text, TextInput, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');


    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    
    

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <TextInput
         placeholder="Write Something"
         onChangeText={goalInputHandler}
         value={enteredGoal}
         style={{
             width: 300,
             height: 50,
             borderWidth: 1,
             borderColor: 'black',
             padding: 10
         }}

         />  
         <Button 
         title="Cancel"
         color="red"
         onPress={() => props.onCancel()}
         />
         <Button 
         title="Add"
         onPress={() => props.onAddGoal(enteredGoal)}
         />
      </View>
      </Modal>
    )
}

export default GoalInput;