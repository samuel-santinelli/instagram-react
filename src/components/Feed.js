import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from './Card';

const userData = [
  {
    fotoProfile:
      'https://static1.conquistesuavida.com.br/articles//4/56/84/@/18404-gente-que-da-prioridade-aos-sentimentos-article_gallery-2.jpg',
    nameProfile: 'João Peregrino',
    title: 'João Peregrino',
    location: 'Osasco',
    text: 'Um belo dia começa com um golé de café!',
    imageUri:
      'https://www.queroviverbem.com.br/wp-content/uploads/2017/01/tomando-cafe-diariamente.jpg',
    likes: `curtido por leticia e outras pessoas`,
  },
  {
    fotoProfile:
      'https://brasil.emeritus.org/wp-content/uploads/2020/01/gesta%CC%83o-de-pessoas-.jpg',
    title: 'Carol Ferreira',
    nameProfile: 'Carol Ferreira',
    location: 'Itapevi SP',
    text: 'Uma reunião de amigos, pára matar a saudade obs: eles que pagaram a conta rsrsrs',
    imageUri:
      'https://processohoffman.pt/images/blog/pessoas-fechadas-voce-nao-consegue-se-abrir-e-relacionar-com-os-outros.jpg',
    likes: 'curtido por 56 pessoas',
  },

  {
    fotoProfile:
      'https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg',
    title: 'Carol Ferreira',
    nameProfile: 'Kevin Silva',
    location: 'Jandira',
    text: 'A vista daqui é incrivel! porém prefiro a vista da minha cidadezinha em Itapevi!!',
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdUQUhlDjdlsNlElQcqV7-ruvsVY40Z6RuQ&usqp=CAU',
    likes: 'curtido por milhares pessoas',
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={userData}
        renderItem={({item}) => (
          <Card
            fotoProfile={item.fotoProfile}
            nameProfile={item.nameProfile}
            title={item.title}
            text={item.text}
            imageUri={item.imageUri}
            location={item.location}
            likes={item.likes}
            separator={item.separator}
          />
        )}
      />
    </View>
  );
};

export default Feed;
