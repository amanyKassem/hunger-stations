import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Orders({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                    <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('orders') }</Text>
                </View>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>
                    <TouchableOpacity onPress={() => navigation.push('product' , {catType:0})} style={[{flexDirection:'row'}]}>
                        <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                        <View style={[styles.productCard]}>
                            <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                    الطازج
                                </Text>

                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                لم يتم التوصيل
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.alignStart]} >
                               3/5/2020
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={() => navigation.push('product' , {catType:0})} style={[{flexDirection:'row'}]}>
                        <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                        <View style={[styles.productCard]}>
                            <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                    الطازج
                                </Text>

                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                لم يتم التوصيل
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.alignStart]} >
                               3/5/2020
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                    <TouchableOpacity onPress={() => navigation.push('product' , {catType:0})} style={[{flexDirection:'row'}]}>
                        <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                        <View style={[styles.productCard]}>
                            <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                    الطازج
                                </Text>

                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                لم يتم التوصيل
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.alignStart]} >
                               3/5/2020
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'95%'}]}/>

                </View>

            </Content>
        </Container>
    );
}

export default Orders;


