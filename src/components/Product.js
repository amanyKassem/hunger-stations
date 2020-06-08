import React, { useState , useEffect , useRef } from "react";
import {View, Text, Image, TouchableOpacity, Dimensions , Platform , ActivityIndicator} from "react-native";
import {Container, Content, CheckBox, Icon} from 'native-base'
import styles from '../../assets/styles'
import i18n from "../../locale/i18n";
import COLORS from "../consts/colors";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const isIOS = Platform.OS === 'ios';

function Product({navigation, route}) {

    const catType = route.params.catType;
    const [isSelected, setSelection] = useState(false);

    const [count, setCount] = useState(1);

    function incrementCount() {
        setCount(count + 1);
    }

    function decrementCount() {
        if (count > 1){
            setCount(count - 1);
        }
    }

    return (
        <Container>
            <Content contentContainerStyle={[styles.bgFullWidth]}>

                <View style={[styles.height_250 , {justifyContent:'flex-start'}]}>
                    <View style={[styles.directionRowCenter, styles.Width_100 , styles.marginTop_40]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{position:'absolute' , left:20}}>
                            <Image source= {require('../../assets/images/cirle_close.png')} style={[styles.icon35]} resizeMode={'contain'} />
                        </TouchableOpacity>
                        <Text style={[styles.textBold, styles.textSize_18 , styles.text_White]} >
                            { i18n.t('productDetails') }
                        </Text>
                    </View>
                    <Image source={require('../../assets/images/img2.png')} style={[styles.heightFull , styles.Width_100, {position:'absolute' , zIndex:-1}]} resizeMode={'cover'} />
                </View>

                <View style={[styles.bgFullWidth, styles.Width_100 , styles.directionColumnSpace]}>
                   <View style={[styles.paddingHorizontal_20 , styles.marginTop_20,styles.Width_100]}>
                       <Text style={[styles.textRegular, styles.textSize_16 , styles.text_black , styles.marginBottom_5 , styles.alignStart]} >
                           اطعام
                       </Text>
                       <Text style={[styles.textRegular, styles.textSize_14 , styles.text_gray , styles.alignStart , styles.writing , {lineHeight:22}]} >
                           ساندوتشات , مأكولات سريعة , مأكولات أمريكية ساندوتشات ,
                           ساندوتشات , مأكولات سريعة , مأكولات أمريكية ساندوتشات ,
                           ساندوتشات , مأكولات سريعة , مأكولات أمريكية ساندوتشات ,
                       </Text>

                       {
                           catType === 1 ?
                               <View style={[styles.Width_100 , styles.marginTop_15]}>
                                   <View style={[styles.marginBottom_20]}>
                                       <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                                           <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                               هل ترغب بالبطاطس الحارة ؟
                                           </Text>
                                           <View style={[, styles.bg_lightYellow , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]}>
                                               <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black ]} >
                                                   اختر لغاية 4
                                               </Text>
                                           </View>
                                       </View>
                                       <View style={[styles.directionRowSpace]}>
                                           <View style={styles.directionRow}>
                                               <CheckBox
                                                   checked={isSelected}
                                                   color={COLORS.yellow}
                                                   onPress={() => setSelection(!isSelected)}
                                                   style={styles.checkbox}
                                               />
                                               <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                                   بطاطس حارة
                                               </Text>
                                           </View>
                                           <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                               + 2 ريال
                                           </Text>
                                       </View>
                                       <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                                       <View style={[styles.directionRowSpace]}>
                                           <View style={styles.directionRow}>
                                               <CheckBox
                                                   checked={isSelected}
                                                   color={COLORS.yellow}
                                                   onPress={() => setSelection(!isSelected)}
                                                   style={styles.checkbox}
                                               />
                                               <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                                   بطاطس حارة
                                               </Text>
                                           </View>
                                           <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                               + 2 ريال
                                           </Text>
                                       </View>
                                   </View>

                                   <View style={[styles.marginBottom_20]}>
                                       <View style={[styles.directionRowSpace , styles.marginBottom_10]}>
                                           <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                               اختيار من الساندوتش
                                           </Text>
                                           <View style={[, styles.bg_lightYellow , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]}>
                                               <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black ]} >
                                                   اختر لغاية 4
                                               </Text>
                                           </View>
                                       </View>
                                       <View style={[styles.directionRowSpace]}>
                                           <View style={styles.directionRow}>
                                               <CheckBox
                                                   checked={isSelected}
                                                   color={COLORS.yellow}
                                                   onPress={() => setSelection(!isSelected)}
                                                   style={styles.checkbox}
                                               />
                                               <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                                   بيج ديلوكس
                                               </Text>
                                           </View>
                                           <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                               + 2 ريال
                                           </Text>
                                       </View>
                                       <View style={[styles.marginVertical_10 , styles.flexCenter,{borderWidth:1 , borderColor: '#ddd' , width:'80%'}]}/>
                                       <View style={[styles.directionRowSpace]}>
                                           <View style={styles.directionRow}>
                                               <CheckBox
                                                   checked={isSelected}
                                                   color={COLORS.yellow}
                                                   onPress={() => setSelection(!isSelected)}
                                                   style={styles.checkbox}
                                               />
                                               <Text style={[styles.textRegular, styles.textSize_15, styles.text_black]} >
                                                   تشيكن فيليه
                                               </Text>
                                           </View>
                                           <Text style={[styles.textRegular, styles.textSize_13 , styles.text_black , styles.paddingHorizontal_15 , styles.Radius_15, styles.paddingVertical_5]} >
                                               + 2 ريال
                                           </Text>
                                       </View>
                                   </View>
                               </View>
                               :
                               null
                       }

                   </View>


                    <View style={[{borderTopLeftRadius:isIOS ? 35 :50, borderTopRightRadius:isIOS ? 35 :50 , borderColor:'#ddd' , borderWidth:1 , borderBottomWidth:0},
                        styles.bg_White, styles.overHidden, styles.Width_100, styles.paddingVertical_25 , styles.paddingHorizontal_25 , styles.directionRowSpace]}>

                        <View style={[styles.directionRow]}>
                            <TouchableOpacity onPress={() => incrementCount()} style={[styles.bg_yellow , styles.icon25 , styles.Radius_50 , styles.flexCenter]}>
                                <Icon style={[styles.text_black, styles.textSize_18]} type="AntDesign" name='plus'/>
                            </TouchableOpacity>
                            <Text style={[styles.textRegular, styles.textSize_16 , styles.marginHorizontal_10 , styles.text_black]} >
                                {count}
                            </Text>
                            <TouchableOpacity onPress={() => decrementCount()} style={[styles.bg_light_gray , styles.icon25 , styles.Radius_50 , styles.flexCenter]}>
                                <Icon style={[styles.text_black, styles.textSize_18]} type="AntDesign" name='minus'/>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={ () => navigation.push('category' , {catType , count}) } style={[styles.yellowBtn , styles.Radius_50 , styles.height_35 , {flex:1 , marginTop:0 , marginLeft:30}]}>
                            <Text style={[styles.textRegular , styles.text_black , styles.textSize_16]}>{ i18n.t('add') } | 250 ريال</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </Content>
        </Container>
    );
}

export default Product;


