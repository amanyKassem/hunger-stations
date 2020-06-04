import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Switch, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Settings({navigation}) {

    const [switchValue, setSwitchValue] = useState(false);

    function toggleSwitch(value) {
        setSwitchValue(value);
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('settings') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                        <View onPress={() => navigation.navigate('language')} style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('language') }</Text>
                            </View>
                        </View>
                        <View style={[styles.marginVertical_20 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>


                        <View style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('offersNotification') }</Text>
                                <Switch
                                    style={{left:10}}
                                    onValueChange={() => toggleSwitch(!switchValue)}
                                    value={switchValue}
                                    trackColor={COLORS.yellow}
                                    thumbColor={COLORS.yellow}
                                />
                            </View>
                        </View>

                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default Settings;


