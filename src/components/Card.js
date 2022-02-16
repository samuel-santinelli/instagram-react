import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import IconButton from './IconButton';

const heartOutline = require('../assets/heartSolid.png');
const heartSolid = require('../assets/heartSolidOutline.png');
const bookmarkOutline = require('../assets/save-icon.png');
const bookmarkSolid = require('../assets/save-iconOutline.png');

const Card = ({title, location, imageUri, text, likes}) => {
  const handleImageTouch = cardTitle => {
    console.log('imagem pressionada: ', cardTitle);
  };

  // const [icons, setIcons] = const [{like: false, bookmark: false}];
  // const [icons, setIcons] = useState([{like: false, bookmark: false});

  return (
    <View style={styleContent.content}>
      <Text style={styleContent.title}>{title}</Text>
      <Text style={styleContent.subtitle}>{location}</Text>
      <TouchableOpacity onPress={() => handleImageTouch(title)}>
        <Image style={styleContent.image} source={{uri: imageUri}} />
      </TouchableOpacity>
      <Text style={styleContent.likes}>{likes}</Text>
      <Text style={styleContent.container}> {text}</Text>

      <View style={styleContent.contentIcons}>
        <IconButton iconChecked={heartSolid} iconUnchecked={heartOutline} />
        <IconButton
          iconChecked={bookmarkSolid}
          iconUnchecked={bookmarkOutline}
        />
      </View>
      <View style={styleContent.separator} />
    </View>
  );
};

// onChange={b => setIcons({...icons, like: like })}
// const state = icons;
// state.like = like;
// setIcons(state);

// checked={true} => like
// checked={false} => save

export default Card;

export const styleContent = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    color: '#000',
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
    fontSize: 15,
    fontWeight: '600',
    marginTop: 1,
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 6,
    fontSize: 28,
    marginTop: 6,
  },
  subtitle: {
    fontFamily: 'verdana',
    color: '#000',
    fontSize: 14,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  separator: {
    marginTop: 20,
    height: 5,
    backgroundColor: '#000',
  },
  likes: {
    color: '#000',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 6,
    marginTop: 4,
  },
});

// console.log(imageUri);

// const [liked, setLiked] = useState(false); // [0] valor corrente, [1] função modificadora
// const [bookmarked, setBookmarked] = useState(false); // [0] valor corrente, [1] função modificadora

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

// const handleBookmarked = () => {
//   setBookmarked(!bookmarked);
// };
