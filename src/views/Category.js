import React, { Component } from "react";
import { View, Text, ImageEditor, ScrollView } from "react-native";

import ProductItem from '../components/ProductItem';

class Category extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            currentName: ''
        }
    }

    getSubCategoryData = (categoryName) => {
        let SubCategories = [];
        if (categoryName.toLowerCase() == "womens") {
            SubCategories = require('../json/category-women.json');
        }
        else if (categoryName.toLowerCase() == "mens") {
            SubCategories = require('../json/category-men.json');
        }
        else if (categoryName.toLowerCase() == "kids") {
            SubCategories = require('../json/category-kids.json');
        }
        return SubCategories;
    }

    renderSubCategories = (categoryName) => {
        let SubCategories = this.getSubCategoryData(categoryName);
        //SubCategories=require('../json/category-'+categoryName.toLowerCase()+".json");

        return (
            SubCategories.map((item, i) => {
                return (
                    <Text key={i} onPress={
                        () => this.setState({
                            currentName: item,
                            currentIndex: i
                        })
                    }
                        style={{ fontSize: 18, color: this.state.currentIndex === i ? "orange" : "white" }}>{item}</Text>
                )
            })
        )
    }

    getProductList = (categoryName, subCategoryName) => {
        let products = [];
        if (categoryName.toLowerCase() == "womens") {
            if (subCategoryName.toLowerCase() == "dresses") {
                products = require('../json/product-women-dresses.json');
            }
            else if (subCategoryName.toLowerCase() == "shoes") {
                products = require('../json/product-women-shoes.json');
            }
            else if (subCategoryName.toLowerCase() == "shorts") {
                products = require('../json/product-women-shorts.json');
            }
            else if (subCategoryName.toLowerCase() == "skirts") {
                products = require('../json/product-women-skirts.json');
            }
        }
        if (categoryName.toLowerCase() == "mens") {
            if (subCategoryName.toLowerCase() == "shoes") {
                products = require('../json/product-men-shoes.json');
            }
            
        }
        if (categoryName.toLowerCase() == "kids") {
            if (subCategoryName.toLowerCase() == "dresses") {
                products = require('../json/product-women-dresses.json');
            }
            else if (subCategoryName.toLowerCase() == "shoes") {
                products = require('../json/product-women-shoes.json');
            }
            else if (subCategoryName.toLowerCase() == "shorts") {
                products = require('../json/product-women-shorts.json');
            }
            else if (subCategoryName.toLowerCase() == "skirts") {
                products = require('../json/product-women-skirts.json');
            }
        }
        return products;
    }

    renderProductList = (categoryName, subCategoryName = '') => {
        let SubCategories = this.getSubCategoryData(categoryName);

        if (this.state.currentName != '') {
            subCategoryName = this.state.currentName
        }

        if (subCategoryName == '') {
            subCategoryName = SubCategories[0];
        }
        let Products = this.getProductList(categoryName, subCategoryName);

        return (
            Products.map((item, i) => {
                return (
                    <ProductItem key={i}

                        id={item.id} imageUri={item.imageUri} priceOne={item.priceOne} priceTwo={item.priceTwo} name={item.name} onPress={() => this.props.navigation.navigate("ProductDetail", {
                            id: item.id,
                            name: item.name,
                            imageUri: item.imageUri,
                            priceOne: item.priceOne,
                            priceTwo: item.priceTwo
                        })}></ProductItem>
                )
            })
        )
    }
    render() {
        const { categoryName } = this.props.route.params;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ backgroundColor: 'grey', color: 'black', paddingTop: 10, paddingBottom: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
                            {this.renderSubCategories(categoryName)}
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "space-between", paddingLeft: 10, paddingRight: 10 }}>
                        {this.renderProductList(categoryName)}
                    </View>
                </ScrollView>
            </View>
        )
    }

}

export default Category;