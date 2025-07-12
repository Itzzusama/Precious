import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Colors } from '../../../config/colors'; // Adjust path if needed
import Header from '../../../components/Header';
import { ScreenWrapper } from '../../../components';

const sampleFaqs = [
  {
    question: 'What is this app about?',
    answer: 'This app is designed to help users manage their tasks efficiently and stay organized.',
  },
  {
    question: 'How can I reset my password?',
    answer: 'Go to the login screen and tap on "Forgot Password". Follow the instructions sent to your email.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Yes, we use advanced encryption and security practices to protect your personal data.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ScreenWrapper
      scrollEnabled
      paddingHorizontal={15}
      headerUnScrollable={() => <Header title="FAQs" name='Faqs' profile/>}
    >
      <ScrollView>
        {sampleFaqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <TouchableOpacity onPress={() => toggleFAQ(index)}>
              <Text style={styles.question}>{faq.question}</Text>
            </TouchableOpacity>
            {activeIndex === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Faqs;

const styles = StyleSheet.create({
  faqContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: Colors.border || '#ccc',
    paddingBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primaryColor || '#333',
  },
  answer: {
    marginTop: 8,
    fontSize: 14,
    color: Colors.black || '#666',
    lineHeight: 20,
  },
});
