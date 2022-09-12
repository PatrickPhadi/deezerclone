import { StyleSheet } from 'react-native';
import { width, colors } from "../../assets/theme";

export default StyleSheet.create({
    label: {
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0,
        color: colors.darkgrey,
    },
    textInputContainer: {
        flex: 3,
        flexDirection: "column",
        height: 65
    },
    containedInput: {
        fontStyle: 'normal',
        fontSize: width * .042,
        borderColor: colors.lightgrey,
        borderWidth: .5,
        marginVertical: 3,
        paddingLeft: 5,
        borderRadius: 5,
        minHeight: width * .103,
        backgroundColor: colors.lightgrey,
        color: colors.darkgrey,
        height: width * .106,
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
        marginVertical: 12,
    },
    rightTextWrapper: {
        position: "absolute",
        zIndex: 99,
        right: 0,
        top: width * .064,
        alignContent: "center",
        padding: 7,
        paddingRight: 8
    },
});