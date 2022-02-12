import React from 'react';
import Card from './components/Card';
import {FlatList, SafeAreaView} from 'react-native';

const userData = [
  {
    title: 'João Peregrino',
    location: 'Osasco',
    text: 'Se café é bom? um belo dia começa com um golé de café!',
    imageUri:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/1615F/production/_108236409_gettyimages-1094812112.jpg',
  },
  {
    title: 'Kevin Silva',
    location: 'Itapevi SP',
    text: 'Uma reunião de amigos, pára matar a saudade obs: eles que pagaram a conta rsrsrs',
    imageUri:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/1615F/production/_108236409_gettyimages-1094812112.jpg',
  },

  {
    title: 'Carol Ferreira',
    location: 'Jandira',
    text: 'A vista daqui é incrivel! porém prefiro a vista da minha cidadezinha em Itapevi!!',
    imageUri:
      'https://ichef.bbci.co.uk/news/640/cpsprodpb/1615F/production/_108236409_gettyimages-1094812112.jpg',
  },
];

const App = () => (
  <SafeAreaView>
    <FlatList
      data={userData}
      renderItem={({item}) => (
        <Card
          title={item.title}
          text={item.text}
          image={item.imageUri}
          location={item.location}
          separator={item.separator}
        />
      )}
    />
  </SafeAreaView>
);

export default App;

/* <View style={styleContent.content}>
      <View style={styleLogo.logo}>
        <Text style={styleTextLogo.textLogo}>Instagram</Text>
      </View>
      <View style={styles.container}>
        <Text style={stylesText.title}>João Peregrino</Text>
        <Text style={stylesTextSubtitle.subtitle}>Itapevi SP</Text>
        <Image
          source={require('../projectReact/src/imagemPessoa1.jpg')}
          style={stylesImage.image}
        />
        <Text style={stylesLike.likes}>curtido por 82 pessoas</Text>
        <Text style={styles.container}>
          Sorria sempre! Mesmo não sendo filmado! até mais que não existe
          câmeras em todos os lugares né!?
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={stylesText.title}>Thiago Borges</Text>
        <Text style={stylesTextSubtitle.subtitle}>Osasco SP</Text>
        <Image
          source={require('../projectReact/src/imagemPessoa2.jpg')}
          style={stylesImage.image}
        />
        <Text style={stylesLike.likes}>curtido por 342 pessoas</Text>
        <Text style={styles.container}>
          Uma reunião de amigos para matar a saudade, ps: eles que pagaram a
          conta rsrs
        </Text>
      </View>
      
    </View>
  </View>
  */
