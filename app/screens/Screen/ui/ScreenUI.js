// import react native
import React from 'react';
import {View, StatusBar} from 'react-native';

// import Screen functions
import {} from '../functions';

// export Screen UI
export default function ScreenUI() {
  return (
    <View style={{flex: 1, backgroundColor: '#161924'}}>
      <StatusBar barStyle="light-content" />
    </View>
  );
}
