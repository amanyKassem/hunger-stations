import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Support({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20, styles.transform , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('support') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                        <TouchableOpacity onPress={ () => navigation.push('myTickets')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Image source={require('../../assets/images/text.png')} style={[styles.icon20 , {marginRight:10}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('myTickets') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('generalQues')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('generalQues') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('orderQues')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('orderQues') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('technQues')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('technQues') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('aboutApp')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('aboutApp') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('serviceTerms')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('serviceTerms') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <TouchableOpacity onPress={ () => navigation.push('callUs')} style={[styles.directionRowSpace , styles.Width_100]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('callUs') }
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/left.png')} style={[styles.icon20, styles.transform]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default Support;


