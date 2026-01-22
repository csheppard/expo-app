import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Modal, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedView style={styles.buttonContainer}>
        <Link href="/explore" style={styles.button}>
          <ThemedText>❗️ Propagated</ThemedText>
        </Link>
        <RectButton onPress={() => router.push('/explore')} style={styles.button}>
          <ThemedText>✅ Good</ThemedText>
        </RectButton>
      </ThemedView>

      <RectButton style={styles.button} onPress={() => router.push('/modal')}>
        <ThemedText>Open modal route</ThemedText>
      </RectButton>

      <RectButton style={styles.button} onPress={() => setVisible(true)}>
        <ThemedText>Open inline modal</ThemedText>
      </RectButton>
      
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={onClose}
        statusBarTranslucent
      >
        <ThemedView style={styles.modalOverlay}>
          <ThemedView style={styles.modalContent}>
            <ThemedView style={styles.titleContainer}>
              <ThemedView style={styles.buttonContainer}>
                <RectButton style={styles.button} onPress={onClose}>
                  <ThemedText>❗️ Close modal</ThemedText>
                </RectButton>
                <RectButton style={styles.button} onPress={onClose}>
                  <ThemedText>✅ Close modal</ThemedText>
                </RectButton>
              </ThemedView>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.bottomContainer}>        
            <RectButton style={styles.button} onPress={onClose}>
              <ThemedText>❗️ Close modal</ThemedText>
            </RectButton>
          </ThemedView>
        </ThemedView>
      </Modal>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  modalContent: {
    width: '100%',
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: "50%",
    width: '100%',
  }
});
