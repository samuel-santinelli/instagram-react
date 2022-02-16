import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import Feed from './components/Feed';

const App = () => (
  // <SafeAreaView>
  //   <Feed></Feed>
  // </SafeAreaView>
  <Feed />
);

export default App;

// const styles = StyleSheet.create({});

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
