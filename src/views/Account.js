import React, { Component } from "react";
import { View, Text, ImageBackground, Dimensions, Button } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const { width } = Dimensions.get("window");

import Home from "./Home";
import Register from "./Register";

class Account extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: hp("20%"), flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 100 }}>Trendz</Text>
                    <Text style={{ fontSize: 30, padding: 18 }}>Online Store</Text>
                </View>
                <View >
                    <ImageBackground source={{ uri: "https://i.ibb.co/Tkx7NBD/login-bg-1.jpg" }}
                        style={{
                            height: 400,
                            width: width
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 20, marginTop: hp("45%") }}>
                            <Button title="REGISTER" onPress={() => this.props.navigation.navigate("Register")}></Button>
                            <Button title="LOGIN" onPress={() => this.props.navigation.navigate("Home")}></Button>
                        </View>

                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default Account;