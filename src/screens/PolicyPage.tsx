// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Dimensions,
//   Appearance,
//   Platform,
// } from 'react-native';
// import {Statusbar} from '../components/presentation/Statusbar';
// import {Colors} from '../config/colors';
// import {useAppSelector} from '../state/hooks';
// import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
// import {Document} from '@contentful/rich-text-types';
// import RenderHtml from 'react-native-render-html';

// const PolicyPage = () => {
//   const darkModeEnabled = Appearance.getColorScheme() === 'dark';

//   return (
//     <SafeAreaView
//       style={[
//         styles.container,
//         {
//           backgroundColor:
//             darkModeEnabled && Platform.OS === 'android'
//               ? Colors.BLACK
//               : Colors.WHITE,
//         },
//       ]}>
//       <Statusbar barStyle="dark-content" />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={styles.scrollView}
//         bounces={false}>
//         {activePolicy === 'Datenschutz' &&
//           dataPolicyContent.map((item, index) => {
//             const policyContent = item as unknown as Document;
//             return (
//               <RenderHtml
//                 key={index}
//                 contentWidth={Dimensions.get('screen').width}
//                 source={{html: String(documentToHtmlString(policyContent))}}
//               />
//             );
//           })}
//         {activePolicy === 'Impressum' &&
//           impressumContent.map((item, index) => {
//             const policyContent = item as unknown as Document;
//             return (
//               <RenderHtml
//                 key={index}
//                 contentWidth={Dimensions.get('screen').width}
//                 source={{html: String(documentToHtmlString(policyContent))}}
//               />
//             );
//           })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     margin: 16,
//   },
// });

// export default PolicyPage;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PolicyPage = () => {
  return (
    <View>
      <Text>PolicyPage</Text>
    </View>
  )
}

export default PolicyPage

const styles = StyleSheet.create({})