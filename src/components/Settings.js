import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Switch, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Form, Icon, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";
import {useSelector, useDispatch} from 'react-redux';
import { chooseLang } from '../actions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Settings({navigation}) {

    const [switchValue, setSwitchValue] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const language = useSelector(state => state.lang);
    const [lang, setLang] = useState(language.lang);
    console.log("language" , language.lang)

    const dispatch = useDispatch()

    function selectLang(lang) {
        setLang(lang)
    }
    function onChooseLang(){
        setShowModal(!showModal);
        navigation.navigate('settings');
        dispatch(chooseLang(lang))
    }

    function toggleModal () {
        setShowModal(!showModal);
    };

    function toggleSwitch(value) {
        setSwitchValue(value);
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20, styles.transform , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('settings') }</Text>
                    </View>

                    <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>

                        <TouchableOpacity onPress={toggleModal} style={[ styles.Width_100]}>
                            <View style={[styles.directionRowSpace , styles.marginBottom_5]}>
                                <Text style={[styles.textBold , styles.text_black  , styles.textSize_14]}>{ i18n.t('language') }</Text>
                            </View>
                        </TouchableOpacity>
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

                    <Modal
                        onBackdropPress                 ={toggleModal}
                        onBackButtonPress               = {toggleModal}
                        isVisible                       = {showModal}
                        style                           = {styles.bgModel}
                        avoidKeyboard                    = {true}
                    >

                        <View style={[{borderTopLeftRadius:50,
                            borderTopRightRadius:50},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_25]}>
                            <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginBottom_15]}>{ i18n.t('chooseLang') }</Text>

                            <TouchableOpacity onPress={() => selectLang('ar')} style={[styles.chooseLang , styles.directionRowSpace , lang === 'ar' ? styles.Active : styles.noActive , styles.marginBottom_25]}>
                                <Text style={[styles.textRegular , lang === 'ar' ? styles.text_yellow : styles.text_gray , styles.textSize_14]}>عربي</Text>
                                <Icon style={[styles.textSize_20 , lang === 'ar' ? styles.text_yellow : styles.text_gray ]} type="Feather" name={lang === 'ar' ? 'check' : ''} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => selectLang('en')} style={[styles.chooseLang , styles.directionRowSpace , lang === 'en' ? styles.Active : styles.noActive ]}>
                                <Text style={[styles.textRegular , lang === 'en' ? styles.text_yellow : styles.text_gray , styles.textSize_14]}>English</Text>
                                <Icon style={[styles.textSize_20 , lang === 'en' ? styles.text_yellow : styles.text_gray ]} type="Feather" name={lang === 'en' ? 'check' : ''} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={onChooseLang} style={[styles.yellowBtn , styles.Width_100 , styles.marginTop_25 , styles.marginBottom_15]}>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                            </TouchableOpacity>

                        </View>

                    </Modal>
                </View>

            </Content>
        </Container>
    );
}

export default Settings;


