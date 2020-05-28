import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Communications from 'react-native-communications';

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
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('payMethods') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>

                        <TouchableOpacity onPress={() => navigation.navigate('addNewCard')} style={[styles.directionRowSpace , styles.Width_100]}>
                           <View>
                               <View style={[styles.directionRow]}>
                                   <Image source={require('../../assets/images/credit.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                   <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('addNewCard') }</Text>
                               </View>
                               <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14 , {marginLeft:35}]}>{ i18n.t('noCard') }</Text>
                           </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                        <TouchableOpacity style={[styles.directionRowSpace , styles.Width_100]}>
                           <View>
                               <View style={[styles.directionRow]}>
                                   <Image source={require('../../assets/images/wallet.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                   <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('wallet') }</Text>
                               </View>
                               <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14 , {marginLeft:35}]}>{ i18n.t('credit') } 20 ريال</Text>
                           </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                        <TouchableOpacity style={[styles.directionRowSpace , styles.Width_100]}>
                           <View>
                               <View style={[styles.directionRow]}>
                                   <Image source={require('../../assets/images/gift.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                   <Text style={[styles.textRegular , styles.text_black  , styles.textSize_14 , styles.marginBottom_5]}>{ i18n.t('voucher') }</Text>
                               </View>
                           </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>
                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default PaymentMethods;


