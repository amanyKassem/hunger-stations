import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function PayMethods({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , right:0}]}>
                            <Text style={[styles.textRegular , styles.text_yellow , styles.textSize_17]}>{ i18n.t('cancel') }</Text>
                        </TouchableOpacity>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_17, {textAlign: 'center'}]}>{ i18n.t('payMethods') }</Text>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('addNewCard')} style={[styles.directionRow , styles.marginBottom_15 , styles.borderGray , styles.paddingHorizontal_15 , styles.paddingVertical_5 , styles.Radius_10]}>
                        <Image source={require('../../assets/images/credit.png')} style={[styles.icon35 , {marginRight:5}]} resizeMode={'contain'} />
                        <View style={[{marginLeft:10}]}>
                            <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('addNewCard') }</Text>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>{ i18n.t('noCard') }</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.directionRow , styles.marginBottom_15 , styles.borderGray , styles.paddingHorizontal_15 , styles.paddingVertical_5 , styles.Radius_10]}>
                        <Image source={require('../../assets/images/master.png')} style={[styles.icon35 , {marginRight:5}]} resizeMode={'contain'} />
                        <View style={[{marginLeft:10}]}>
                            <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('masterCard') }</Text>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>مستر كارد الخاصه بكم تنتهي 1233*****</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.directionRow , styles.marginBottom_15 , styles.borderGray , styles.paddingHorizontal_15 , styles.paddingVertical_5 , styles.Radius_10]}>
                        <Image source={require('../../assets/images/paypal.png')} style={[styles.icon35, {marginRight:5 }]} resizeMode={'contain'} />
                        <View style={[{marginLeft:10}]}>
                            <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('payPal') }</Text>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>باي بال الخاصه بكم تنتهي 1233*****</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </Content>
        </Container>
    );
}

export default PayMethods;


