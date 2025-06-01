import { MaterialIcons } from '@expo/vector-icons';

export default function TabBarIcon({ name, color }: { name: any; color: string }) {
  return <MaterialIcons size={24} name={name} color={color} />;
}
