import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Colors } from '../config/colors';
import { useAppSelector, useAppDispatch } from '../state/hooks';
import RNRestart from 'react-native-restart';
import VersionCheck from 'react-native-version-check';
import detailScreenStyles from '../styles/DetailScreenStyles';

const ErrorBoundaryScreen = (
  props: {
    error?: Error;
    FallbackComponent?:
      | React.ComponentType<{
          error: Error;
          resetError: () => void;
        }>
      | undefined;
  } & { errorStacktrace?: string },
) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Leider ist etwas schiefgegangen.</Text>
        <Text style={styles.subTitle}>
          Bitte schließen Sie die App und öffnen Sie sie erneut. Alternativ
          löschen Sie die App und installieren Sie sie erneut.
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => RNRestart.Restart()}
          style={detailScreenStyles.bottomButtonContainerCheck}
        >
          <Text style={detailScreenStyles.bottomButtonText}>
            App neu starten
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ErrorBoundaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginVertical: 16,
  },
  title: {
    width: '100%',
    marginVertical: 32,
    fontSize: 30,
    lineHeight: 34,
    color: Colors.DARK_GREY,
    fontFamily: 'FiraGO',
    textAlign: 'center',
  },
  subTitle: {
    width: '100%',
    marginVertical: 16,
    fontSize: 20,
    lineHeight: 24,
    color: Colors.DARK_GREY,
    fontFamily: 'FiraGO',
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopColor: Colors.GREY,
    borderTopWidth: StyleSheet.hairlineWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonContainer: {
    height: '50%',
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.ORANGE_ACTIVE,
  },
  bottomButtonText: {
    fontSize: 16,
    color: Colors.WHITE,
    fontFamily: 'FiraGO',
  },
});
