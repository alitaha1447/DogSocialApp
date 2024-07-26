import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';
import * as Progress from 'react-native-progress';

import {Button, FormInput, Heading} from '../../components/index.js';

import ImageUpload from '../../assets/icons/imageUpload/imageUpload.svg';

const {width} = Dimensions.get('window');

const SignUpScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleNavigation = () => {
    navigation.navigate('DogSignUpScreen');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Progress.Bar
              progress={0.5}
              width={width - 40}
              unfilledColor="rgba(113, 194, 188, 0.16)"
              color="#71C2BC"
              borderColor="none"
              borderWidth={0}
              height={10}
              borderRadius={16}
              style={{elevation: 1}}
            />
          </View>
          <View style={styles.headingContainer}>
            <Heading
              main={'User Info'}
              secondary={'Please Enter your Details'}
              size={30}
            />
          </View>
          <View style={styles.formContainer}>
            <FormInput txtName={'Name'} />
            <FormInput txtName={'Email'} />
            <FormInput txtName={'Password'} />
            <FormInput txtName={'Phone number'} />
            <FormInput txtName={'Zip Code'} />
            <View>
              <Text style={{color: 'black'}}>About Me</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  textAlignVertical: 'top',
                  backgroundColor: '#FCFCFC',
                  padding: 10,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'gray',
                  marginVertical: 10,
                  color: '#010101',
                }}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <ImageUpload />
            <Text
              style={{
                color: '#71C2BC',
                marginTop: 5,
                fontSize: 12,
                fontFamily: 'Poppins-Medium ',
              }}>
              Upload Photo
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CheckBox
              style={styles.checkbox}
              onClick={() => {
                setIsChecked(!isChecked);
              }}
              isChecked={isChecked}
              // rightText={'I Agree to the Terms of Service and Privacy Policy'}
              // rightTextStyle={styles.checkboxText} // Added this line
            />
            <Text
              style={{
                color: '#B3B1B0',
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
              }}>
              I Agree to the{' '}
              <Text style={{color: '#020000', fontFamily: 'Poppins-Medium'}}>
                Terms of Service
              </Text>{' '}
              and{' '}
              <Text style={{color: '#020000', fontFamily: 'Poppins-Medium'}}>
                Privacy Policy
              </Text>
            </Text>
          </View>
          <View>
            <Button buttontext={'Next'} onPress={handleNavigation} />
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 5,
            }}>
            <Text
              style={{
                color: '#707070',
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
              }}>
              Have an account?
            </Text>
            <Pressable>
              <Text
                style={{
                  color: '#020000',
                  fontSize: 14,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },

  headerText: {
    color: 'red',
    fontSize: 18,
  },
  headingContainer: {
    marginTop: 10,
  },
  formContainer: {
    marginTop: 10,
  },

  checkboxText: {
    color: '#B3B1B0',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
});

export default SignUpScreen;
