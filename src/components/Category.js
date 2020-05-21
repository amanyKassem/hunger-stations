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

function Category({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <View style={[styles.height_200]}>
                    <Image source={require('../../assets/images/img2.png')} style={[styles.heightFull , styles.Width_100]} resizeMode={'cover'} />
                </View>
                <View style={[styles.paddingHorizontal_25 , styles.bgFullWidth, styles.Width_100]}>


                </View>

            </Content>
        </Container>
    );
}

export default Category;


