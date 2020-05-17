import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import { getOffers , getMyServices , profile , logout , tempAuth } from '../actions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Home({navigation}) {

    return (
        <Container>
                <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>
                    <Text>Homeeee</Text>
                </Content>
        </Container>
    );
}

export default Home;


