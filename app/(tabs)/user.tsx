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
        <Image source={require('@/assets/images/eu.png')} style={styles.headerImage} />
      }
    >
      <ThemedView>
        
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meu Perfil</ThemedText>
      </ThemedView>

      <ThemedView style={styles.text}>
        <ThemedText type="title">Miguel da Silva Vagula</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meu Prof. Favorito 👇</ThemedText>
      </ThemedView>

        <Image source={require('@/assets/images/gra.jpg')} style={styles.gra} />

      

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    padding: 16,
    textAlign: "center",
    alignItems: "center"
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  gra: {
    width: 300,
    height: 300,
    marginRight: 8,
  },
  text: {
    fontSize: 10,
    alignItems: "center",
    textAlign: "center",
  },
});