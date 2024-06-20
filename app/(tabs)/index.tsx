import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#000000", dark: "#000000" }}
      headerImage={
        <Image
          source={require("@/assets/images/banner-home.png")}
          style={styles.reactLogo}
        />
      }
    >

    <ThemedView style={styles.fundo}>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Olá !</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem-vindo ao</ThemedText>
        <ThemedText type="title" style={styles.titulo}>meu Aplicativo !</ThemedText>
      </ThemedView>

      <ThemedView style={styles.fundo}>
        <ThemedText style={styles.linha}></ThemedText>
      </ThemedView>

      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>

      <ThemedView style={styles.textoContainer}>
          <ThemedText style={styles.texto}>
          O SocialHub é o aplicativo perfeito para quem deseja centralizar
          todas as suas redes sociais em um único local. Com uma interface
          intuitiva e fácil de usar, o SocialHub permite que você conecte
          suas contas do Facebook, Instagram, Twitter, LinkedIn, e muitas
          outras plataformas, oferecendo uma experiência integrada e simplificada.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>

      <ThemedView style={styles.textoContainer}>
        <ThemedText style={styles.texto}>
          Meu nome é Miguel e estou fazendo um aplciativo que tem algumas
          redes sociais minhas, para mais informações acesse a parte do Perfil
        </ThemedText>

        <ThemedText style={styles.texto}>
        </ThemedText>
        
      </ThemedView> 
    </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    alignItems: "center",
    gap: 8,
    textAlign: "center",
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 400,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  texto: {
    textAlign: "justify"
  },
  fundo: {
    backgroundColor: "#0c0c26",
  },
  linha:{
    paddingTop: 0,
    height: 8
  },
  titulo: {
    paddingBottom: 10,
  }
});