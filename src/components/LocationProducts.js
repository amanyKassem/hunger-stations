import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, ScrollView, Dimensions , I18nManager , ActivityIndicator} from "react-native";
import {Container, Content, Card, Input} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";
import Swiper from 'react-native-swiper';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function LocationProduct({navigation}) {

    const [active, setActive] = useState(0);
    const [showSearch, setShowSearch] = useState(false);
    const [restName, setRestName] = useState('');

    function onSubCategories ( id ){
        setActive(id);
    }


    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>
                <View style={[styles.paddingHorizontal_20 , styles.bgFullWidth, styles.Width_100]}>

                        <View style={[styles.Width_100 , styles.directionRowSpace  , styles.paddingTop_50 ]}>
                            {
                                !showSearch ?
                                    <>
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                            <Image source={require('../../assets/images/back.png')}
                                                   style={[styles.icon20]} resizeMode={'contain'}/>
                                        </TouchableOpacity>
                                        <Text style={[styles.textRegular, styles.text_black, styles.textSize_18]}>اسم
                                            المنطقة</Text>
                                        <TouchableOpacity onPress={() => setShowSearch(true)}>
                                            <Image source={require('../../assets/images/search.png')}
                                                   style={[styles.icon20]} resizeMode={'contain'}/>
                                        </TouchableOpacity>
                                    </>
                                    :
                                    <View style={[styles.Width_100, styles.directionRowSpace]}>
                                        <Input style={[styles.inputSearch, styles.bg_light_gray]}
                                               placeholder={i18n.t('searchRest')}
                                               placeholderStyle={[styles.text_gray]}
                                               onChangeText={(restName) => setRestName(restName)}
                                               value={restName}
                                        />
                                        <TouchableOpacity onPress={() => setShowSearch(false)}>
                                            <Text
                                                style={[styles.textRegular, styles.text_black, styles.textSize_14, styles.textCenter, styles.paddingHorizontal_5]}>{i18n.t('cancel')}</Text>
                                        </TouchableOpacity>
                                    </View>
                            }
                        </View>

                    <View style={[styles.marginVertical_20,{borderWidth:.5 , borderColor: '#eee'}]}/>

                    <View>
                        <Swiper
                            containerStyle={[styles.Width_100, styles.height_150]}
                            autoplay={true}
                            paginationStyle={{bottom:7}}
                            dotStyle={{backgroundColor: '#fff'}}
                            activeDotStyle={{backgroundColor: COLORS.yellow}}
                            animated={true}
                            loop={true}
                            autoplayTimeout={2}
                        >
                            <Image source={require('../../assets/images/image_one.png')} style={[styles.Radius_20 , styles.Width_100 , {height:'100%'}]} resizeMode={'cover'} />
                            <Image source={require('../../assets/images/image_two.png')} style={[styles.Radius_20 , styles.Width_100 , {height:'100%'}]} resizeMode={'cover'} />
                            <Image source={require('../../assets/images/image_three.png')} style={[styles.Radius_20 , styles.Width_100 , {height:'100%'}]} resizeMode={'cover'} />

                        </Swiper>
                    </View>

                    <View style={[styles.marginVertical_20]}>
                        <ScrollView style={[styles.scrollView ]} horizontal={true} showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity style={[styles.scrollCat]}>
                                <Image source={require('../../assets/images/img_one.png')}
                                       style={[styles.scrollImg]} resizeMode={'cover'}/>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_12 , styles.textCenter,styles.paddingHorizontal_5]}>عروض رمضان</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.scrollCat]}>
                                <Image source={require('../../assets/images/img_two.png')}
                                       style={[styles.scrollImg]} resizeMode={'cover'}/>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_12 , styles.textCenter,styles.paddingHorizontal_5]}>خضراوات وفواكه</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.scrollCat]}>
                                <Image source={require('../../assets/images/img_three.png')}
                                       style={[styles.scrollImg]} resizeMode={'cover'}/>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_12 , styles.textCenter,styles.paddingHorizontal_5]}>صحتك وجمالك</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.scrollCat]}>
                                <Image source={require('../../assets/images/img_four.png')}
                                       style={[styles.scrollImg]} resizeMode={'cover'}/>
                                <Text style={[styles.textRegular , styles.text_White , styles.textSize_12 , styles.textCenter,styles.paddingHorizontal_5]}>رمضانيات</Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView style={[styles.scrollView]} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity
                                onPress         = {() => onSubCategories(0)}
                                style           = {[active === 0 ? styles.activeTabs : styles.noActiveTabs ,styles.directionRow, {marginRight:10}]}>
                                <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                    { i18n.t('all') }
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress         = {() => onSubCategories(1)}
                                style           = {[active === 1 ? styles.activeTabs : styles.noActiveTabs ,styles.directionRow, {marginRight:10}]}>
                                <Image source   = {require('../../assets/images/burger.png')} style={[styles.icon20, {marginRight:5}]} resizeMode={'contain'} />

                                <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                    مأكولات سريعة
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress         = {() => onSubCategories(2)}
                                style           = {[active === 2 ? styles.activeTabs : styles.noActiveTabs ,styles.directionRow, {marginRight:10}]}>
                                <Image source   = {require('../../assets/images/cake.png')} style={[styles.icon20, {marginRight:5}]} resizeMode={'contain'} />

                                <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                    حلويات
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress         = {() => onSubCategories(3)}
                                style           = {[active === 3 ? styles.activeTabs : styles.noActiveTabs ,styles.directionRow, {marginRight:10}]}>
                                <Image source   = {require('../../assets/images/coffee.png')} style={[styles.icon20, {marginRight:5}]} resizeMode={'contain'} />

                                <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                    قهوة
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress         = {() => onSubCategories(4)}
                                style           = {[active === 4 ? styles.activeTabs : styles.noActiveTabs ,styles.directionRow, {marginRight:10}]}>
                                <Image source   = {require('../../assets/images/bread.png')} style={[styles.icon20, {marginRight:5}]} resizeMode={'contain'} />

                                <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                    مخبوزات
                                </Text>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>

                    <View style={styles.marginVertical_20}>
                        <TouchableOpacity onPress={() => navigation.push('category', {catType:0})} style={[styles.directionRow , styles.marginBottom_10 , {borderBottomWidth:1 , borderBottomColor:'#ddd' , paddingBottom:10}]}>
                            <View>
                                <Image source= {require('../../assets/images/img2.png')} style={[styles.icon60, styles.marginBottom_10]} resizeMode={'contain'} />
                                <View style={[styles.directionRowCenter ]}>
                                    <Image source   = {require('../../assets/images/star.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                    <Text style={[styles.textBold, styles.textSize_14 , styles.text_black]} >
                                        4.0
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:1 , borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingHorizontal:10 , marginLeft:10}}>
                                <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                    <Text style={[styles.textBold, styles.textSize_16 , styles.text_black]} >
                                        اطعام
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.bg_lightYellow , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                        اعلان
                                    </Text>
                                </View>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5]} >
                                    خيري
                                </Text>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart]} >
                                         19.6 km
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                       | 2.0-1.5 ساعات |
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                        التوصيل 5 ريال
                                    </Text>
                                </View>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <View style={[styles.directionRow]}>
                                        <Image source   = {require('../../assets/images/delivery.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل المتجر
                                        </Text>
                                    </View>
                                    <View style={[styles.directionRow , {marginLeft:25}]}>
                                        <Image source   = {require('../../assets/images/percent.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل مجاني
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.push('category', {catType:1})} style={[styles.directionRow , styles.marginBottom_10 , {borderBottomWidth:1 , borderBottomColor:'#ddd' , paddingBottom:10}]}>
                            <View>
                                <Image source= {require('../../assets/images/img2.png')} style={[styles.icon60, styles.marginBottom_10]} resizeMode={'contain'} />
                                <View style={[styles.directionRowCenter ]}>
                                    <Image source   = {require('../../assets/images/star.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                    <Text style={[styles.textBold, styles.textSize_14 , styles.text_black]} >
                                        4.0
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:1 , borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingHorizontal:10 , marginLeft:10}}>
                                <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                    <Text style={[styles.textBold, styles.textSize_16 , styles.text_black]} >
                                        اطلب لهم
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.bg_lightYellow , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                        اعلان
                                    </Text>
                                </View>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5]} >
                                    خيري
                                </Text>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart]} >
                                         19.6 km
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                       | 2.0-1.5 ساعات |
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                        التوصيل 5 ريال
                                    </Text>
                                </View>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <View style={[styles.directionRow]}>
                                        <Image source   = {require('../../assets/images/delivery.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل المتجر
                                        </Text>
                                    </View>
                                    <View style={[styles.directionRow , {marginLeft:25}]}>
                                        <Image source   = {require('../../assets/images/percent.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل مجاني
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.push('category', {catType:1})} style={[styles.directionRow , styles.marginBottom_10 , {borderBottomWidth:1 , borderBottomColor:'#ddd' , paddingBottom:10}]}>
                            <View>
                                <Image source= {require('../../assets/images/img2.png')} style={[styles.icon60, styles.marginBottom_10]} resizeMode={'contain'} />
                                <View style={[styles.directionRowCenter ]}>
                                    <Image source   = {require('../../assets/images/star.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                    <Text style={[styles.textBold, styles.textSize_14 , styles.text_black]} >
                                        4.0
                                    </Text>
                                </View>
                            </View>
                            <View style={{flex:1 , borderLeftWidth:1 , borderLeftColor:'#ddd' , paddingHorizontal:10 , marginLeft:10}}>
                                <View style={[styles.directionRowSpace, styles.marginBottom_5]}>
                                    <Text style={[styles.textBold, styles.textSize_16 , styles.text_black]} >
                                        اطلب لهم
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.bg_lightYellow , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                        اعلان
                                    </Text>
                                </View>
                                <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray, styles.marginBottom_5]} >
                                    خيري
                                </Text>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart]} >
                                         19.6 km
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                       | 2.0-1.5 ساعات |
                                    </Text>
                                    <Text style={[styles.textRegular, styles.textSize_14 , styles.text_black , styles.alignStart , {marginLeft:5}]} >
                                        التوصيل 5 ريال
                                    </Text>
                                </View>
                                <View style={[styles.directionRow, styles.marginBottom_5]}>
                                    <View style={[styles.directionRow]}>
                                        <Image source   = {require('../../assets/images/delivery.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل المتجر
                                        </Text>
                                    </View>
                                    <View style={[styles.directionRow , {marginLeft:25}]}>
                                        <Image source   = {require('../../assets/images/percent.png')} style={[styles.icon15, {marginRight:5}]} resizeMode={'contain'} />

                                        <Text style={[styles.textRegular, styles.textSize_11 , styles.text_black]} >
                                            توصيل مجاني
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </Content>
        </Container>
    );
}

export default LocationProduct;


