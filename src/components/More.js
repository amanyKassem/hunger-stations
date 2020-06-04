import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function More({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                    <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('more') }</Text>
                </View>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                    <TouchableOpacity onPress={ () => navigation.push('promoCode')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/symbol.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('promoCode') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('account')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/user.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('account') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('paymentMethods')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/credit.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('payMethods') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('bills')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/bills.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('bills') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('support')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/contact.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('support') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('settings')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/settings.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('settings') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={ () => navigation.push('updateData')} style={[styles.directionRowSpace , styles.Width_100]}>
                        <View style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/update.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('updateData') }
                            </Text>
                        </View>
                        <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                </View>

            </Content>
        </Container>
    );
}

export default More;


