import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import capable from '../../assets/images/casanova_newbie_info.png';

export default function InfoImg1() {
  return (
    <View>
      <Image
        style={{ height: 200, padding:5, justifyContent: 'space-around' }}
        source={capable}
        resizeMode="cover"
      />
    </View>
  );
}
