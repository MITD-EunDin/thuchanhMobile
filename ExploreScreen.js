import React from 'react';
import { View, Text,TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import categories from './data/category';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

export default function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Products</Text>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search Store" />
        <Feather name="search" size={20} color="gray" />
      </View>

      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Category', { category: item })}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.a}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff', flex: 1,marginTop:30, },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  card: {
    backgroundColor: '#93B175B1',
    alignItems: 'center',
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    height:200,
  },
  a:{
    fontSize:20,
    fontWeight:'bold',
  },
  image: { width: 100, height: 60, margin: 28,resizeMode: "contain", },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 10,
    margin: 16,
  },
});
