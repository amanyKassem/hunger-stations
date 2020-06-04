import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, Clipboard, Dimensions , Linking , Share } from "react-native";
import {Container, Content, Toast} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import { Table, Row, Rows } from 'react-native-table-component';
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Wallet({navigation}) {

    const tableHead = [i18n.t('addedDate'), i18n.t('finishedDate') , i18n.t('value')];
    const tableData = [
        ['9/7/2019', '9/7/2020', '20 ريال'],
        ['9/7/2019', '9/7/2020', '20 ريال'],
        ['9/7/2019', '9/7/2020', '20 ريال'],
        ['9/7/2019', '9/7/2020', '20 ريال']
    ]

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth, styles.paddingTop_50]}>

                <View style={[styles.bgFullWidth, styles.Width_100]}>

                    <View style={[styles.directionRowCenter , styles.Width_100 ,  styles.marginBottom_35]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.directionRow , {position:'absolute' , left:20}]}>
                            <Image source={require('../../assets/images/yellow_back.png')} style={[styles.icon20 , {marginRight:5}]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold , styles.text_black  , styles.textSize_18, {textAlign: 'center'}]}>{ i18n.t('wallet') }</Text>
                    </View>

                    <View style={[styles.bgFullWidth, styles.Width_100, styles.marginTop_15]}>
                        <Text style={[styles.textBold, styles.textSize_16 , styles.text_black , styles.textCenter , styles.marginBottom_5]} >
                            { i18n.t('yourCredit') }
                        </Text>
                        <Text style={[styles.textBold, styles.textSize_16 , styles.text_black , styles.textCenter , styles.marginBottom_5]} >
                             100 ريال
                        </Text>

                        <Table style={[styles.marginTop_25]} borderStyle={{borderWidth: 1, borderColor:'#ddd'}}>
                            <Row data={tableHead} style={styles.tableHead} textStyle={[styles.textSize_14 , styles.textCenter, styles.textRegular, styles.text_gray]}/>
                            <Rows data={tableData} textStyle={[styles.textSize_14 , styles.textCenter, styles.textRegular, styles.text_light_gray, {padding:8}]}/>
                        </Table>


                    </View>

                </View>

            </Content>
        </Container>
    );
}

export default Wallet;


