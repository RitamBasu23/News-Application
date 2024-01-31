// NewsFeedScreen.tsx
// NewsFeedScreen.tsx

// NewsFeedScreen.tsx
// NewsFeedScreen.tsx
// NewsFeedScreen.tsx
import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NewsItem {
  id: number;
  title: string;
  body: string;
}

const NewsFeedScreen = () => {
  const navigation = useNavigation<any>();

  const newsData: NewsItem[] = [
    { id: 1, title: 'News Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'News Title 2', body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // Add more dummy data as needed
  ];

  const handlePress = (newsItem: NewsItem) => {
    // Navigate to the NewsDetailScreen with the corresponding news details
    navigation.navigate('NewsDetail', { newsItem  });
  };

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <Pressable onPress={() => handlePress(item)} style={styles.newsItem}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={newsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderNewsItem}
    />
  );
};

const styles = StyleSheet.create({
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
  },
});

export default NewsFeedScreen;