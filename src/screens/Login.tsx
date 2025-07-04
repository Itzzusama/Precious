import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import {b2cConfigDev, b2cScopesDev} from '../../msalConfigDev';
import {b2cConfigProd, b2cScopesProd} from '../../msalConfigProd';
import {B2CClient} from '../../b2cClient';
import {setAuthResult, setJWTResult} from '../state/reducers/userReducer';
import {useAppSelector, useAppDispatch} from '../state/hooks';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {AuthenticationNavigatorProps} from '../navigators/AuthenticationNavigator';
import {AuthenticationNavigatorScreenNames} from '../navigators';
import {setActivePolicy} from '../state/reducers/settingsReducer';
import {authenticationScreenStyles} from '../styles';
import {Statusbar, Popup} from '../components';
import jwt_decode from 'jwt-decode';
import {isDev} from '../config/constants';

export default function Login(
  props: NativeStackScreenProps<
    AuthenticationNavigatorProps,
    AuthenticationNavigatorScreenNames.Login
  >,
) {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState<{
    title: string;
    visible: boolean;
  }>({title: 'Kein Login möglich!', visible: false});
  const {authResult} = useAppSelector(state => state.userReducer);
  const {isOnline} = useAppSelector(state => state.settingsReducer);
  const b2cClient = new B2CClient(isDev ? b2cConfigDev : b2cConfigProd);
  const scopes = isDev ? b2cScopesDev : b2cScopesProd;

  const handleSignInPress = async () => {
    if (isOnline) {
      try {
        await b2cClient.init();
        const isSignedIn = await b2cClient.isSignedIn();
        if (isSignedIn) {
          await b2cClient.signOut();
        }
        const res = await b2cClient.signIn({scopes});
        dispatch(setAuthResult(res));
        dispatch(setJWTResult(jwt_decode(res.accessToken)));
      } catch (error) {
        throw new Error('Login nicht möglich');
      }
    } else {
      setIsModalVisible({title: 'Kein Login möglich!', visible: true});
    }
  };

  return (
    <>
      <Statusbar barStyle="dark-content" />
      <SafeAreaView style={authenticationScreenStyles.containerTop} />
      <SafeAreaView style={authenticationScreenStyles.container}>
        <ImageBackground
          source={require('../assets/images/LoginBackground.jpg')}>
          <View
            style={authenticationScreenStyles.loginButtonContainerContainer}>
            {!authResult && (
              <TouchableOpacity
                onPress={handleSignInPress}
                touchSoundDisabled={false}
                style={authenticationScreenStyles.loginButtonContainer}>
                <Text style={authenticationScreenStyles.loginButtonText}>
                  Anmelden
                </Text>
              </TouchableOpacity>
            )}
            <Text style={authenticationScreenStyles.marketingTitle}>
              Schon SMART, PLUS oder MAX Kunde?
            </Text>
            <Text style={authenticationScreenStyles.marketingSubTitle}>
              Für PowerOrdoMOVE benötigen Sie eines unserer PowerOrdo Pakete.
              Mehr auf:{' '}
              <Text
                onPress={() =>
                  Linking.openURL('https://www.rapid-data.de/powerordo-pakete')
                }
                style={authenticationScreenStyles.marketingSubTitleLink}>
                www.rapid-data.de
              </Text>
            </Text>
          </View>
          <View style={authenticationScreenStyles.policyContainer}>
            <Text
              onPress={() => {
                if (isOnline) {
                  dispatch(setActivePolicy('Datenschutz'));
                  props.navigation.navigate(
                    AuthenticationNavigatorScreenNames.AuthPolicyPage,
                  );
                } else {
                  setIsModalVisible({
                    title: 'Aktion nicht möglich!',
                    visible: true,
                  });
                }
              }}
              style={authenticationScreenStyles.policyText}>
              Datenschutz
            </Text>
            <Text
              style={[
                authenticationScreenStyles.policyText,
                authenticationScreenStyles.policySeparator,
              ]}>
              |
            </Text>
            <Text
              onPress={() => {
                if (isOnline) {
                  dispatch(setActivePolicy('Impressum'));
                  props.navigation.navigate(
                    AuthenticationNavigatorScreenNames.AuthPolicyPage,
                  );
                } else {
                  setIsModalVisible({
                    title: 'Aktion nicht möglich!',
                    visible: true,
                  });
                }
              }}
              style={authenticationScreenStyles.policyText}>
              Impressum
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
      <Popup
        title={isModalVisible.title}
        onBackdropPress={() =>
          setIsModalVisible({
            ...isModalVisible,
            visible: false,
          })
        }
        isVisible={isModalVisible.visible}
      />
    </>
  );
}
