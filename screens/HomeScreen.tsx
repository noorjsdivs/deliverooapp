import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="px-4">
        <View>
          <View className="flex-row pb-3 items-center space-x-2">
            <Image
              source={{uri: 'https://links.papareact.com/wru'}}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!
              </Text>
              <Text className="font-bold text-xl">
                Current Location <ChevronDownIcon size={20} color="#00CCBB" />
              </Text>
            </View>
            <UserIcon size={35} color="#00CCBB" />
          </View>
        </View>

        {/* Search box */}
        <View className="flex-row items-center space-x-2 pb-2">
          <View className="flex-row flex-1 items-center space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray" size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
      </View>
      {/* body */}
      <ScrollView className="bg-gray-100">
        <View>
          {/* Categories */}
          <Categories />
          {/* Featured Rows */}
          <FeaturedRow
            _id="1001"
            title="Featured"
            description="Paid placements from our partners"
          />
          {/* Tastsy Discounts */}
          <FeaturedRow
            _id="1002"
            title="Tasty Discounts"
            description="Everyones been enjoying these juicy discounts!"
          />
          {/* Offers near you */}
          <FeaturedRow
            _id="1003"
            title="Offers near you!"
            description="Why not support your local restaurant tonight!"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
