import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

class ShippingPartner extends Component {
    render() {

        const { imageUri, name, description } = this.props;
        return (
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: "space-between", marginBottom: 15 }}>
                <View>
                    <Image source={{ uri: imageUri }} style={{ width: wp("20%"), height: hp("10%") }} />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', alignSelf: 'flex-end' }}>{name}</Text>
                    <Text>{description}</Text>
                </View>
            </View>
        )
    }
}

export default ShippingPartner;