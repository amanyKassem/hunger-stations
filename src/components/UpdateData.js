import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Switch, Dimensions , I18nManager , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Swiper from 'react-native-swiper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function UpdateData({navigation}) {

    return (
        <Container>
            <View style={[styles.swiperOverLay]}/>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>
                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('updateData') }</Text>
                    </View>

                    <View style={[styles.height_250 , styles.marginTop_25]}>
                        <Swiper dotStyle={[styles.doteStyle]}
                                activeDotStyle={[styles.activeDot]} key={4}
                                containerStyle={[styles.heightFull , styles.bg_White , styles.marginHorizontal_25]}
                                showsButtons={true}
                                buttonWrapperStyle={[styles.bg_light_gray , styles.height_50, styles.paddingHorizontal_15 , {zIndex:-1}]}
                                prevButton={<Text style={[styles.textBold ,{color:'#000'}]}>{ i18n.t('back') }</Text>}
                                nextButton={<Text style={[styles.textBold ,{color:'#000'}]}>{ i18n.t('next') }</Text>}
                                autoplay={false} loop={false}>

                            <View style={[styles.directionColumnCenter, styles.flexCenter]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_18, styles.textCenter , styles.marginBottom_10 ]}>سؤال</Text>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_14, styles.textCenter ]}>جواب</Text>
                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_18, styles.textCenter , styles.marginBottom_10 ]}>سؤال</Text>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_14, styles.textCenter ]}>جواب</Text>
                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_18, styles.textCenter , styles.marginBottom_10 ]}>سؤال</Text>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_14, styles.textCenter ]}>جواب</Text>
                            </View>

                            <View style={[styles.directionColumnCenter, styles.flexCenter]}>
                                <Text style={[styles.textBold , styles.text_black , styles.textSize_18, styles.textCenter , styles.marginBottom_10 ]}>سؤال</Text>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_14, styles.textCenter ]}>جواب</Text>
                            </View>

                        </Swiper>
                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default UpdateData;


