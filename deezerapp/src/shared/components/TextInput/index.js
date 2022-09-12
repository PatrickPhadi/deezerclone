import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from "./style";

const TextInputComponent = ({
    label,
    disabled,
    maxLength,
    keyboardType,
    value,
    onTouch,
    autoCapitalize = "words",
    textContentType,
    style,
    secureTextEntry,
    onChangeText,
}) => {

    return (
        <React.Fragment>
            <View style={[styles.container, style]}>
                <View style={styles.textInputContainer}>
                    <Text style={styles.label}>{label}</Text>
                    <TextInput
                        key={label}
                        value={value}
                        editable={!disabled}
                        maxLength={maxLength}
                        textContentType={textContentType}
                        secureTextEntry={secureTextEntry}
                        style={styles.containedInput}
                        onSubmitEditing={() => { }}
                        onTouchStart={onTouch}
                        autoCapitalize={autoCapitalize}
                        keyboardType={keyboardType}
                        returnKeyType='done'
                        onChangeText={e => onChangeText(e)}
                    />
                </View>
            </View>
        </React.Fragment>
    );
};

TextInputComponent.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    leftIconStyle: PropTypes.object,
    rightIconStyle: PropTypes.object,
    iconOnPress: PropTypes.func,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.any,
    keyboardType: PropTypes.string,
    textHelper: PropTypes.string,
};

export default React.memo(TextInputComponent);
