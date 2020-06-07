import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Switch, Dimensions , I18nManager , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Swiper from 'react-native-swiper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function UpdateData({navigation}) {

    const [type, setType] = useState(0);
    const [name, setName] = useState(0);
    const [knowApp, setKnowApp] = useState(0);
    const [isDatePickerVisible , setIsDatePickerVisible ] = useState(false);
    const [swiperIndex , setIndex ] = useState(null);
    const [date , setDate ] = useState('');

    function selectType(selectedType) {
        setType(selectedType)
    }

    function nameType(selectedName) {
        setName(selectedName)
    }


    function howType(selectedHow) {
        setKnowApp(selectedHow)
    }

    function onSwipeIndexChanged(index) {
        setIndex(index)
        if(index === 1){
            setIsDatePickerVisible(true);
        }
        else{
            setIsDatePickerVisible(false)
        }
    }

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = myDate => {
        // console.warn("A date has been picked: ", myDate);
        let formatted_date = myDate.getFullYear() + "-" + ("0"+(myDate.getMonth() + 1)).slice(-2) + "-" + ("0" +myDate.getDate()).slice(-2);
        hideDatePicker();
        setDate(formatted_date);
    };

    return (
        <Container>
            <View style={[styles.swiperOverLay]}/>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>
                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20, styles.transform , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('updateData') }</Text>
                    </View>

                    <View style={[styles.height_350 , styles.marginTop_25]}>
                        <Swiper dotStyle={[styles.doteStyle]}
                                paginationStyle={[styles.SelfCenter, {bottom:317 , left:'35%', zIndex:1 , width:100}]}
                                activeDotStyle={[styles.activeDot]} key={4}
                                containerStyle={[styles.heightFull , styles.bg_White , styles.marginHorizontal_25]}
                                style={{ flexDirection: isIOS && I18nManager.isRTL  ? 'row' : 'row-reverse' }}
                                showsButtons={true}
                                buttonWrapperStyle={[styles.bg_light_gray , styles.height_50, styles.paddingHorizontal_15]}
                                prevButton={<Text style={[styles.textBold ,{color:'#000'}]}>{ i18n.t('back') }</Text>}
                                nextButton={<Text style={[styles.textBold ,{color:'#000'}]}>{ i18n.t('next') }</Text>}
                                autoplay={false} loop={false}
                                onIndexChanged={(index) => onSwipeIndexChanged(index)}>

                            <View style={[styles.directionColumnCenter, styles.flexCenter, styles.marginTop_80]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_15, styles.textCenter , styles.marginBottom_10 ]}>{ i18n.t('what') }</Text>

                               <View style={[styles.marginVertical_35]}>
                                   <TouchableOpacity onPress={() => selectType(0)}>
                                       <Text style={[styles.textBold , type === 0 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('unemployed') }</Text>
                                   </TouchableOpacity>
                                   <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:.5 , borderColor: '#ddd' , width}]}/>

                                   <TouchableOpacity onPress={() => selectType(1)}>
                                       <Text style={[styles.textBold , type === 1 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('employed') }</Text>
                                   </TouchableOpacity>
                                   <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:.5 , borderColor: '#ddd' , width}]}/>

                                   <TouchableOpacity onPress={() => selectType(2)}>
                                       <Text style={[styles.textBold , type === 2 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('student') }</Text>
                                   </TouchableOpacity>
                               </View>

                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter, styles.marginTop_80]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_15, styles.textCenter , styles.marginBottom_10 ]}>{ i18n.t('birthDate') }</Text>

                               <View style={[styles.marginVertical_35]}>

                                   <TouchableOpacity onPress={showDatePicker} style={[styles.directionRow]}>
                                       <Text style={[styles.textBold , styles.text_black  , styles.textSize_14, styles.textCenter ]}>{ i18n.t('date') } :</Text>
                                       <Text style={[styles.textBold , styles.text_light_gray  , styles.textSize_14, styles.textCenter , {marginLeft:5} ]}>{ date }</Text>
                                   </TouchableOpacity>

                                   <DateTimePickerModal
                                       isVisible={isDatePickerVisible}
                                       mode="date"
                                       onConfirm={handleConfirm}
                                       onCancel={hideDatePicker}
                                   />
                               </View>

                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter, styles.marginTop_80]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_15, styles.textCenter , styles.marginBottom_10 ]}>{ i18n.t('whatName') }</Text>

                                <View style={[styles.marginVertical_35]}>
                                    <TouchableOpacity onPress={() => nameType(0)}>
                                        <Text style={[styles.textBold , name === 0 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('longSpan') }</Text>
                                    </TouchableOpacity>
                                    <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:.5 , borderColor: '#ddd' , width}]}/>

                                    <TouchableOpacity onPress={() => nameType(1)}>
                                        <Text style={[styles.textBold , name === 1 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('longLife') }</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter, styles.marginTop_80 , {zIndex:10}]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_15, styles.textCenter , styles.marginBottom_10 ]}>{ i18n.t('howApp') }</Text>

                                <View style={[styles.marginVertical_35]}>
                                    <TouchableOpacity onPress={() => howType(0)}>
                                        <Text style={[styles.textBold , knowApp === 0 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t("dontRemember") }</Text>
                                    </TouchableOpacity>
                                    <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:.5 , borderColor: '#ddd' , width}]}/>

                                    <TouchableOpacity onPress={() => howType(1)}>
                                        <Text style={[styles.textBold , knowApp === 1 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('internetAds') }</Text>
                                    </TouchableOpacity>
                                    <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:.5 , borderColor: '#ddd' , width}]}/>

                                    <TouchableOpacity onPress={() => howType(2)}>
                                        <Text style={[styles.textBold , knowApp === 2 ? styles.text_black : styles.text_light_gray , styles.textSize_14, styles.textCenter ]}>{ i18n.t('socialInflu') }</Text>
                                    </TouchableOpacity>

                                </View>

                                {
                                    swiperIndex == '3' ?
                                        <TouchableOpacity onPress={() => navigation.navigate('more')} style={[styles.yellowBtn ,styles.SelfCenter ,{width:width -100 , marginTop:0}]}>
                                            <Text style={[styles.textBold , styles.text_black , styles.textSize_14]}>{ i18n.t('confirm') }</Text>
                                        </TouchableOpacity>
                                        :
                                        null
                                }

                            </View>

                        </Swiper>
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default UpdateData;


