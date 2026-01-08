import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function Layout() {
  return (
    <NativeTabs shadowColor="red">
      <NativeTabs.Trigger name="index" />
      <NativeTabs.Trigger name="explore" />
    </NativeTabs>
  );
}