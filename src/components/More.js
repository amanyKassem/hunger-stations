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
            <Content contentContainerStyle={[styles.bgFullWidth]}>

                <View style={[styles.Width_100 , styles.bg_yellow , styles.flexCenter , styles.paddingVertical_45 ]}>
                    <Text style={[styles.textBold , styles.text_black , styles.textSize_20]}>Hunger station</Text>
                </View>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>


                </View>

            </Content>
        </Container>
    );
}

export default More;


