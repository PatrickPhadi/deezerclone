import { StyleSheet } from 'react-native'
import { colors, width } from '../../shared/assets/theme'

export default StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 40
    },
    itemWrapper: {
        borderWidth: 0,
        margin: 0
    },
    artistWrapper: {
        flex: .5,
        justifyContent: "center",
        alignItems: "center"
    },
    artistContent: {
        width: width * .6,
        opacity: .6,
        backgroundColor: colors.darkgrey
    },
    picture: {
        width: width * .6,
        height: width * .6,
    },
    contentWrapper: {
        flex: .5,
        marginVertical: 10,
        marginHorizontal: 20
    },
    trackWrapper: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.lightgrey,
        marginVertical: 5
    },
    trackTitle: {
        flex: 1,
        fontWeight: "bold",
        fontSize: width * .04,
        color: colors.darkgrey,
    },
    titleStyle: {
        fontSize: width * .045,
        color: colors.white
    },
    descriptionStyle: {
        fontSize: width * .045,
        color: colors.white
    },
    title: {
        fontWeight: "bold",
        fontSize: width * .05,
        color: colors.darkgrey,
        marginVertical: 20
    },
})