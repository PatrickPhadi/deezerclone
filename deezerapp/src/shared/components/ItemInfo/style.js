import { StyleSheet } from 'react-native';
import { colors, width } from '../../assets/theme';

export default StyleSheet.create({
    title: {
        fontSize: width * .037
    },
    container: {
        borderWidth: 1,
        borderColor: colors.lightgrey,
        margin: 5
    },
    picture: {
        width: width * .43,
        height: width * .42
    },
    content: {
        width: width * .43,
        marginVertical: 5,
        padding: 5
    },
    description: {
        marginVertical: 3,
        color: colors.darkgrey,
        fontWeight: "bold",
    }
})