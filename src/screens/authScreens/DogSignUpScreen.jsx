import React, {useMemo, useState} from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import * as Progress from 'react-native-progress';

import {Button, Heading, FormInput} from '../../components/index.js';

import ImageUpload from '../../assets/icons/imageUpload/imageUpload.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

const DogSignUpScreen = () => {
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        label: 'Option 1',
        value: 'option1',
        labelStyle: {
          color: selectedId === '1' ? '#71C2BC' : '#979797',
          fontSize: 14,
          fontFamily: 'Poppins-Medium',
        }, // Custom label color change on select
        color: selectedId === '1' ? '#71C2BC' : '#979797', // Custom radio button color
        size: 18, // Custom radio button size
      },
      {
        id: '2',
        label: 'Option 2',
        value: 'option2',
        labelStyle: {
          color: selectedId === '2' ? '#71C2BC' : '#979797',
          fontSize: 14,
          fontFamily: 'Poppins-Medium',
        }, // Custom label color change on select
        color: selectedId === '2' ? '#71C2BC' : '#979797', // Custom radio button color
        size: 18, // Custom radio button size
      },
    ],
    [selectedId],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
          paddingTop: 30,
        }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Progress.Bar
              progress={1}
              width={width - 40}
              unfilledColor="rgba(113, 194, 188, 0.16)"
              color="#71C2BC"
              borderColor="none"
              borderWidth={0}
              height={10}
              borderRadius={16}
            />
          </View>
          <View style={styles.headingContainer}>
            <Heading
              main={'Dog Info'}
              secondary={'Please Enter Dog Details'}
              size={30}
            />
          </View>
          <View style={styles.formContainer}>
            <FormInput txtName={'Dog Name'} />
            <FormInput txtName={'Dog Date of Birth'} />
            <View style={{marginVertical: 5, rowGap: 5}}>
              <Text style={{color: 'gray'}}>Dog Sex</Text>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                containerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              />
            </View>
            <View style={{marginVertical: 5, rowGap: 5}}>
              <Text style={{color: 'gray'}}>Neutered/Spayed</Text>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                containerStyle={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              />
            </View>
            <FormInput txtName={'Dog Breed'} />
            <FormInput txtName={'Dog Weight'} />
            <View>
              <Text style={{color: 'black'}}>About Dog</Text>
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
                placeholder={
                  'Tell us more about your dog, like fun facts, favorite treat and activity'
                }
                placeholderTextColor="#010101"
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
                fontFamily: 'Poppins-Medium',
              }}>
              Upload Photo
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 5,
            }}>
            <Button buttontext={'Back'} width={'48%'} />
            <Button buttontext={'Next'} width={'48%'} />
          </View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
            }}>
            <Text
              style={{
                color: '#71C2BC',
                marginTop: 5,
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
              }}>
              Add another Dog
            </Text>
            <View
              style={{
                width: wp('30%'), // Adjust this value to match the length of the text
                height: 1,
                backgroundColor: '#71C2BC',
                marginTop: 2,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginBottom: 0,
  },
  // header: {
  // },
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

export default DogSignUpScreen;
