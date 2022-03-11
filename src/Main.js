import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Platform, styles} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';

const Main = () => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChange = (event, value) => {
    setDate(value);
    setIsPickerShow(false);
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 50,
      }}>
      {/* Display the selected date */}
      <View style={{padding: 20, backgroundColor: '#fff', borderRadius: 10}}>
        <Text style={{fontSize: 18, color: 'black'}}>
          {date.toDateString()}
        </Text>
      </View>

      {/* The button that used to trigger the date picker */}
      {!isPickerShow && (
        <View style={{padding: 30}}>
          <Button title="Show Picker" color="purple" onPress={showPicker} />
        </View>
      )}

      {/* The date picker */}
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'date'}
          onChange={onChange}
          style={{
            width: 320,
            height: 260,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        />
      )}
    </View>
  );
};
export default Main;
