import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import { removeFromCart } from '../redux-shop';

import { connect } from 'react-redux';

class BasketItem extends Component {

    constructor(props) {
        super(props);
        console.log("basketItem" + JSON.stringify(props));
        this.state = {
            id: props.id,
            name: props.name,
            qty: props.qty,
            imageUri: props.imageUri,
            price: props.price
        }
    }
    render() {
        const item = {
            id: this.props.id,
            name: this.props.name
        };
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginBottom: 10, width: wp("100%"), height: hp("20%") }}>
                <View style={{ width: wp("20%"), paddingTop: 5, marginLeft:20 }}>
                    <Image source={{ uri: this.state.imageUri }} style={{ flex: 1, resizeMode: "contain"}}></Image>
                </View>

                <View style={{ width: wp("75%"), flexDirection: "row", justifyContent: "space-around", alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'orange', marginBottom: 7 }}>{this.state.name}</Text>
                        <View style={{flexDirection:'row', marginBottom:7}}>
                            <Text >■ </Text>
                            <Text style={{color:'gray'}}>Black, M</Text>
                        </View>
                        <Text style={{ fontSize: 15, borderColor: 'gray', padding: 4, borderWidth: 1, borderRadius: 2, width:50, color:'gray' }}>  {this.state.qty}  ▼</Text>

                        <TouchableOpacity
                            style={{ borderWidth: 1, borderColor: 'orange', backgroundColor: 'orange', marginTop: 5, width:65, marginVertical:10 }}
                            onPress={() => {
                                this.props.removeFromCart(item);
                                this.props.navigation.navigate("Basket")
                            }}
                        >
                            <Text style={{ fontSize: 14, color: "white", padding: 5 }}>Remove </Text>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <Text style={{ fontSize: 24, fontWeight: "bold" }}>${this.state.price}</Text>
                    </View>
                </View>

            </View>
        )
    }
}

//what state values should be sent as props
var mapStateToProps = null;


//what actions should be sent as props
var mapActionsToProps = {
    removeFromCart
}

export default connect(mapStateToProps, mapActionsToProps)(BasketItem);

//export default BasketItem;