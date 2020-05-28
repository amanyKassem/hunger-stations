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

function Category({navigation, route}) {

    const catType = route.params.catType;
    const count = route.params.count ? route.params.count : null;

    const [showModal, setShowModal] = useState(false);

    function toggleModal () {
        setShowModal(!showModal);
    };

    function goToDetails () {
        setShowModal(!showModal);
        navigation.push('product', {catType})
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
                        <View style={[styles.directionRow , styles.marginBottom_10]}>
                            <Image source={require('../../assets/images/img2.png')} style={[{width:100,height:40}]} resizeMode={'cover'} />
                            <Text style={[styles.textBold, styles.textSize_14 , styles.text_black, {marginRight:15 , marginLeft:15}]} >
                                اطعام
                            </Text>
                            <Image source   = {require('../../assets/images/star.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />
                            <Text style={[styles.textBold, styles.textSize_14 , styles.text_black, {marginRight:15}]} >
                                4.0
                            </Text>
                            <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray]} >
                                خيري
                            </Text>
                        </View>
                        <Text style={[styles.textRegular, styles.textSize_13 , styles.text_gray , styles.marginBottom_15]} >
                            ساندوتشات , مأكولات سريعة , مأكولات أمريكية
                        </Text>
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
                        <TouchableOpacity onPress={catType === 0 ? toggleModal : () => navigation.push('product' , {catType})} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <View style={[styles.directionRowSpace]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                        سلة طعام
                                    </Text>
                                    {
                                        count && count > 1 ?
                                            <View style={[styles.directionRowSpace]}>
                                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray ,{marginRight:5}]} >
                                                    {count}
                                                </Text>
                                                <Image source= {require('../../assets/images/yellow_close.png')} style={[styles.icon15]} resizeMode={'contain'} />
                                            </View>
                                            :
                                            null
                                    }

                                </View>
                                <Text style={[styles.textRegular, styles.textSize_12 , styles.text_gray , styles.marginBottom_5]} >
                                    ساندوتشات , مأكولات سريعة , مأكولات أمريكية
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                        <TouchableOpacity onPress={catType === 0 ? toggleModal : () => navigation.push('product' , {catType})} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <View style={[styles.directionRowSpace]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                        سلة طعام
                                    </Text>
                                    {
                                        count && count > 1 ?
                                            <View style={[styles.directionRowSpace]}>
                                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray ,{marginRight:5}]} >
                                                    {count}
                                                </Text>
                                                <Image source= {require('../../assets/images/yellow_close.png')} style={[styles.icon15]} resizeMode={'contain'} />
                                            </View>
                                            :
                                            null
                                    }

                                </View>
                                <Text style={[styles.textRegular, styles.textSize_12 , styles.text_gray , styles.marginBottom_5]} >
                                    ساندوتشات , مأكولات سريعة , مأكولات أمريكية
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.marginVertical_15 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                        <TouchableOpacity onPress={catType === 0 ? toggleModal : () => navigation.push('product' , {catType})} style={[{flexDirection:'row'}]}>
                            <Image source= {require('../../assets/images/img2.png')} style={[styles.icon80 , styles.Radius_50]} resizeMode={'contain'} />
                            <View style={[styles.productCard]}>
                                <View style={[styles.directionRowSpace]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.marginBottom_5]} >
                                        سلة طعام
                                    </Text>
                                    {
                                        count && count > 1 ?
                                            <View style={[styles.directionRowSpace]}>
                                                <Text style={[styles.textRegular, styles.textSize_16 , styles.text_gray ,{marginRight:5}]} >
                                                    {count}
                                                </Text>
                                                <Image source= {require('../../assets/images/yellow_close.png')} style={[styles.icon15]} resizeMode={'contain'} />
                                            </View>
                                            :
                                            null
                                    }

                                </View>
                                <Text style={[styles.textRegular, styles.textSize_12 , styles.text_gray , styles.marginBottom_5]} >
                                    ساندوتشات , مأكولات سريعة , مأكولات أمريكية
                                </Text>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                                    250 ريال
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
                <Modal
                    onBackdropPress                 ={toggleModal}
                    onBackButtonPress               = {toggleModal}
                    isVisible                       = {showModal}
                    // style                           = {styles.bgModel}
                    avoidKeyboard                    = {true}
                >

                    <View style={[{borderRadius:10},styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_15]}>
                        <Text style={[styles.textRegular , styles.textCenter , styles.text_black , styles.textSize_15 , styles.marginBottom_5]}>مبادرة بالتعاون مع جمعية اطعام</Text>
                        <Text style={[styles.textRegular , styles.textCenter , styles.text_gray , styles.textSize_14 , styles.marginBottom_5 , {lineHeight:24}]}>تقيم بتوزيع صندوق اغذية للاسر المحتاجة في منازلهم لتلبية احتياجاتهم</Text>
                        <TouchableOpacity onPress={() => goToDetails()} style={[styles.yellowBtn , styles.Width_100]}>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('ok') }</Text>
                        </TouchableOpacity>
                    </View>

                </Modal>
            </Content>

            {
                count ?
                    <TouchableOpacity onPress={ () => navigation.push('basket')} style={[styles.yellowBtn , styles.Width_80 , styles.SelfCenter , styles.directionRowSpace , styles.paddingHorizontal_10,
                        {position:'absolute' , zIndex:1 , bottom:40}]}>
                        <Text style={[styles.textRegular , styles.text_black , styles.textSize_14]}>{ i18n.t('viewCart') }</Text>
                        <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black]} >
                            250 ريال
                        </Text>
                    </TouchableOpacity>
                    :
                    null
            }


        </Container>
    );
}

export default Category;


