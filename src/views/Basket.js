import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { store, removeWholeCart } from '../redux-shop';
import { connect } from 'react-redux';
import BasketItem from "../components/BasketItem";
import BasketTotalList from "../components/BasketTotalList";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from '@expo/vector-icons/Ionicons';



class Basket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: props.cartItems,
            orderTotal: props.orderTotal
        }
    }
    componentDidUpdate() {
        //console.log("Basket.js 1"+JSON.stringify(this.state.cartItems));
        //console.log("Basket.js 2" + JSON.stringify(store.cartItems));
        if (this.state.cartItems && this.state.cartItems.length != this.props.cartItems.length) {
            this.setState({
                cartItems: this.props.cartItems,
                orderTotal: this.props.orderTotal
            })
        }
    }
    render() {
        if (this.state.cartItems && this.state.cartItems.length) {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    {this.state.cartItems.map((item) => {
                        return (
                            <BasketItem key={item.id} name={item.name} id={item.id} imageUri={item.imageUri} qty={item.qty} price={item.priceOne} {...this.props}></BasketItem>
                        )
                    })}
                </View>

                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
                    {/* <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'black', marginLeft:20, marginRight:20,padding: 10, width: wp("40%"), borderRadius: 2 }}> */}

                    <View style={{ padding: 5, borderRadius: 2, flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', marginLeft: 20, marginRight: 20 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => {
                                this.props.removeWholeCart();
                            }}>
                            <View>
                                <Icon name="md-cart" size={20} color="white" />
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontSize: 14, paddingLeft: 10 }}>Remove Cart</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    

                    <View>
                        <BasketTotalList label="Shipping" price="0"></BasketTotalList>
                        <BasketTotalList label="Your Total" price={this.state.orderTotal}></BasketTotalList>
                    </View>

                    <View style={{ padding: 5, borderRadius: 2, flexDirection: 'row', alignItems: 'center', backgroundColor: 'orange', marginLeft: 20, marginRight: 20, marginBottom: 15, padding:12 }}>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}

                            onPress={() => {
                                this.props.navigation.navigate("Home");
                            }

                            }>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <View>

                                <Icon name="md-cart" size={20} color="white" />

                            </View>

                            <View>

                                    <Text style={{ paddingLeft: 10, color: 'white', fontSize: 18, justifyContent: 'center'}}>Place your order</Text>

                            </View>
                            </View>

                        </TouchableOpacity>

                    </View>

                    {/* </View> */}
                </View>
            </View>
        )
                        }
        else{
            return(
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray', padding: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}> No items in the basket at the moment. Please continue shopping and add items to cart.</Text>
                </View>
            )
        }
    }
}

var mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems,
        orderTotal: state.orderTotal
    }
}

var mapActionsToProps = {
    removeWholeCart
}

//export default Basket;

export default connect(mapStateToProps, mapActionsToProps)(Basket);