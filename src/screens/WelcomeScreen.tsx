import AppColors from "@/constants/AppColors";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import PagerView from "react-native-pager-view";
import Globals from "@/styles/globals";
import Button from "@/components/base/Button";

export default function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <SafeAreaView style={styles.container}>
        <PagerView style={styles.carousel} initialPage={0}>
          <View key="1" style={styles.carouselPage}>
            <View>
              <Text style={styles.title}>Mangocatnotes</Text>

              <Text style={styles.text}>
                is a free note management web app. It allows you to create and
                manage your notes from any device.
              </Text>

              <Button>Sign in now</Button>

              <Text style={styles.text}>And start organizing your notes.</Text>
            </View>
          </View>
          <View key="2" style={styles.carouselPage}>
            <Text>Second page</Text>
          </View>
          <View key="3" style={styles.carouselPage}>
            <Text>Third page</Text>
          </View>
        </PagerView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.primary,
  },
  container: {
    flex: 1,
    width: "100%",
    marginTop: 80,
    backgroundColor: AppColors.background,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    elevation: 15,
  },
  carousel: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  carouselPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  text: {
    fontSize: 24,
  },
});
