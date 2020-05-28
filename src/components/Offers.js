import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Swiper from "./LocationProducts";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Offers({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                    <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('offers') }</Text>
                </View>

                <View style={[ styles.bgFullWidth, styles.Width_100]}>
                    <TouchableOpacity onPress={() => navigation.push('category', {catType:1})}>
                        <Image source={require('../../assets/images/image_one.png')} style={[styles.Width_100 , styles.height_200, styles.marginBottom_20]} resizeMode={'cover'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push('category', {catType:1})}>
                        <Image source={require('../../assets/images/image_two.png')} style={[styles.Width_100 , styles.height_200, styles.marginBottom_20]} resizeMode={'cover'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push('category', {catType:1})}>
                        <Image source={require('../../assets/images/image_three.png')} style={[styles.Width_100 , styles.height_200, styles.marginBottom_20]} resizeMode={'cover'} />
                    </TouchableOpacity>
                </View>

            </Content>
        </Container>
    );
}

export default Offers;


