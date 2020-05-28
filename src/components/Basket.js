import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card, Item, Label, Input, Form} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Basket({navigation}) {

    const [showNoteModal, setNoteModal] = useState(false);
    const [note, setNote] = useState('');
    const [noteStatus, setNoteStatus] = useState(0);

    const [showCouponModal, setCouponModal] = useState(false);
    const [coupon, setCoupon] = useState('');
    const [couponStatus, setCouponStatus] = useState(0);

    const [showPromoModal, setPromoModal] = useState(false);
    const [promo, setPromo] = useState('');
    const [promoStatus, setPromoStatus] = useState(0);

    function toggleNoteModal () {
        setNoteModal(!showNoteModal);
    };
    function confirmNote () {
        setNoteModal(!showNoteModal);
    };

    function toggleCouponModal () {
        setCouponModal(!showCouponModal);
    };
    function confirmCoupon () {
        setCouponModal(!showCouponModal);
    };

    function togglePromoModal () {
        setPromoModal(!showPromoModal);
    };
    function confirmPromo () {
        setPromoModal(!showPromoModal);
    };

    function activeInput(type) {
        if (type === 'note' || note !== '') setNoteStatus(1);
        if (type === 'coupon' || coupon !== '') setCouponStatus(1);
        if (type === 'promo' || promo !== '') setPromoStatus(1);
    }

    function unActiveInput(type) {
        if (type === 'note' && note === '') setNoteStatus(0);
        if (type === 'coupon' && coupon === '') setCouponStatus(0);
        if (type === 'promo' && promo === '') setPromoStatus(0);
    }

    function renderSubmitNote() {
        if (note == '') {
            return (
                <View
                    style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20 , {
                        backgroundColor:'#ccc',
                        marginTop:0
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity onPress={confirmNote} style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20,{
                marginTop:0}]}>
                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
            </TouchableOpacity>
        );
    }

    function renderSubmitCoupon() {
        if (coupon == '') {
            return (
                <View
                    style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20 , {
                        backgroundColor:'#ccc',
                        marginTop:0
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity onPress={confirmCoupon} style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20,{
                marginTop:0}]}>
                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
            </TouchableOpacity>
        );
    }

    function renderSubmitPromo() {
        if (promo == '') {
            return (
                <View
                    style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20 , {
                        backgroundColor:'#ccc',
                        marginTop:0
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity onPress={confirmPromo} style={[styles.yellowBtn , styles.Width_95 , styles.marginBottom_20,{
                marginTop:0}]}>
                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
            </TouchableOpacity>
        );
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>
                    <View style={[styles.directionRowSpace , styles.Width_100]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textRegular , styles.text_yellow , styles.textSize_17]}>{ i18n.t('menu') }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleNoteModal} style={[styles.directionRow]}>
                            <Image source={require('../../assets/images/chat.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.marginTop_25]}>
                        <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                            { i18n.t('orderDetails') }
                        </Text>
                        <View style={[styles.directionRowSpace , styles.marginTop_15]}>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_aqua ,{marginRight:5}]} >
                                    2
                                </Text>
                                <Image source= {require('../../assets/images/blue_close.png')} style={[styles.icon15 ,{marginRight:5}]} resizeMode={'contain'} />
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                    سلة طعام
                                </Text>
                            </View>
                            <View style={[styles.directionRow]}>
                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray ,{marginRight:5}]} >
                                    250 ريال
                                </Text>
                                <Image source= {require('../../assets/images/red_close.png')} style={[styles.icon15 ,{marginRight:5}]} resizeMode={'contain'} />
                            </View>
                        </View>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <View style={[styles.directionRowSpace ]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('payMethod') }
                            </Text>
                            <TouchableOpacity onPress={() => navigation.push('payMethods')} style={[styles.bg_lightYellow ,styles.paddingHorizontal_25 , styles.Radius_15, styles.paddingVertical_5 ]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    { i18n.t('choose') }
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                            { i18n.t('deliveryAddress') }
                        </Text>
                        <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginTop_10]} >
                            المنصورة ان شاء الله
                        </Text>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                            { i18n.t('deliveryTime') }
                        </Text>
                        <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginTop_10]} >
                            40 - 50 دقيقه
                        </Text>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <View style={[styles.directionRowSpace ]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('couponCode') }
                            </Text>
                            <TouchableOpacity onPress={toggleCouponModal} style={[styles.bg_lightYellow ,styles.paddingHorizontal_25 , styles.Radius_15, styles.paddingVertical_5 ]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    { i18n.t('enterCouponCode') }
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <View style={[styles.directionRowSpace ]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black]} >
                                { i18n.t('promoCode') }
                            </Text>
                            <TouchableOpacity onPress={togglePromoModal} style={[styles.bg_lightYellow ,styles.paddingHorizontal_25 , styles.Radius_15, styles.paddingVertical_5 ]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    { i18n.t('enterPromoCode') }
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'100%'}]}/>
                        <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black , styles.marginBottom_10]} >
                            { i18n.t('payDet') }
                        </Text>
                        <View style={[styles.directionRowSpace , styles.marginBottom_10 ]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray]} >
                                { i18n.t('orderTotal') }
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                250 ريال
                            </Text>
                        </View>
                        <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray]} >
                                { i18n.t('deliveryCharge') }
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                250 ريال
                            </Text>
                        </View>
                        <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray]} >
                                { i18n.t('total') }
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black ]} >
                                250 ريال
                            </Text>
                        </View>
                        <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray, styles.textCenter, styles.marginTop_15]} >
                            { i18n.t('VAT') }
                        </Text>
                        <TouchableOpacity onPress={ () => navigation.navigate('confirmPayment')} style={[styles.yellowBtn , styles.marginBottom_20 , {backgroundColor:'#00165e'}]}>
                            <Image source= {require('../../assets/images/paypal.png')} style={[{width:150, height:80}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Modal
                    onBackdropPress                 ={toggleNoteModal}
                    onBackButtonPress               = {toggleNoteModal}
                    isVisible                       = {showNoteModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderTopLeftRadius:50, borderTopRightRadius:50},styles.bg_White, styles.overHidden, styles.Width_100,
                        styles.paddingVertical_25 , styles.paddingHorizontal_25 , styles.flexCenter]}>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginBottom_15,styles.marginTop_10]}>{ i18n.t('anyNotes') }</Text>

                        <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginTop_15]}>
                            <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                <Label style={[styles.label, styles.textRegular ,{ color:noteStatus === 1 ?  COLORS.black :  COLORS.gray}]}>{ i18n.t('notes') }</Label>
                                <Input style={[styles.input, styles.height_50, (noteStatus === 1 ? styles.Active : styles.noActive)]}
                                       onChangeText={(note) => setNote(note)}
                                       onBlur={() => unActiveInput('note')}
                                       onFocus={() => activeInput('note')}
                                />
                            </Item>
                        </View>

                        {renderSubmitNote()}

                    </View>

                </Modal>

                <Modal
                    onBackdropPress                 ={toggleCouponModal}
                    onBackButtonPress               = {toggleCouponModal}
                    isVisible                       = {showCouponModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderTopLeftRadius:50, borderTopRightRadius:50},styles.bg_White, styles.overHidden, styles.Width_100,
                        styles.paddingVertical_25 , styles.paddingHorizontal_25 , styles.flexCenter]}>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginBottom_15,styles.marginTop_10]}>{ i18n.t('enterCouponCode') }</Text>

                        <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginTop_15]}>
                            <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                <Label style={[styles.label, styles.textRegular ,{ color:couponStatus === 1 ?  COLORS.black :  COLORS.gray}]}>{ i18n.t('couponCode') }</Label>
                                <Input style={[styles.input, styles.height_50, (couponStatus === 1 ? styles.Active : styles.noActive)]}
                                       onChangeText={(coupon) => setCoupon(coupon)}
                                       onBlur={() => unActiveInput('coupon')}
                                       onFocus={() => activeInput('coupon')}
                                       keyboardType={'number-pad'}
                                />
                            </Item>
                        </View>

                        {renderSubmitCoupon()}

                    </View>

                </Modal>

                <Modal
                    onBackdropPress                 ={togglePromoModal}
                    onBackButtonPress               = {togglePromoModal}
                    isVisible                       = {showPromoModal}
                    style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderTopLeftRadius:50, borderTopRightRadius:50},styles.bg_White, styles.overHidden, styles.Width_100,
                        styles.paddingVertical_25 , styles.paddingHorizontal_25 , styles.flexCenter]}>

                        <Text style={[styles.textBold , styles.text_black , styles.textSize_16 , styles.marginBottom_15,styles.marginTop_10]}>{ i18n.t('enterPromoCode') }</Text>

                        <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginTop_15]}>
                            <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                <Label style={[styles.label, styles.textRegular ,{ color:promoStatus === 1 ?  COLORS.black :  COLORS.gray}]}>{ i18n.t('promoCode') }</Label>
                                <Input style={[styles.input, styles.height_50, (promoStatus === 1 ? styles.Active : styles.noActive)]}
                                       onChangeText={(promo) => setPromo(promo)}
                                       onBlur={() => unActiveInput('promo')}
                                       onFocus={() => activeInput('promo')}
                                       keyboardType={'number-pad'}
                                />
                            </Item>
                        </View>

                        {renderSubmitPromo()}

                    </View>

                </Modal>
            </Content>
        </Container>
    );
}

export default Basket;


