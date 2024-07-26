import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  horizontalScale as hs,
  verticalScale as vs,
} from '../../../utils/responsiveMetrics';
import Location from '../../../assets/icons/homePage/img3.svg';
import Notification from '../../../assets/icons/homePage/img1.svg';
import Search from '../../../assets/icons/homePage/img2.svg';
import DogProfile from '../../../assets/icons/homePage/img4.svg';
import DoGProfile2 from '../../../assets/images/homeImage/dogProfile.svg';
import DogOwner from '../../../assets/images/homeImage/dogOwner.svg';
import ThreeDot from '../../../assets/images/homeImage/dotted.svg';
import Like from '../../../assets/icons/homePage/like.svg';
import Comment from '../../../assets/icons/homePage/comment.svg';
import Send from '../../../assets/icons/homePage/send.svg';
import GroupPic from '../../../assets/images/homeImage/groupPic.svg';
import Plus from '../../../assets/icons/homePage/plusIcon.svg';

const HomeScreen = ({navigation}) => {
  const [active, setActive] = useState('Global');

  const test = [
    {
      name: 'roy',
    },
    {
      name: 'Dog Name',
    },
  ];

  const handleNotification = () => {
    console.log('first');
    navigation.navigate('Notification');
  };

  return (
    <SafeAreaView
      style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#F5F5F5'}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={{top: vs(32), flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Location />
            <Text
              style={{
                color: '#666666',
                fontSize: 12,
                fontFamily: 'Poppins-SemiBold',
              }}>
              Mission, San Fra...
            </Text>
          </View>
          <View style={{flexDirection: 'row', columnGap: 10}}>
            <Search />
            <Pressable>
              <Notification onPress={handleNotification} />
            </Pressable>

            <DogProfile />
          </View>
        </View>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[styles.switch, active === 'Global' && styles.activeSwitch]}
            onPress={() => setActive('Global')}>
            <Text
              style={[
                styles.switchText,
                active === 'Global' && styles.activeSwitchText,
              ]}>
              Global
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.switch, active === 'Local' && styles.activeSwitch]}
            onPress={() => setActive('Local')}>
            <Text
              style={[
                styles.switchText,
                active === 'Local' && styles.activeSwitchText,
              ]}>
              Local
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={test}
          renderItem={({item}) => (
            <View
              style={styles.scrollViewContent}
              contentContainerStyle={styles.scrollViewContainer}>
              <View>
                <View style={styles.homeCard}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={{flexDirection: 'row', columnGap: 15}}>
                      <View>
                        <Image
                          source={require('../../../assets/images/homeImage/DogProfile.png')}
                          style={{height: vs(50), width: hs(50)}}
                        />
                        <Image
                          source={require('../../../assets/images/homeImage/Rectangle34624406.png')}
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: hs(40),
                          }}
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 12,
                            fontFamily: 'Poppins-SemiBold',
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 10,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          Mission, San Francisco
                        </Text>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 10,
                            fontFamily: 'Poppins-Regular',
                          }}>
                          2 mins ago
                        </Text>
                      </View>
                    </View>
                    <View>
                      <ThreeDot />
                    </View>
                  </View>
                  {/*  */}
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 10,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      There are many variations of passages of Lorem Ipsum #Dog
                      #Park
                    </Text>
                  </View>
                  {/*  */}
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('../../../assets/images/homeImage/groupPic.png')}
                      style={styles.groupPic}
                    />
                  </View>
                  {/*  */}
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: 'row',
                      columnGap: 20,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <Like />
                      <Text style={{color: '#000'}}>2.4k</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <Comment />
                      <Text style={{color: '#000'}}>2.4k</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <Send />
                      <Text style={{color: '#000'}}>234</Text>
                    </View>
                  </View>
                  {/*  */}
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        style={{position: 'absolute', bottom: vs(20), right: hs(20)}}
        onPress={() => navigation.navigate('CreatePost')}>
        <Plus />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    marginTop: vs(20),
    borderRadius: 34,
    flexDirection: 'row',
    columnGap: 10,
    elevation: 1,
  },
  switch: {
    borderRadius: 34,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  activeSwitch: {
    backgroundColor: '#71C2BC',
  },
  switchText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#707070',
  },
  activeSwitchText: {
    color: '#FFFFFF',
  },
  scrollViewContent: {
    // flex: 1,
  },
  scrollViewContainer: {
    // paddingHorizontal: 20,
    // paddingTop: 30,
    // flexGrow: 1,
  },
  homeCard: {
    padding: 10,
    marginTop: 20,
    // marginBottom: 40,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    borderRadius: 10,
    width: '100%',
  },
  imageContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  groupPic: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default HomeScreen;
