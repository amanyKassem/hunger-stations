import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function ConfirmPayment({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.directionRow , {position:'absolute' , left:0}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('confirmPay') }</Text>
                    </View>


                    <View style={[styles.flexCenter , styles.marginTop_35]}>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('confirmPayDone') }</Text>
                        <Image source={require('../../assets/images/payment.png')} style={[styles.icon200 , styles.marginVertical_35]} resizeMode={'contain'} />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('home')} style={[styles.yellowBtn , styles.Width_95 , styles.SelfCenter]}>
                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('goHome') }</Text>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default ConfirmPayment;


