import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Button, Image } from "react-native";


class Terms extends Component {
    render() {
        return (
            <View style={{ flex: 1, margin: 20 }}>
                <Text style={{ color: 'orange', marginVertical: 15, fontSize: 22 }}>General Terms</Text>
                <Text>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.
                </Text>
                <Text style={{ color: 'orange', marginVertical: 15, fontSize: 22 }}>Privacy Agreement</Text>
                <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                <Text style={{ color: 'orange', marginVertical: 15, fontSize: 22 }}>Personal Data</Text>
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </Text>
            </View>
        )
    }
}



export default Terms;