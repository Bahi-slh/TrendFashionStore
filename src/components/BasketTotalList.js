import React, { Component } from "react";
import { View, Text } from "react-native";

class BasketTotalList extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', justifyContent: "space-between",  paddingVertical: 20, paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{this.props.label}</Text>
                <Text style={{ fontWeight: 'bold' }}>${this.props.price}</Text>
            </View>
        )
    }
}

export default BasketTotalList;