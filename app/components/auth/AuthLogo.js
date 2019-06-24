import React from 'react';
import { View, Image } from 'react-native';

import casanovaLogo from '../../assests/images/casanova_action.png';

const LogoComponent = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={casanovaLogo}
        resizeMode={'contain'}
        style={{
          width: 270,
          height: 150
        }}
      />
    </View>
  );
};
export default LogoComponent;
