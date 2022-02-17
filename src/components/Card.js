import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconButton from './IconButton';
import style from '../style';

const heartOutline = require('../assets/heartOutline.png');
const heartSolid = require('../assets/heartSolid.png');
const SaveOutline = require('../assets/saveOutline.png');
const SaveSolid = require('../assets/saveSolid.png');

const Card = ({
  title,
  location,
  imageUri,
  text,
  likes,
  fotoProfile,
  nameProfile,
}) => {
  const handleImageTouch = cardTitle => {
    console.log('imagem pressionada: ', cardTitle);
  };

  const [iconLike, setIconLike] = useState(false);
  const [iconSave, setIconSave] = useState(false);

  console.log(iconLike, iconSave);

  return (
    <View style={style.content}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{location}</Text>
      <TouchableOpacity
        style={style.contentProfile}
        onPress={() => handleImageTouch(title)}>
        <Image style={style.profile} source={{uri: fotoProfile}} />
        <Text style={style.name}>{nameProfile}</Text>
      </TouchableOpacity>
      <Image style={style.image} source={{uri: imageUri}} />

      <Text style={style.likes}>{likes}</Text>
      <Text style={style.container}> {text}</Text>

      <Text style={style.subtitle}>Like: {String(iconLike)}</Text>
      <Text style={style.subtitle}>Save: {String(iconSave)}</Text>
      <View style={style.contentIcons}>
        <IconButton
          checked={iconLike}
          onChange={setIconLike}
          iconChecked={heartOutline}
          iconUnchecked={heartSolid}
        />
        <IconButton
          checked={iconSave}
          onChange={setIconSave}
          iconChecked={SaveSolid}
          iconUnchecked={SaveOutline}
        />
      </View>
      <View style={style.separator} />
    </View>
  );
};

export default Card;

// onChange={b => setIcons({...icons, like: like })}
// const state = icons;
// state.like = like;
// setIcons(state);

// checked={true} => like
// checked={false} => save

// console.log(imageUri);

// const [liked, setLiked] = useState(false); // [0] valor corrente, [1] função modificadora
// const [Saveed, setSaveed] = useState(false); // [0] valor corrente, [1] função modificadora

// const style = StyleSheet.create({
//   cardView: {
//     padding: 5}
//     cardTitle: {fontWeight: 'bold'},
//     cardImage: {
//       width: 100%,
//       height: 100,
//     },
//     cardIconBox: {flexDirection: 'row',marginVertical: 5}
//     cardIconBox: {marginRight},
// });

// if (liked){
//   liked = false;
// } else{
//   liked = true;
// }
// liked = liked ? false : true;
// }

// Provocando uma reação
// const handleLike = () => {
//   setLiked(!liked);
// };

// const handleSaveed = () => {
//   setSaveed(!Saveed);
// };
