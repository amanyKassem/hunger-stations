import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , KeyboardAvoidingView} from "react-native";
import {Container, Content, Card, Form, Item, Label, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function AddNewCard({navigation}) {

    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [validUntill, setValidUntill] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardNumberStatus, setCardNumberStatus] = useState(0);
    const [cardHolderStatus, setCardHolderStatus] = useState(0);
    const [validUntillStatus, setValidUntillStatus] = useState(0);
    const [cvvStatus, setCvvStatus] = useState(0);

    const [isDatePickerVisible , setIsDatePickerVisible ] = useState(false);

    const showDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    const hideDatePicker = () => {
        setIsDatePickerVisible(false);
    };

    const handleConfirm = myDate => {
        // console.warn("A date has been picked: ", myDate);
        let formatted_date = myDate.getFullYear() + "-" + ("0" + (myDate.getMonth() + 1)).slice(-2) + "-" + ("0" + myDate.getDate()).slice(-2);
        hideDatePicker();
        setValidUntill(formatted_date);
    }

    function activeInput(type) {

        if (type === 'cardNumber' || cardNumber !== '') {
            setCardNumberStatus(1)
        }

        if (type === 'cardHolder' || cardHolder !== '') {
            setCardHolderStatus(1)
        }

        if (type === 'validUntill' || validUntill !== '') {
            setValidUntillStatus(1)
        }

        if (type === 'cvv' || cvv !== '') {
            setCvvStatus(1)
        }

    }

    function unActiveInput(type) {

        if (type === 'cardNumber' && cardNumber === '') {
            setCardNumberStatus(0)
        }

        if (type === 'cardHolder' && cardHolder === '') {
            setCardHolderStatus(0)
        }

        if (type === 'validUntill' && validUntill === '') {
            setValidUntillStatus(0)
        }

        if (type === 'cvv' && cvv === '') {
            setCvvStatus(0)
        }

    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth , styles.paddingTop_50]}>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 , styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , right:0}]}>
                            <Text style={[styles.textRegular , styles.text_yellow , styles.textSize_17]}>{ i18n.t('cancel') }</Text>
                        </TouchableOpacity>
                        <Text style={[styles.textRegular , styles.text_black  , styles.textSize_17, {textAlign: 'center'}]}>{ i18n.t('addNewCard') }</Text>
                    </View>

                    <KeyboardAvoidingView behavior={'padding'} style={{flex:1}}>
                        <Form style={[styles.marginVertical_10, styles.Width_100 , styles.directionColumnSpace , {flex:1}]}>
                            <View style={[styles.Width_100 , styles.flexCenter]}>
                                <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 , styles.marginTop_25 ]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R , { right: 7 ,paddingHorizontal:0}]}>
                                        <Label style={[styles.label,{ color:cardNumberStatus === 1 ?  COLORS.black :  COLORS.gray}]}>{ i18n.t('cardNumber') }</Label>
                                        <Input style={[styles.input, styles.height_50, (cardNumberStatus === 1 ? styles.Active : styles.noActive)]}
                                               onChangeText={(cardNumber) => setCardNumber(cardNumber)}
                                               onBlur={() => unActiveInput('cardNumber')}
                                               onFocus={() => activeInput('cardNumber')}
                                               keyboardType={'number-pad'}
                                        />
                                    </Item>
                                </View>

                                <View style={[styles.position_R,  styles.height_70, styles.flexCenter, styles.marginBottom_5]}>
                                    <Item floatingLabel style={[styles.item, styles.position_R, { right: 7 ,paddingHorizontal:0}]}>
                                        <Label style={[styles.label ,{ color:cardHolderStatus === 1 ?  COLORS.black :  COLORS.gray }]}>{ i18n.t('name') }</Label>
                                        <Input
                                            style={[styles.input, styles.height_50, (cardHolderStatus === 1 ? styles.Active : styles.noActive)]}
                                            onChangeText={(cardHolder) => setCardHolder(cardHolder)}
                                            onBlur={() => unActiveInput('cardHolder')}
                                            onFocus={() => activeInput('cardHolder')}
                                        />
                                    </Item>
                                </View>

                                <View style={[styles.directionRowSpace , styles.Width_100]}>

                                    <TouchableOpacity onPress={showDatePicker} style={[styles.Width_100,styles.marginBottom_25, {flex:2}]}>
                                        <Text style={[styles.labelText, styles.textRegular
                                            ,{ color:validUntill !== '' ?  COLORS.black :  COLORS.gray , top : validUntill !== '' ? -10 : 15}]}>{ i18n.t('validUntill') }</Text>
                                        <View style={[styles.directionColumnC,styles.input, styles.height_50, styles.Width_100 , (validUntill !== '' ? styles.Active : styles.noActive)]}>
                                            <Text style={[styles.textRegular , styles.text_black , styles.alignStart]}>
                                                {validUntill}
                                            </Text>
                                        </View>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
                                        />
                                    </TouchableOpacity>

                                    <View style={[styles.position_R,  styles.height_70, styles.flexCenter, styles.marginBottom_5, {flex:1 , marginLeft:12}]}>
                                        <Item floatingLabel style={[styles.item, styles.position_R, { right: 7 ,paddingHorizontal:0}]}>
                                            <Label style={[styles.label ,{ color:cvvStatus === 1 ?  COLORS.black :  COLORS.gray }]}>{ i18n.t('cvv') }</Label>
                                            <Input
                                                style={[styles.input, styles.height_50, (cvvStatus === 1 ? styles.Active : styles.noActive)]}
                                                onChangeText={(cvv) => setCvv(cvv)}
                                                onBlur={() => unActiveInput('cvv')}
                                                onFocus={() => activeInput('cvv')}
                                                keyboardType={'number-pad'}
                                            />
                                        </Item>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('payMethods')} style={[styles.yellowBtn , styles.Width_100 , styles.marginBottom_20]}>
                                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('confirm') }</Text>
                            </TouchableOpacity>

                        </Form>
                    </KeyboardAvoidingView>
                </View>

            </Content>
        </Container>
    );
}

export default AddNewCard;


