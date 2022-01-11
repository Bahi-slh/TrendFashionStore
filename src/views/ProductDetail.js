import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Icon from '@expo/vector-icons/Ionicons';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import { addToCart } from '../redux-shop';
import { connect } from 'react-redux';
import ProductItem from "../components/ProductItem";


const { width } = Dimensions.get("window");

class ProductDetail extends Component {
    render() {

        console.log("Product Details" + JSON.stringify(this.props.route.params))

        const { id, name, imageUri, priceOne, priceTwo } = this.props.route.params;

        const item = {
            id: id,
            imageUri: imageUri,
            priceOne: priceOne,
            priceTwo: priceTwo,
            qty: 1,
            name: name
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View>
                        <Text style={{ padding: 10, fontSize: 25, fontWeight: 'bold' }}>{name}</Text>
                    </View>
                    <View>
                        <Image source={{ uri: imageUri }} style={{ resizeMode: "stretch", width: width, height: hp("65%") }} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:15, marginHorizontal:15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 7, borderColor: 'gray', padding: 10, borderWidth: 1, borderRadius: 2, width: wp("45%"), justifyContent: 'space-between'}}>
                            <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                                <Text style={{ color: 'black' }} >■ </Text>
                                <Text style={{ color: 'gray' }}>Black</Text>
                            </View>
                            <Text style={{ color: 'gray', justifyContent: 'flex-end' }}>▼</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginBottom: 7, borderColor: 'gray', padding: 10, borderWidth: 1, borderRadius: 2, width: wp("45%"), justifyContent:'space-between'}}>
                            <Text> Small </Text>
                            <Text style={{color:'gray'}}>▼</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, paddingLeft: 10, paddingRight: 10 }}>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>${priceOne}</Text>
                            <Text style={{ fontSize: 18, textDecorationLine: 'line-through', marginLeft: 15, color:'gray' }}>{priceTwo}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'black', padding: 10, width: wp("40%"), borderRadius: 2, backgroundColor:'orange' }}>

                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => {
                                this.props.addToCart(item);
                                this.props.navigation.navigate("Basket");
                            }}>
                            <View>
                                <Icon name="md-cart" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10 }}>Add to Cart</Text>
                            </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{ paddingLeft: 10, paddingRight: 10, marginTop:50 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Description</Text>
                        <Text style={{ fontSize: 13, color: 'black', lineHeight: 20 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Available colors</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'orange' }}>Available Sizes</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'black', fontSize: 25, marginRight: 10 }}>▀</Text>
                            <Text style={{ color: 'yellow', fontSize: 25, marginRight: 10 }}>▀</Text>
                            <Text style={{ color: 'blue', fontSize: 25 }}>▀</Text>
                        </View>
                        <Text style={{ fontSize: 18, fontWeight:'bold' }}>S , M , L</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Shipping")}>
                            <Text style={{ fontWeight: 'bold', textDecorationLine: 'underline', fontWeight: 14 }}> Go to Shipping Page</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>


        )
    }
}

//export default ProductDetail;

//what state values should be sent as props
var mapStateToProps = null;

//what actions should be sent as props
var mapActionsToProps = {
    addToCart
}

export default connect(mapStateToProps, mapActionsToProps)(ProductDetail);