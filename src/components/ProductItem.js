import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

class ProductItem extends Component {


    render() {
        const { imageUri, name, priceOne, priceTwo, onPress } = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                < View style={{ width: wp("44%"), marginTop: 10 }}>
                    <View style={{ width: wp("44%"), height: wp("55%"), marginBottom: 10 }}>
                        <Image source={{ uri: imageUri }} style={{ flex: 2 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold', marginBottom: 10 }}>{name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>${priceOne}</Text>
                        <Text style={{ fontSize: 12, textDecorationLine: "line-through", marginLeft: 10 }}>{priceTwo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProductItem;