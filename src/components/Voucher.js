import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Clipboard,
    Dimensions,
    Linking,
    Share,
    KeyboardAvoidingView
} from "react-native";
import {Container, Content, Form, Input, Item, Label, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Voucher({navigation}) {

    const [couponCode, setCoupon] = useState('');
    const [couponStatus, setCouponStatus] = useState(1);

    function activeInput(type) {
        if (type === 'couponCode' || couponCode !== '') setCouponStatus(1);
    }

    function unActiveInput(type) {
        if (type === 'couponCode' && couponCode === '') setCouponStatus(0);
    }

    function renderSubmit() {
        if (couponCode == '') {
            return (
                <View
                    style={[styles.yellowBtn , styles.Width_95 , {
                        backgroundColor:'#ccc'
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('charge') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onLoginPressed()} style={[styles.yellowBtn , styles.Width_95]}>
                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('charge') }</Text>
            </TouchableOpacity>
        );
    }

    function onLoginPressed() {

        navigation.navigate('paymentMethods')
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('voucher') }</Text>
                    </View>


                    <View style={[styles.directionColumnSpace, styles.marginTop_15 , {flex:1}]}>
                        <View style={[styles.paddingHorizontal_20 , styles.Width_100]}>
                            <KeyboardAvoidingView behavior={'padding'} style={[styles.keyboardAvoid]}>
                                <Form style={[styles.Width_100 , styles.flexCenter, styles.marginVertical_10]}>

                                    <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                        <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                            <Label style={[styles.label, styles.textRegular ,{ color:couponStatus === 1 ?  COLORS.black :  COLORS.gray , top:5}]}>{ i18n.t('couponCode') }</Label>
                                            <Input style={[styles.input, styles.height_50, (couponStatus === 1 ? styles.Active : styles.noActive)]}
                                                   onChangeText={(couponCode) => setCoupon(couponCode)}
                                                   onBlur={() => unActiveInput('couponCode')}
                                                   onFocus={() => activeInput('couponCode')}
                                                   keyboardType={'number-pad'}
                                            />
                                        </Item>
                                    </View>

                                    {renderSubmit()}


                                </Form>
                            </KeyboardAvoidingView>

                        </View>


                    </View>


                </View>

            </Content>
        </Container>
    );
}

export default Voucher;


