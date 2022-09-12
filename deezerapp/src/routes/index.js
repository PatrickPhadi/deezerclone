import ArtistDetails from "../screens/artist";
import ArtistsList from "../screens/artists";

export const stackRoutes = [
    {
        title: 'Deezer Clone',
        component: ArtistsList,
        options: {
            headerBackTitle: '',
        }
    },
    {
        title: 'details',
        component: ArtistDetails,
        options: {
            headerBackTitle: '',
            title: "Artist Info"
        }
    }
];