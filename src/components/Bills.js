import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Bills({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20, styles.transform , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('bills') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                        <View style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>الطازج</Text>
                                <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>30/5/2020</Text>
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14, styles.alignStart]}>1236584445</Text>
                        </View>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                        <View style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>الطازج</Text>
                                <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>30/5/2020</Text>
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14, styles.alignStart]}>1236584445</Text>
                        </View>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                        <View style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>الطازج</Text>
                                <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>30/5/2020</Text>
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14, styles.alignStart]}>1236584445</Text>
                        </View>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                        <View style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>الطازج</Text>
                                <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14]}>30/5/2020</Text>
                            </View>
                            <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_14, styles.alignStart]}>1236584445</Text>
                        </View>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>

                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default Bills;


