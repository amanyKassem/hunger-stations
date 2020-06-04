import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function MyTickets({navigation}) {

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('myTickets') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>
                        <Text style={[styles.textRegular , styles.text_gray  , styles.textSize_15 ,{lineHeight:24}]}>
                            هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال
                            هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال
                            هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال
                            هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال
                            هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال هذا النص هو مثال
                        </Text>

                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default MyTickets;


