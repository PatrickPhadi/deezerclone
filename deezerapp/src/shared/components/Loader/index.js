import React from "react";
import { ActivityIndicator, View, Modal } from "react-native";
import styles from "./style";
import { colors } from "../../assets/theme";

const LoaderComponent = ({ transparent = true }) => (
    <Modal visible={true} transparent={transparent}>
        <View style={styles.spinnerWrapper}>
            <View style={styles.spinner}>
                <ActivityIndicator size="large" color={colors.red} />
            </View>
        </View>
    </Modal>
);

export default LoaderComponent;