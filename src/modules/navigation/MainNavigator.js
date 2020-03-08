import React from 'react';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import { TouchableOpacity, View, Image } from "react-native";
import { images } from '../../config';

import ProductList from '../products/ProductList';
import Summary from '../products/Summary';

const stackNavigator = createStackNavigator({
        ProductList: { screen: ProductList },
        Summary: { screen: Summary }
    },
   
);

export default createAppContainer(stackNavigator);