
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/banner.jpg')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/whatsapp.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://wa.me/qr/5D2XL6JUTF74P1')}>
            <ThemedText type="social">Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/linkedin.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.linkedin.com/in/miguel-vagula-5bb475313/')}>
            <ThemedText type="social">Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/github.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/MiguelVagula/')}>
            <ThemedText type="social">Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
        <Zocial name="gmail" size={36} color="red" style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('mailto:miguelsvagulao@gmail.com')}>
            <ThemedText type="social">Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
        <AntDesign name="youtube" size={36} color="red" style={styles.icon}/>
          <Pressable  onPress={() => Linking.openURL('https://www.youtube.com/channel/UCdo9j36eEcVy4iwn0kBEp-Q')}>
            <ThemedText type="social">Youtube</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
        <FontAwesome5 name="steam" size={36} color="black" style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://steamcommunity.com/id/miguel2448')}>
            <ThemedText type="social">Steam</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/instagram.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.instagram.com/miguelsv_eu/')}>
            <ThemedText type="social">Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/telefone.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518996553656')}>
            <ThemedText type="social">Telefone</ThemedText>
          </Pressable>
        </ThemedView>

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
    textAlign: 'center',
    alignItems: 'center',
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
    padding: 10,
    width: 250
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: "20%",
  },
  text: {
    fontSize: 16,
  },
});