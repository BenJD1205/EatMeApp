import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const OrderDelivery = () => {

    function renderMap() {
        return(
            <View style={{flex: 1}}>
                <MapView
                    style={{
                        flex:1
                    }}
                >

                </MapView>
            </View>
        )
    }

    return(
        <View style={{flex:1}}>
           {renderMap()}
        </View>
    )
}

export default OrderDelivery