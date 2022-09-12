import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    spinnerWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    spinner: {
        justifyContent: 'center',
        backgroundColor: '#313131f5',
        borderRadius: 10,
        zIndex: 99999,
        height: 90,
        width: 90
    }
})