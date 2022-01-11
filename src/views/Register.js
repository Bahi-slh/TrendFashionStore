import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Button, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

import Home from "./Home";

class Register extends Component {
    render() {
        return (
            <View style={{ flex: 1, margin: 20 }}>
                <View>
                    <TextInput placeholder="Your name" style={{ borderColor: 'black', borderWidth: 1, padding: 10, marginVertical: 5 }} />
                    <TextInput placeholder="Email address" style={{ borderColor: 'black', borderWidth: 1, padding: 10, marginVertical: 5 }} />
                    <TextInput placeholder="Password" style={{ borderColor: 'black', borderWidth: 1, padding: 10, marginVertical: 5 }} />

                </View>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={{ color: 'gray', fontWeight: 'bold' }}>Or easily </Text>
                    <Text style={{ color: 'orange', fontWeight: 'bold' }}> connect with facebook</Text>
                </View>
                <View>
                    <Image source={{ uri: "https://i.ibb.co/Tkx7NBD/login-bg-1.jpg" }}
                        style={{ height: 350 }} />
                    <Button title="COMPLETE REGISTRATION" onPress={() => this.props.navigation.navigate("Home")}></Button>
                </View>
            </View>
        )
    }
}

export default Register;