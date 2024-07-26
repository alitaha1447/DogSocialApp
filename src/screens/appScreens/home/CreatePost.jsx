import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  moderateScale as ms,
  verticalScale as vs,
  horizontalScale as hs,
} from '../../../utils/responsiveMetrics';
import LeftArrow from '../../../assets/icons/notification/Arrow-Left.svg';
import DogProfile from '../../../assets/icons/homePage/img4.svg';
import DownArrow from '../../../assets/icons/homePage/Arrow-Down.svg';
import {Button} from '../../../components/index.js';
import Location from '../../../assets/icons/postIcon/location.svg';
import PhotoVideo from '../../../assets/icons/postIcon/photo-video.svg';
import Camera from '../../../assets/icons/postIcon/camera.svg';
import DownArrow2 from '../../../assets/icons/postIcon/Arrow-Down2.svg';
const CreatePost = ({navigation}) => {
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
          <Text style={styles.pageTitle}>Create Post</Text>
        </View>
        <View
          style={{
            marginTop: vs(40),
            marginBottom: vs(40),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View style={styles.createCard}>
            <View style={styles.card1}>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                }}>
                <DogProfile />
                <Text
                  style={{
                    color: '#595959',
                    fontSize: 12,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Poppy
                </Text>
                <DownArrow />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                }}>
                <DogProfile />
                <DogProfile />
              </View>
            </View>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Write your Post here"
              placeholderTextColor={'#D7D7D7'}
              style={{color: '#D7D7D7', paddingHorizontal: 10, fontSize: 14}}>
              CreatePost
            </TextInput>
            <View style={{paddingHorizontal: 10, rowGap: 30}}>
              <View>
                <PhotoVideo />
                <View style={styles.forgetPasswordLine} />
              </View>
              <View>
                <Camera />
                <View style={styles.forgetPasswordLine} />
              </View>
              <View>
                <Location />
                <View style={styles.forgetPasswordLine} />
              </View>
            </View>
          </View>
          <View style={{}}>
            <Button buttontext={'Create Event'} txtColor={'#FFFFFF'} />
            <Button buttontext={'Post '} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  pageTitle: {
    flex: 2,
    color: '#212121',
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
  },
  createCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingBottom: 10,
  },
  card1: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    elevation: 5,
  },
  forgetPasswordLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#707070',
    marginTop: 5,
  },
});
export default CreatePost;
