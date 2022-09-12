import React from 'react'
import { View, FlatList, ImageBackground, Text, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { unmountArtist } from "../../appSlice/artistSlice";
import { ItemInfo } from '../../shared/components';
import { fansNumToString, getYear, durationToRatio } from "../../shared/utils";
import style from './style';

const Artist = () => {
    const dispatch = useDispatch();
    const { artist, albums, tracks } = useSelector(state => state.artistInfo);

    React.useEffect(() => {
        return () => {
            dispatch(unmountArtist());
        }
    }, []);

    return (
        <ScrollView style={style.container}>
            <ImageBackground blurRadius={240} style={style.artistWrapper} source={{ uri: artist?.picture_medium }}>
                <ItemInfo
                    style={style.itemWrapper}
                    title={artist?.name}
                    picture={artist?.picture_medium}
                    pictureStyle={style.picture}
                    contentContainerStyle={style.artistContent}
                    titleStyle={style.titleStyle}
                    descriptionStyle={style.descriptionStyle}
                    description={`Fans ${fansNumToString(artist?.nb_fan)}`}
                />
            </ImageBackground>
            <View style={style.contentWrapper}>
                <Text style={style.title}>Top Tracks</Text>
                {tracks?.data.map((track, key) =>
                    <View style={style.trackWrapper} key={key}>
                        <Text style={style.trackTitle}>{track.title}</Text>
                        <Text>{durationToRatio(track.duration)}</Text>
                    </View>)}
                <Text style={style.title}>Albums</Text>
                <FlatList
                    data={albums?.data}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <ItemInfo
                            title={item.title}
                            picture={item.cover_medium}
                            itemId={item.id}
                            description={`Released:  ${getYear(item.release_date)}`} />
                    )}
                    contentContainerStyle={{ alignItems: "center", justifyContent: "space-between" }}
                />
            </View>
        </ScrollView>
    )
}

export default Artist