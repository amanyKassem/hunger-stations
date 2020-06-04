import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Communications from 'react-native-communications';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function PromoCode({navigation}) {

    const [promo, setPromo] = useState('123456999');

    function onCopy(promo) {
        Clipboard.setString(promo)
        Toast.show({
            text        	: i18n.t('textCopied'),
            type			: "primary",
            duration    	: 3000,
            textStyle   	: {
                color       	: "white",
                fontFamily  	: 'sukar',
                textAlign   	: 'center'
            }
        });
    }

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'hunger stations App',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('promoCode') }</Text>
                    </View>


                    <View style={[styles.directionColumnSpace, styles.marginTop_15 , {flex:1}]}>
                        <View style={[styles.paddingHorizontal_20 , styles.Width_100]}>
                            <View style={[styles.directionRow , styles.marginBottom_25]}>
                                <Image source={require('../../assets/images/symbol.png')} style={[styles.icon25 , {marginRight:10}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    { i18n.t('yourPromoCode') }
                                </Text>
                            </View>

                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray , styles.textCenter , styles.marginBottom_5]} >
                                هذا الكود يحمل التطبيبق وبعد اول طلب خلال 8 ساعات
                            </Text>

                            <TouchableOpacity onPress={() => onCopy(promo)} style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginTop_20 , styles.Width_100]}>
                                <Text style={[styles.labelText, styles.textRegular
                                    ,{ color: COLORS.gray , top :0 }]}>{ i18n.t('promoCode') }</Text>
                                <View style={[styles.directionColumnC,styles.input, styles.height_50, styles.Width_100 ,styles.noActive]}>
                                    <Text style={[styles.textRegular , styles.text_black , styles.alignStart]}>
                                        {promo}
                                    </Text>
                                    <Image source={require('../../assets/images/copy.png')} style={[styles.icon20 , {position:'absolute' , right:20 , top:12}]} resizeMode={'contain'} />
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={[{borderTopLeftRadius:50, borderTopRightRadius:50 , borderColor:'#ddd' , borderWidth:1 , borderBottomWidth:0},
                            styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_25 , styles.directionRowSpace]}>

                            <View style={[styles.directionRowCenter , styles.Width_100]}>
                                <TouchableOpacity onPress={() => Linking.openURL('sms:'+'0102345688'+'?body=yourMessage')}>
                                    <Image source={require('../../assets/images/sms.png')} style={[styles.icon25 , {marginRight:30}]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone='+'0102345688')}>
                                    <Image source={require('../../assets/images/whats.png')} style={[styles.icon25 , {marginRight:30}]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Communications.email(['amany@gmail'],null,null,'My Subject','My body text')}>
                                    <Image source={require('../../assets/images/email.png')} style={[styles.icon25 , {marginRight:30}]} resizeMode={'contain'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => onShare()}>
                                    <Image source={require('../../assets/images/share.png')} style={[styles.icon25 ]} resizeMode={'contain'} />
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>


                </View>

            </Content>
        </Container>
    );
}

export default PromoCode;


