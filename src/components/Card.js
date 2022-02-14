import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import style from '../style';
import IconButton from './IconButton';

const heartOutline = require('../assets/heart-outline.png');
const heartSolid = require('../assets/heart-solid.png');
const bookmarkOutline = require('../assets/save-icon.png');
const bookmarkSolid = require('../assets/save-iconSolid.png');

const Card = ({title, location, imageUri, text}) => {
  const handleImageTouch = cardTitle => {
    console.log('imagem pressionada: ', cardTitle);
  };

  const [liked, setLiked] = useState(false); // [0] valor corrente, [1] função modificadora
  const [bookmarked, setBookmarked] = useState(false); // [0] valor corrente, [1] função modificadora

  // Provocando uma reação
  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmarked = () => {
    setBookmarked(!bookmarked);
  };

  console.log(imageUri);

  return (
    <View style={styleContent.content}>
      <View style={styleContent.separator} />
      <Text style={styleContent.title}>{title}</Text>
      <Text style={styleContent.subtitle}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageTouch(title)}>
        <Image style={styleContent.image} source={{uri: imageUri}} />
      </TouchableOpacity>
      <Text style={styleContent.container}> {text}</Text>
      <View style={styleContent.contentIcons}>
        <IconButton iconChecked={heartSolid} iconUnchecked={heartOutline} />
        <IconButton
          iconChecked={bookmarkSolid}
          iconUnchecked={bookmarkOutline}
        />

        <Image style={style.icons} source={bookmarkOutline} />
      </View>
    </View>
  );
};

export default Card;

export const styleContent = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
  },
  contentIcons: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  icons: {
    marginRight: 3,
  },

  container: {
    fontFamily: 'verdana',
    color: '#000',
    marginLeft: 4,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 4,
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 6,
    fontSize: 24,
    marginTop: 16,
  },
  subtitle: {
    fontFamily: 'verdana',
    color: '#000',
    fontSize: 11,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  separator: {
    marginTop: 1,
    height: 1,
    backgroundColor: '#000',
  },
});

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
