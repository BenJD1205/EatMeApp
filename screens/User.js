import React,{useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground} from 'react-native';

import {FONTS, SIZES, COLORS, icons, images, dummyData} from '../constants'
import {TextButton} from '../components';

const User = () => {

    function renderHeader(){

        const [user, setUser]  = React.useState(dummyData.User)

        // useEffect(() => {
        //     setIsUser(true)
        //     // const data = dummyData.User.find(x => x.id === id)
        //     // setUser(data)
        // },[])

        return(
            <View
                style={{
                    width:'100%',
                    height:290,
                    ...styles.shadow
                }}
            >
                <ImageBackground
                    source={images.bkground}
                    resizeMode="cover"
                    style={{
                        flex:1, 
                        alignItems:'center'
                    }}
                >   
                    {user.map((u) => (
                        <View key={`user-${u.id}`}>
                            <View    
                                style={{
                                    width:'100%',
                                    marginTop:SIZES.padding*2,
                                    flexDirection:'row',
                                    alignItems: 'center',
                                    paddingHorizontal:SIZES.padding,
                                }}
                            >   
                                <View>
                                    <TouchableOpacity
                                        style={{
                                            width:50,
                                            height:50,
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            backgroundColor:'white',
                                            borderRadius:10
                                        }}
                                    >
                                        <Image 
                                            source={u.images ? images.avatar_2 : images.noavatar}
                                            resizeMode="contain"
                                            style={{
                                                width:30,
                                                height:30
                                            }}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{...FONTS.h4, paddingHorizontal:SIZES.padding}}>
                                        {u.username}
                                </Text>
                                <View style={{ flex: 1}}></View>
                                <View
                                    style={{
                                        paddingHorizontal:SIZES.padding,
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            paddingRight: SIZES.padding * 2,
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            source={icons.notification}
                                            style={{
                                                width:30,
                                                height:30,
                                            }}
                                            resizeMode="contain"
                                        >

                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View 
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal:SIZES.padding,
                                    paddingVertical: SIZES.padding,
                                }}
                            >   
                                <View style={{flexDirection:'row',paddingHorizontal:SIZES.padding}}>
                                    <Image 
                                        source={icons.user}
                                        style={{
                                            width:25,
                                            height:25
                                        }}
                                    />
                                    <Text style={{...FONTS.h4, marginLeft:10}}>{u.gender}</Text>
                                </View>
                                <View 
                                    style={{
                                        flexDirection:'row',
                                        paddingHorizontal:SIZES.padding,
                                        marginTop:10
                                    }}
                                >
                                    <Image 
                                        source={icons.email}
                                        style={{
                                            width:25,
                                            height:25
                                        }}
                                    />
                                    <Text style={{...FONTS.h4, marginLeft:10}}>{u.email}</Text>
                                </View>
                                <View 
                                    style={{
                                        flexDirection:'row',
                                        paddingHorizontal:SIZES.padding,
                                        marginTop:10
                                    }}>
                                    <Image 
                                        source={icons.phone}
                                        style={{
                                            width:25,
                                            height:25
                                        }}
                                    />
                                    <Text style={{...FONTS.h4, marginLeft:10}}>{u.phone}</Text>
                                </View>
                                <View 
                                    style={{
                                        flexDirection:'row',
                                        paddingHorizontal:SIZES.padding,
                                        marginTop:10
                                    }}>
                                    <Image 
                                        source={icons.star}
                                        style={{
                                            width:25,
                                            height:25
                                        }}
                                    />
                                    <Text style={{...FONTS.h4, marginLeft:10}}>
                                        {u.level === 1 ? "bronze" : "sliver" }
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                    {/*Profile*/}
                </ImageBackground>
            </View>
        )
    }

    function renderSettings(){
        return(
            <View> 
                <TextButton
                    label="Settings"
                    buttonContainerStyle={{
                        marginTop:SIZES.padding,
                        marginLeft:3,
                        backgroundColor:COLORS.transparent
                    }}
                    labelStyle={{
                        color:COLORS.black,
                        ...FONTS.h3
                    }}
                />
                <TextButton
                    label="About"
                    buttonContainerStyle={{
                        marginTop:SIZES.padding,
                        marginLeft:3,
                        backgroundColor:COLORS.transparent
                    }}
                    labelStyle={{
                        color:COLORS.black,
                        ...FONTS.h3
                    }}
                />
                <TextButton
                    label="Contact"
                    buttonContainerStyle={{
                        marginTop:SIZES.padding,
                        marginLeft:3,
                        backgroundColor:COLORS.transparent
                    }}
                    labelStyle={{
                        color:COLORS.black,
                        ...FONTS.h3
                    }}
                />
                <TextButton
                    label="Logout"
                    buttonContainerStyle={{
                        marginTop:SIZES.padding,
                        marginLeft:3,
                        backgroundColor:COLORS.transparent
                    }}
                    labelStyle={{
                        color:COLORS.black,
                        ...FONTS.h3
                    }}
                />
            </View>
        )
    }

    return(
        <View style={styles.container}>
            {renderHeader()}
            {renderSettings()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})
export default User