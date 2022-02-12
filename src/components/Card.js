import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import iconButton from './iconButton';

const heartOutline = require('./heart-outline.png');
const heartSolid = require('../../assets/icons/heart-outline.png');
const bookmarkOutline = require('../../assets/icons/save-icon.png');
const bookmarkSolid = require('../../assets/icons/save-icon.png');

const Card = ({title, location, imageUri, text, like}) => {
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

  return (
    <View style={styleContent.content}>
      <Text style={styleContent.title}>{title}</Text>
      <Text style={styleContent.subtitle}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageTouch(title)}>
        <Image source={{uri: imageUri}} />
      </TouchableOpacity>
      <Text style={styleContent.container}> {text}</Text>
      <View style={styleContent.ContentIcons}>
        <iconButton iconChecked={heartSolid} iconUnchecked={heartOutline} />
        <iconButton
          iconChecked={bookmarkSolid}
          iconUnchecked={bookmarkOutline}
        />

        <Image style={styleContent.icons} source={bookmarkOutline} />
      </View>
      <View style={styleContent.separator} />
    </View>
  );
};

export default Card;

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

  container: {
    fontFamily: 'verdana',
    color: '#fff',
    marginLeft: 6,
    fontSize: 13,
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 6,
    fontSize: 24,
    marginTop: 16,
  },
  subtitle: {
    fontFamily: 'verdana',
    color: '#d3d3d3',
    fontSize: 12,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  separator: {
    height: 10,
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
