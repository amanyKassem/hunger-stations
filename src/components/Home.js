import React, { useState , useEffect} from "react";
import {View, Text, Image, TouchableOpacity, Dimensions , ScrollView} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Home({navigation , route}) {

    const [showModal, setShowModal] = useState(false);
    const [cityName, setCityName] = useState('');


    function toggleModal () {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (route.params?.cityName) {
                setCityName(route.params.cityName.substr(0,25))
            }
        });

        return unsubscribe;
    }, [navigation , route.params?.cityName]);


    function navToLocation (latitude , longitude) {
        setShowModal(!showModal);
        navigation.push("getLocation" , {latitude , longitude})
    };

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>

                <View style={[styles.Width_100 , styles.bg_yellow , styles.flexCenter , styles.paddingVertical_45 ]}>
                    <Text style={[styles.textBold , styles.text_black , styles.textSize_20]}>Hunger station</Text>
                </View>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, {paddingBottom:10}]}>
                   <TouchableOpacity onPress={toggleModal}>
                       <Card style={[styles.bg_White, styles.directionRowSpace , styles.paddingHorizontal_10 , styles.Radius_10 , {height:50 , top:-30}]}>
                           <View style={[styles.directionRow]}>
                               <Image source={require('../../assets/images/location.png')} style={[styles.icon15]} resizeMode={'contain'} />
                               <Text style={[styles.textRegular , styles.text_light_gray , styles.textSize_14 , styles.marginHorizontal_5]}>|</Text>
                               <Text style={[styles.textRegular , styles.text_light_gray , styles.textSize_14]}>{ i18n.t('deliveryTo') } {cityName}</Text>
                           </View>
                           <Image source={require('../../assets/images/dropdown.png')} style={[styles.icon15]} resizeMode={'contain'} />
                       </Card>
                   </TouchableOpacity>
                    {
                        cityName === '' ?
                            <View style={[styles.directionColumnCenter]}>
                                <Image source={require('../../assets/images/map.png')} style={[styles.icon200]} resizeMode={'contain'} />
                                <Text style={[styles.textBold , styles.text_gray , styles.textSize_20 , {textAlign:'center'}]}>{ i18n.t('appLoc') }</Text>
                                <TouchableOpacity onPress={() => navigation.push("getLocation" , {latitude:null , longitude:null})} style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_15]}>
                                    <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('manuallyLoc') }</Text>
                                </TouchableOpacity>
                                {/*<Text style={[styles.textRegular , styles.text_black  , styles.textSize_16 , styles.textDecoration]}>{ i18n.t('manuallyLoc') }</Text>*/}
                            </View>
                            :
                            <ScrollView style={{height:400}}>
                                <View style={[styles.Radius_20 , styles.marginBottom_20 , {overflow:'hidden'}]}>
                                    <Image source={require('../../assets/images/2.png')} style={[styles.Radius_20 , styles.Width_100 , styles.height_230]} resizeMode={'cover'} />
                                    <View style={[styles.imgOverLay , styles.paddingHorizontal_20 , {justifyContent:'flex-end'}]}>
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('stayHome') }</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>اكلك مقاضيك وطلبات الصيدلية توصلك لبابك</Text>
                                        <TouchableOpacity onPress={ () => navigation.push('locationProduct')} style={[styles.yellowBtn , styles.Width_100 , styles.marginBottom_15 , {alignSelf:'center'}]}>
                                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('orderNow') }</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[styles.Radius_20 , styles.marginBottom_20 , {overflow:'hidden'}]}>
                                    <Image source={require('../../assets/images/3.png')} style={[styles.Radius_20 , styles.Width_100 , styles.height_230]} resizeMode={'cover'} />
                                    <View style={[styles.imgOverLay , styles.paddingHorizontal_20 , {justifyContent:'flex-end'}]}>
                                        <Text style={[styles.textBold , styles.text_White , styles.textSize_18 , styles.marginBottom_5]}>{ i18n.t('stayHome') }</Text>
                                        <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>اكلك مقاضيك وطلبات الصيدلية توصلك لبابك</Text>
                                        <TouchableOpacity onPress={ () => navigation.push('locationProduct')} style={[styles.yellowBtn , styles.Width_100 , styles.marginBottom_15 , {alignSelf:'center' , backgroundColor:'#fff'}]}>
                                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('orderNow') }</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                    }


                </View>


                <Modal
                    onBackdropPress                 ={toggleModal}
                    onBackButtonPress               = {toggleModal}
                    isVisible                       = {showModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderTopLeftRadius:50,
                        borderTopRightRadius:50},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_25]}>
                        <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginBottom_15]}>{ i18n.t('deliveryTo') }</Text>

                        <TouchableOpacity onPress={() => navToLocation()} style={[styles.directionRow ,styles.borderGray , styles.Radius_5 , styles.flexCenter , styles.Width_100 , styles.paddingVertical_10]}>
                            <Image source={require('../../assets/images/yellow_add.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_16]}>{ i18n.t('newLoc') }</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navToLocation(31.2587 ,32.2988)} style={[styles.Width_100 , styles.paddingVertical_10 , styles.marginTop_15 , {borderTopWidth:.3 , borderTopColor: '#eee'}]}>
                            <View style={[styles.directionRow , styles.marginBottom_15]}>
                                <Image source={require('../../assets/images/confirmation.png')} style={[styles.icon20]} resizeMode={'contain'} />
                                <Image source={require('../../assets/images/confirmation_location.png')} style={[styles.icon20 , styles.marginHorizontal_15]} resizeMode={'contain'} />
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_16]}>الرحمانية</Text>
                            </View>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16 , {marginLeft:20}]}>413 دقلة الرحمانيه 12363564541 ,115415454 </Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </Content>
        </Container>
    );
}

export default Home;


