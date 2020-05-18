import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions} from "react-native";
import {Container, Content, Card, Label, Textarea} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import  Modal  from "react-native-modal";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Home({navigation}) {

    const [showModal, setShowModal] = useState(false);

    function toggleModal () {
        setShowModal(!showModal);
    };


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

                <View style={[styles.paddingHorizontal_25 , styles.bgFullWidth, styles.Width_100]}>
                   <TouchableOpacity onPress={toggleModal}>
                       <Card style={[styles.bg_White, styles.directionRowSpace , styles.paddingHorizontal_10 , styles.Radius_10 , {height:50 , top:-30}]}>
                           <View style={[styles.directionRow]}>
                               <Image source={require('../../assets/images/location.png')} style={[styles.icon15]} resizeMode={'contain'} />
                               <Text style={[styles.textRegular , styles.text_light_gray , styles.textSize_14 , styles.marginHorizontal_5]}>|</Text>
                               <Text style={[styles.textRegular , styles.text_light_gray , styles.textSize_14]}>{ i18n.t('selectTo') }</Text>
                           </View>
                           <Image source={require('../../assets/images/dropdown.png')} style={[styles.icon15]} resizeMode={'contain'} />
                       </Card>
                   </TouchableOpacity>

                    <View style={[styles.directionColumnCenter]}>
                        <Image source={require('../../assets/images/map.png')} style={[styles.icon200]} resizeMode={'contain'} />
                        <Text style={[styles.textBold , styles.text_gray , styles.textSize_20 , {textAlign:'center'}]}>{ i18n.t('appLoc') }</Text>
                        <TouchableOpacity style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_15]}>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('manuallyLoc') }</Text>
                        </TouchableOpacity>
                        {/*<Text style={[styles.textRegular , styles.text_black  , styles.textSize_16 , styles.textDecoration]}>{ i18n.t('manuallyLoc') }</Text>*/}
                    </View>

                </View>
                <Modal
                    onBackdropPress                 ={toggleModal}
                    onBackButtonPress               = {toggleModal}
                    isVisible                       = {showModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderTopLeftRadius:10,
                        borderTopRightRadius:10},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_10]}>
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


