import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function PaymentMethods({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20, styles.transform , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('payMethods') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                        <TouchableOpacity onPress={() => navigation.navigate('addNewCard')} style={[ styles.Width_100]}>
                           <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                               <View style={[styles.directionRow]}>
                                   <Image source={require('../../assets/images/credit.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                   <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('addNewCard') }</Text>
                               </View>
                               <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                           </View>
                           <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14 , {marginLeft:35}]}>{ i18n.t('noCard') }</Text>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                        <TouchableOpacity onPress={() => navigation.push('wallet')} style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <View style={[styles.directionRow]}>
                                    <Image source={require('../../assets/images/wallet.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                    <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('wallet') }</Text>
                                </View>
                                <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14 , {marginLeft:35}]}>20 ريال</Text>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                        <TouchableOpacity onPress={() => navigation.push('voucher')}  style={[styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <View style={[styles.directionRow]}>
                                    <Image source={require('../../assets/images/gift.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                    <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('voucher') }</Text>
                                </View>
                                <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default PaymentMethods;


