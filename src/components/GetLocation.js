import React, { useState , useEffect , useRef} from "react";
import {View, Text, Image, TouchableOpacity , Switch} from "react-native";
import {Container, Content, Form, Input,} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from "axios";
import MapView from 'react-native-maps';
import COLORS from "../consts/colors";

const latitudeDelta = 0.0922;
const longitudeDelta = 0.0421;
const isIOS = Platform.OS === 'ios';

function GetLocation({navigation, route}) {
    let mapRef = useRef(null);
    const [desc, setDesc] = useState('');
    const [switchValue, setSwitchValue] = useState(false);
    const [city, setCity] = useState('');
    const [mapRegion, setMapRegion] = useState({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
        latitudeDelta ,
        longitudeDelta
    });

    const [initMap, setInitMap] = useState(true);

    function toggleSwitch(value) {
        setSwitchValue(value);
    }

    const fetchData = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        let userLocation = {};
        if (status !== 'granted') {
            alert('صلاحيات تحديد موقعك الحالي ملغاه');
        }else {
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
            if (route.params.latitude){
                userLocation = { latitude: route.params.latitude, longitude:route.params.longitude , latitudeDelta , longitudeDelta};
            } else {
                userLocation = { latitude, longitude , latitudeDelta , longitudeDelta};
            }
            setInitMap(false);
            setMapRegion(userLocation);
            isIOS ? mapRef.current.animateToRegion(userLocation, 1000) : false;
        }
        let getCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        getCity    += userLocation.latitude + ',' + userLocation.longitude;
        getCity    += '&key=AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ&language=ar&sensor=true';
        console.log("getCity  " , getCity)
        // ReactotronConfig.log(getCity);
        try {
            const { data } = await axios.get(getCity);
            setCity(data.results[0].formatted_address)
            console.log("city  " , data.results[0].formatted_address)
            console.log("city  " , city)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(  () => {
        fetchData();
    }, []);

    useEffect(  () => {
    }, [city , mapRegion ]);



    const _handleMapRegionChange  = async (mapCoordinate) =>  {

        setMapRegion({ latitude: mapCoordinate.latitude, longitude: mapCoordinate.longitude, latitudeDelta, longitudeDelta});

        let getCity = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
        getCity += mapCoordinate.latitude + ',' + mapCoordinate.longitude;
        getCity += '&key=AIzaSyCJTSwkdcdRpIXp2yG7DfSRKFWxKhQdYhQ&language=ar&sensor=true';

        console.log('locations data', getCity);

        try {
            const { data } = await axios.get(getCity);
            setCity(data.results[0].formatted_address)
            console.log("city2  " , data.results[0].formatted_address)
            console.log("city2 " , city)

        } catch (e) {
            console.log(e);
        }
    };
    function getLoc(){
        console.log("mapRegion button" ,mapRegion);
        console.log("city3 " , city);
        navigation.navigate('tabs', {
            screen: 'home',
            params: { cityName:city },
        })
    }
    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>

                <View style={[styles.paddingHorizontal_25  , styles.position_R , styles.Width_100 , styles.paddingTop_50]}>

                    <View style={[styles.directionRowCenter , styles.Width_100]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{position:'absolute' , right:0}}>
                            <Image source={require('../../assets/images/close.png')} style={[styles.icon20]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_20, {textAlign: 'center'}]}>{ i18n.t('selectLoc') }</Text>
                    </View>

                    <View style={[styles.overlay_white , styles.marginTop_25 , styles.paddingVertical_25 , styles.paddingHorizontal_10 , styles.Radius_10]}>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14, {textAlign: 'center'}]}>{city}</Text>
                    </View>

                </View>
                {
                    !initMap && mapRegion.latitude != null? (
                        <MapView
                            ref={mapRef}
                            style={{ width: '100%', height: '100%' , position:'absolute' , top:0, }}
                            initialRegion={mapRegion}>
                            <MapView.Marker
                                draggable
                                coordinate={mapRegion}
                                onDragEnd={(e) => _handleMapRegionChange(e.nativeEvent.coordinate)}
                            >
                                <Image source={require('../../assets/images/confirmation_location.png')} resizeMode={'contain'} style={{ width: 35, height: 35 }}/>
                            </MapView.Marker>
                        </MapView>
                    ) : (<View />)
                }
                <View style={[{position:'absolute'  , bottom:20 },styles.flexCenter , styles.paddingHorizontal_25 , styles.Width_100]}>
                    <View style={[styles.overlay_white , styles.paddingVertical_25 , styles.paddingHorizontal_10 , styles.Radius_10, styles.Width_100]}>
                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_16  , styles.marginBottom_15]}>
                            { i18n.t('desc')}
                        </Text>
                        <Input style={[styles.input, styles.height_50,styles.noActive , {borderColor:COLORS.lightGray}]}
                               onChangeText={(desc) => setDesc(desc)}
                        />

                        <View style={[styles.Width_100 , styles.directionRowSpace , styles.marginTop_15]}>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_13]}>
                                {i18n.t('saveLoc')}
                            </Text>
                            <Switch
                                style={{}}
                                onValueChange={() => toggleSwitch(!switchValue)}
                                value={switchValue}
                                trackColor={COLORS.yellow}
                                thumbColor={COLORS.yellow}
                            />
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => getLoc()} style={[styles.yellowBtn , styles.Width_100]}>
                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_16 ]}>
                            { i18n.t('confirm')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Content>

        </Container>
    );
}

export default GetLocation;


