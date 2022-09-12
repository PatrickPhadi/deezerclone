import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styles from "./style";

const ItemInfo = ({
    title, picture, itemId, description, style, contentContainerStyle,
    titleStyle, descriptionStyle, pictureStyle, onPress
}) => (
    <Pressable disabled={!onPress} onPress={() => onPress(itemId)}>
        <View style={[styles.container, style]}>
            <Image style={[styles.picture, pictureStyle]} source={{ uri: picture }} />
            <View style={[styles.content, contentContainerStyle]}>
                <Text numberOfLines={1} ellipsizeMode="tail"
                    style={[styles.title, titleStyle]}>{title}</Text>
                <Text style={[styles.description, descriptionStyle]}>{description}</Text>
            </View>
        </View>
    </Pressable>
)

export default ItemInfo