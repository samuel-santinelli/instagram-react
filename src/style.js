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
    marginTop: 10,
  },
  name: {
    color: '#fff',
    fontSize: 17,
    marginTop: 14,
    marginLeft: 7,
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
    color: '#fff',
    marginLeft: 4,
    fontSize: 15,
    fontWeight: '600',
    marginTop: 1,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 5,
  },
  subtitle: {
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
  location: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 42,
    marginBottom: 10,
  },
});

export default style;
