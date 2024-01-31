// NewsDetailScreen.tsx
// NewsDetailScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  NewsDetail: { newsItem: { id: number; title: string; body: string } };
};

type NewsDetailScreenRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

const NewsDetailScreen = () => {
  const route = useRoute<NewsDetailScreenRouteProp>();
  const { newsItem } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.body}>{newsItem.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 18,
  },
});

export default NewsDetailScreen;