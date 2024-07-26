import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale as ms,
  verticalScale as vs,
  horizontalScale as hs,
} from '../../../utils/responsiveMetrics';
import LeftArrow from '../../../assets/icons/notification/Arrow-Left.svg';
const NotificationScreen = ({navigation}) => {
  const text = [
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
    {name: 'Alex'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.innerContainer}>
        <View style={styles.headerTitle}>
          <View style={{flex: 1}}>
            <Pressable onPress={() => navigation.goBack()}>
              <LeftArrow />
            </Pressable>
          </View>
          <Text
            style={{
              flex: 2,
              color: '#212121',
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Notification
          </Text>
        </View>
        <View style={{marginTop: 40, paddingBottom: 40}}>
          <FlatList
            data={text}
            // contentContainerStyle={styles.flatListContent}
            renderItem={({item}) => (
              <View style={styles.notificationCard}>
                <View style={{}}>
                  <Image
                    source={require('../../../assets/images/homeImage/DogProfile.png')}
                  />
                  <View style={styles.ownerProfile}>
                    <Image
                      source={require('../../../assets/images/homeImage/Rectangle34624406.png')}
                    />
                    <Image
                      source={require('../../../assets/images/homeImage/Rectangle34624406.png')}
                    />
                  </View>
                </View>
                <View style={{}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      fontFamily: 'Poppins-Medium',
                    }}>
                    Like
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 9,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    Adarsh liked your post and 2 more...
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  innerContainer: {
    paddingHorizontal: hs(20),
    top: 25,
    flex: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCard: {
    elevation: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    columnGap: 20,
    marginBottom: 15,
  },
  ownerProfile: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 5,
    position: 'absolute',
    bottom: vs(-5),
    left: hs(20),
  },
  //   flatListContent: {
  //     paddingBottom: 20, // Add padding to the bottom of the FlatList content
  //   },
});
export default NotificationScreen;
