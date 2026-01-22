import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText>Hello!</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  titleContainer: {
    padding: 28
  },
});
