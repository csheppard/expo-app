import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { RectButton } from 'react-native-gesture-handler';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.modalOverlay}>
      <ThemedView style={styles.titleContainer}>
        <ThemedView style={styles.buttonContainer}>
          <RectButton style={styles.button} onPress={() => router.back()}>
            <ThemedText>Go back</ThemedText>
          </RectButton>
          <RectButton style={styles.button} onPress={() => router.back()}>
            <ThemedText>Go back</ThemedText>
          </RectButton>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.bottomContainer}>        
        <RectButton style={styles.button} onPress={() => router.back()}>
          <ThemedText>❗️ go back</ThemedText>
        </RectButton>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  titleContainer: {
    padding: 28,
    gap: 16
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: "50%"
  },
});