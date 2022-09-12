import React from 'react'
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, View } from 'react-native'
import { getArtistInfo, searchArtist } from "../../appSlice/artistSlice";
import { fansNumToString } from "../../shared/utils";
import { TextInput, ItemInfo } from "../../shared/components";

const Artists = (props) => {
    const [searchValue, setSearchValue] = React.useState("");
    const dispatch = useDispatch();
    const { navigation } = props;
    const { artists, artistInfo } = useSelector(state => state);

    React.useEffect(() => {
        if (!isEmpty(artistInfo)) {
            navigation.navigate("details");
        }
    }, [artistInfo]);

    const handleViewDetails = (artistId) => {
        if (!artistId) return null;
        dispatch(getArtistInfo(artistId));
    };

    const handleSearch = React.useCallback((value) => {
        setSearchValue(value);
        if (value.length > 2) {
            dispatch(searchArtist(value));
        }
    }, [searchValue]);

    return (
        <View style={{ flex: 1 }}>
            <TextInput label='Search Artist' value={searchValue} onChangeText={handleSearch} />
            <FlatList
                numColumns={2}
                data={artists}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <ItemInfo
                        title={item.name}
                        picture={item.picture}
                        itemId={item.id}
                        description={`Fans:  ${fansNumToString(item.nb_fan)}`}
                        onPress={handleViewDetails} />
                )}
                contentContainerStyle={{ margin: 20 }}
                columnWrapperStyle={{ justifyContent: "space-around" }}
            />
        </View>
    )
}

export default Artists;