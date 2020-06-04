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
import Communications from 'react-native-communications';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Account({navigation}) {

    const [name, setName] = useState('Amany');
    const [nameStatus, setNameStatus] = useState(1);
    const [phone, setPhone] = useState('0102345678');
    const [phoneStatus, setPhoneStatus] = useState(1);
    const [email, setEmail] = useState('amany@gmail.com');
    const [emailStatus, setEmailStatus] = useState(1);

    function activeInput(type) {
        if (type === 'name' || name !== '') setNameStatus(1);
        if (type === 'phone' || phone !== '') setPhoneStatus(1);
        if (type === 'email' || email !== '') setEmailStatus(1);
    }

    function unActiveInput(type) {
        if (type === 'name' && name === '') setNameStatus(0);
        if (type === 'phone' && phone === '') setPhoneStatus(0);
        if (type === 'email' && email === '') setEmailStatus(0);
    }

    function renderSubmit() {
        if (name == '' || phone == ''|| email == '') {
            return (
                <View
                    style={[styles.yellowBtn , styles.Width_95 , {
                        backgroundColor:'#ccc'
                    }]}
                >
                    <Text style={[styles.textRegular , styles.text_White , styles.textSize_16]}>{ i18n.t('update') }</Text>
                </View>
            );
        }

        return (
            <TouchableOpacity
                onPress={() => onLoginPressed()} style={[styles.yellowBtn , styles.Width_95]}>
                <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('update') }</Text>
            </TouchableOpacity>
        );
    }

    function onLoginPressed() {

        navigation.navigate('more')
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('account') }</Text>
                    </View>


                    <View style={[styles.directionColumnSpace, styles.marginTop_15 , {flex:1}]}>
                        <View style={[styles.paddingHorizontal_20 , styles.Width_100]}>
                            <KeyboardAvoidingView behavior={'padding'} style={[styles.keyboardAvoid]}>
                                <Form style={[styles.Width_100 , styles.flexCenter, styles.marginVertical_10]}>

                                    <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                        <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                            <Label style={[styles.label, styles.textRegular ,{ color:nameStatus === 1 ?  COLORS.black :  COLORS.gray , top:5}]}>{ i18n.t('name') }</Label>
                                            <Input style={[styles.input, styles.height_50, (nameStatus === 1 ? styles.Active : styles.noActive)]}
                                                   onChangeText={(name) => setName(name)}
                                                   onBlur={() => unActiveInput('name')}
                                                   onFocus={() => activeInput('name')}
                                                   value={name}
                                            />
                                        </Item>
                                    </View>

                                    <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                        <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                            <Label style={[styles.label, styles.textRegular ,{ color:phoneStatus === 1 ?  COLORS.black :  COLORS.gray , top:5}]}>{ i18n.t('phone') }</Label>
                                            <Input style={[styles.input, styles.height_50, (phoneStatus === 1 ? styles.Active : styles.noActive)]}
                                                   onChangeText={(phone) => setPhone(phone)}
                                                   onBlur={() => unActiveInput('phone')}
                                                   onFocus={() => activeInput('phone')}
                                                   keyboardType={'number-pad'}
                                                   value={phone}
                                            />
                                        </Item>
                                    </View>

                                    <View style={[styles.position_R, styles.height_70, styles.flexCenter, styles.marginBottom_5 ]}>
                                        <Item floatingLabel style={[styles.item, styles.position_R, { right: 5 }]}>
                                            <Label style={[styles.label, styles.textRegular ,{ color:emailStatus === 1 ?  COLORS.black :  COLORS.gray , top:5}]}>{ i18n.t('email') }</Label>
                                            <Input style={[styles.input, styles.height_50, (emailStatus === 1 ? styles.Active : styles.noActive)]}
                                                   onChangeText={(email) => setEmail(email)}
                                                   onBlur={() => unActiveInput('email')}
                                                   onFocus={() => activeInput('email')}
                                                   keyboardType={'email-address'}
                                                   value={email}
                                            />
                                        </Item>
                                    </View>


                                    {renderSubmit()}

                                    <TouchableOpacity style={[styles.marginTop_25]}>
                                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_15]}>{ i18n.t('disconnect') }</Text>
                                    </TouchableOpacity>


                                </Form>
                            </KeyboardAvoidingView>

                        </View>


                    </View>


                </View>

            </Content>
        </Container>
    );
}

export default Account;


