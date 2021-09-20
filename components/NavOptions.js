import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';

const NavOptions = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://links.papareact.com/3pn',
            screen: "MapScreen",
        },
        {
            id: "456",
            title: "Order food",
            image: "https://links.papareact.com/28w",
            screen: "EatsScreen",
        },
    ]
    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(item.screen)}
                        style={tw`p-2 pt-6 pb-8 bg-gray-200 m-2 w-40`}
                    >
                        <View>
                            <Image
                                style={{ height: 120, width: 120, resizeMode: 'contain' }}
                                source={{
                                    uri: item.image
                                }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                name="arrowright" color="white" type="antdesign" />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions

