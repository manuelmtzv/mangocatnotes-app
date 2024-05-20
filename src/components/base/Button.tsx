import AppColors from "@/constants/AppColors";
import {
  View,
  Text,
  Pressable,
  StyleProp,
  ViewProps,
  StyleSheet,
} from "react-native";

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewProps>;
};

export default function Button({ children, onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    overflow: "hidden",
    elevation: 4,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: AppColors.primary,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
  },
});
