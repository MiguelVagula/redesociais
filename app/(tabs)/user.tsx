import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <Image source={require('@/assets/images/banner-perfil.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.fundo}>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meu Perfil</ThemedText>
      </ThemedView>

      <Image source={require('@/assets/images/eu.png')} style={styles.eu} />

      <ThemedText style={styles.tituloContainer2}>
        Miguel da Silva Vagula
      </ThemedText>
      <ThemedText style={styles.tituloContainer}>
        17 anos
      </ThemedText>
      <ThemedText style={styles.tituloContainer}>
        3º Info
      </ThemedText>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meu Prof. Favorito</ThemedText>
        <ThemedText type="title"> 👇</ThemedText>
      </ThemedView>

        <Image source={require('@/assets/images/gragra.png')} style={styles.gra} />

      

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#0c0c26",
  },
  headerImage: {
    width: '100%',
    height: '100%',
    backgroundColor: "#0c0c26",
  },
  titleContainer: {
    padding: 16,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#0c0c26",
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: "#0c0c26",
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10,
  },
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
    backgroundColor: "#0c0c26",
  },
  tituloContainer2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
    backgroundColor: "#0c0c26",
    paddingTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
    backgroundColor: "#0c0c26",
  },
  gra: {
    width: 250,
    height: 250,
    marginRight: 3,
    alignItems: "center",
    backgroundColor: "#0c0c26",
    marginLeft: 50,
    margin: 20,
  },
  eu:{
    width: 200,
    height: 200,
    marginLeft: 76,
    alignItems: "center",
    backgroundColor: "#0c0c26",
  },
  text: {
    fontSize: 10,
    alignItems: "center",
    backgroundColor: "#0c0c26",
  },
});