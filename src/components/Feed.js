import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Card from './Card';
import SuperCard from './SuperCard';

const qtdLikes = 765;
const nomeLikes = ['joão16', ' maria_tks', ' joséPedrin'];
const qtdMilhares = 'milhares';

const userData = [
  {
    fotoProfile:
      'https://static1.conquistesuavida.com.br/articles//4/56/84/@/18404-gente-que-da-prioridade-aos-sentimentos-article_gallery-2.jpg',
    nameProfile: 'steve_jobson',
    title: 'Samuel Santinelli',
    location: 'Itapevi SP',
    text: 'Dia top é com um café!, beba pouco! haha',
    imageUri:
      'https://www.queroviverbem.com.br/wp-content/uploads/2017/01/tomando-cafe-diariamente.jpg',
    likes: `curtido por ${nomeLikes} e outras pessoas`,
  },
  {
    fotoProfile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdUQUhlDjdlsNlElQcqV7-ruvsVY40Z6RuQ&usqp=CAU',
    nameProfile: 'carol.ferreira747',
    location: 'Alphaville SP',
    text: 'Uma reunião de amigos, para matar a saudade obs: eles que pagaram a conta rsrsrs',
    imageUri:
      'https://processohoffman.pt/images/blog/pessoas-fechadas-voce-nao-consegue-se-abrir-e-relacionar-com-os-outros.jpg',
    likes: `curtido por ${qtdLikes} pessoas`,
  },

  {
    fotoProfile:
      'https://st.depositphotos.com/1224365/2408/i/600/depositphotos_24084437-stock-photo-portrait-of-a-normal-boy.jpg',
    nameProfile: 'felipe_zuckerberg',
    location: 'Jandira',
    text: 'A vista daqui é incrivel! porém prefiro a vista da minha cidadezinha em Itapevi!!',
    imageUri:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdUQUhlDjdlsNlElQcqV7-ruvsVY40Z6RuQ&usqp=CAU',
    likes: `curtido por ${qtdMilhares} de pessoas`,
  },
];

const Feed = () => {
  return (
    <View>
      <FlatList
        data={userData}
        renderItem={({item}) => (
          <SuperCard>
            <Card {...item} />
          </SuperCard>
        )}
      />
    </View>
  );
};

export default Feed;
