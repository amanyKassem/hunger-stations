import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import  Modal  from "react-native-modal";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Category({navigation}) {

    const [showModal, setShowModal] = useState(false);

    function toggleModal () {
        setShowModal(!showModal);
    };

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <View style={[styles.height_200]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{position:'absolute' , zIndex:1 , left:20, top:40}}>
                        <Image source= {require('../../assets/images/cirle_close.png')} style={[styles.icon35]} resizeMode={'contain'} />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/img2.png')} style={[styles.heightFull , styles.Width_100]} resizeMode={'cover'} />
                </View>

                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100 ,  {top:-70 }]}>
                    <Card style={[styles.bg_White, styles.directionColumn , styles.Radius_10 , { padding:15}]}>
                        <View style={[styles.directionRow , styles.marginBottom_15]}>
                            <Image source={require('../../assets/images/img2.png')} style={[{width:100,height:40}]} resizeMode={'cover'} />
                            <Image source   = {require('../../assets/images/star.png')} style={[styles.icon15, {marginRight:5 , marginLeft:15}]} resizeMode={'contain'} />

                            <Text style={[styles.textBold, styles.textSize_14 , styles.text_black, {marginRight:15}]} >
                                4.0
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray]} >
                                خيري
                            </Text>
                        </View>
                        <View style={[styles.directionRowSpace]}>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >0 ريال</Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >0 ريال</Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >50-40 دقائق</Text>
                        </View>
                        <View style={[styles.directionRowSpace]}>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >الحد الأدني</Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >التوصيل</Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5 , styles.textCenter , {flex:1}]} >مدة التوصيل</Text>
                        </View>
                    </Card>

                    <View style={[styles.marginTop_25]}>
                        <TouchableOpacity onPress={toggleModal} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray]} >
                                    سلة طعام
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                        <TouchableOpacity onPress={toggleModal} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray]} >
                                    سلة طعام
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                        <TouchableOpacity onPress={toggleModal} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray]} >
                                    سلة طعام
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                    </View>

                </View>
                <Modal
                    onBackdropPress                 ={toggleModal}
                    onBackButtonPress               = {toggleModal}
                    isVisible                       = {showModal}
                    // style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderRadius:10},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_10]}>
                        <Text style={[styles.textRegular , styles.textCenter , styles.text_black , styles.textSize_15 , styles.marginBottom_5]}>مبادرة بالتعاون مع جمعية اطعام</Text>
                        <Text style={[styles.textRegular , styles.textCenter , styles.text_gray , styles.textSize_15 , styles.marginBottom_5]}>تقيم بتوزيع صندوق اغذية للاسر المحتاجة في منازلهم لتلبية احتياجاتهم</Text>
                    </View>

                </Modal>
            </Content>
        </Container>
    );
}

export default Category;


