import React, { Component } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const {width}=Dimensions.get("window");

class HomeCategory extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Category", {
                    categoryName: this.props.name
                })}>
                    <ImageBackground source={{ uri: this.props.imageUri }}
                        style={{
                            height: 200,
                            width: width,
                            paddingLeft: wp("10%"),
                            paddingTop: hp("5%")
                        }}>
                        <View style={{ paddingBottom: hp("5%") }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{this.props.name}</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{this.props.titleSecond}</Text>
                        </View>

                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{this.props.subTitle}</Text>
                        </View>

                    </ImageBackground>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeCategory;