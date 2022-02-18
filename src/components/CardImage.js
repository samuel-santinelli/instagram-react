import {View, Text, Image} from 'react-native';
import React from 'react';
import style from '../style';

const CardImage = ({props}) => {
  return (
    <View>
      <Image style={style.image} source={props.imageUri} />
    </View>
  );
};

export default CardImage;
