import { svgs } from "@/constants";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
  type WithSpringConfig,
  type WithTimingConfig,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";

// Immutable configs stay outside the component
const TIMING_CONFIG: WithTimingConfig = {
  duration: 1400,
  easing: Easing.out(Easing.exp),
};

const SPRING_CONFIG: WithSpringConfig = {
  damping: 8,
  stiffness: 120,
  mass: 1,
};

const BOUNCE_TIMING: WithTimingConfig = {
  duration: 120,
  easing: Easing.bezier(0.25, 0.46, 0.45, 0.94),
};

export default function Index() {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  // No useCallback needed; React Compiler handles the memoization
  const handleAnimationComplete = () => {
    // const isUserLoggedIn = getUser();
    console.log("Navigation check:");
    // Navigation logic...
  };

  useEffect(() => {
    // 1. Scale & Bounce Sequence
    scale.value = withSequence(
      withTiming(1, TIMING_CONFIG),
      withTiming(1.2, BOUNCE_TIMING),
      withSpring(1, SPRING_CONFIG, (finished) => {
        if (finished) {
          handleAnimationComplete(); // Direct call (Reanimated 4)
        }
      })
    );

    // 2. Opacity Fade
    opacity.value = withDelay(200, withTiming(1, { duration: 1000 }));

    // 3. Y-Axis Entrance
    translateY.value = withSequence(
      withTiming(0, TIMING_CONFIG),
      withTiming(-8, BOUNCE_TIMING),
      withSpring(0, SPRING_CONFIG)
    );
  }, []); // Empty array is fine here as the compiler stablizes external refs

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }, { scale: scale.value }],
  }));

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
        <SvgXml xml={svgs.namedLogo} width="100%" height="100%" />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
