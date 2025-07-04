import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Colors} from '../../config/colors';

interface StatusBarProps {
  barStyle: 'light-content' | 'dark-content';
}

export const Statusbar = (props: StatusBarProps) => {
  if (Platform.OS === 'ios') {
    return <StatusBar barStyle={props.barStyle} />;
  } else {
    return (
      <StatusBar
        backgroundColor={
          props.barStyle === 'light-content' ? Colors.NAVY_BLUE : Colors.WHITE
        }
        barStyle={props.barStyle}
      />
    );
  }
};
