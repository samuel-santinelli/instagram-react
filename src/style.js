import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  ContentIcons: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  icons: {
    height: 35,
    width: 35,
    marginLeft: 5,
    marginTop: 10,
  },
  contentProfile: {
    flexDirection: 'row',
    marginTop: 15,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginBottom: 5,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'verdana',
    marginTop: 5,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#000000',
    color: '#fff',
  },
  contentIcons: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  container: {
    fontFamily: 'verdana',
    color: '#fff',
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 1,
  },
  title: {
    fontFamily: 'verdana',
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 6,
    fontSize: 28,
    marginTop: 6,
  },
  subtitle: {
    fontFamily: 'verdana',
    color: '#fff',
    fontSize: 14,
    marginLeft: 8,
  },
  image: {
    width: '100%',
    height: 300,
  },
  separator: {
    marginTop: 10,
    marginBottom: 10,
    height: 2,
    backgroundColor: '#fff',
  },
  likes: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 6,
    marginTop: 4,
  },
});

export default style;
