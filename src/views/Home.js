import React,{Component} from 'react';
import { Text,View  } from 'react-native';

const HOMECATEGORIES=require('../json/homecategory.json');

import HomeCategory from '../components/HomeCategory';

class Home extends Component{

    render(){
        return(
            <View>
                {
                    HOMECATEGORIES.map((item, index)=>{
                        return(
                            <View>
                                <HomeCategory imageUri={item.imageUri} titleFirst={item.titleFirst} titleSecond={item.titleSecond} name={item.name} subTitle={item.subTitle} {...this.props}></HomeCategory>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default Home;