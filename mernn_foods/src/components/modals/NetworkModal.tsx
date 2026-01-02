import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type NetworkAlertProps = {
  visible: boolean;
  retrying: boolean;
  onRetry?: () => void;
  onClose?: (visible: boolean) => void;
};

export const NetworkAlert = ({
  visible,
  retrying,
  onRetry,
  onClose,
}: NetworkAlertProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Connection Problem</Text>

          <Text style={styles.message}>
            We’re having trouble connecting to the internet. Please check your
            network and try again.
          </Text>

          <View style={styles.actions}>
            {onClose && (
              <TouchableOpacity
                onPress={() => onClose(false)}
                disabled={retrying}
                style={[styles.button, styles.secondary]}
              >
                <Text style={styles.secondaryText}>Dismiss</Text>
              </TouchableOpacity>
            )}

            {onRetry && (
              <TouchableOpacity
                onPress={onRetry}
                disabled={retrying}
                style={[styles.button, styles.primary]}
              >
                {retrying ? (
                  <Text style={styles.primaryText}>Retrying...</Text>
                ) : (
                  <Text style={styles.primaryText}>Retry</Text>
                )}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    maxWidth: 420,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111",
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 90,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#2563EB", // calm blue
  },
  secondary: {
    backgroundColor: "#F1F5F9",
  },
  primaryText: {
    color: "#fff",
    fontWeight: "600",
  },
  secondaryText: {
    color: "#334155",
    fontWeight: "500",
  },
});
