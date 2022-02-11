import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const iconButton = ({iconChecked, iconUnchecked}) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <TouchableOpacity onPress={handleChecked}>
      <Image
        style={styleContent.icons}
        source={iconChecked ? iconUnchecked : bookmarkOutline}
      />
    </TouchableOpacity>
  );
};

export default iconButton;

export const styleContent = StyleSheet.create({
  content: {
    backgroundColor: '#000',
  },
  ContentIcons: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  icons: {
    marginRight: 3,
  },
});
