import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { Carrot } from 'lucide-react-native';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header Location + Search */}
      <Carrot size={50} color="#F3603F" style = {styles.image3}/>

      <View style={styles.header}>
      <Text style={styles.locationText}><Ionicons name="location-sharp" size={20} color="#4CAF50" />Dhaka, Banassre</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search Store" />
        <Feather name="search" size={20} color="gray" />
      </View>

      <ScrollView>
        {/* Banner */}
        <Image style={styles.banner} source={require('./img/banner.png')} />

        {/* Exclusive Offer */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Organic Bananas', '$4.99', require('./img/tao.png'))}
          {renderProduct('Red Apple', '$4.99', require('./img/tao.png'))}
          
        </ScrollView>

        {/* Best Selling */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Tomato', '$4.99', require('./img/ot.png'))}
          {renderProduct('Ginger', '$4.99', require('./img/gung.png'))}
        </ScrollView>

        {/* Groceries */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <Text style={styles.seeAll}>See all</Text>
          
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryList}>
          {renderProduct1('Dal Masoor', require('./img/dal.png'))}
          {renderProduct1('Rice Premium', require('./img/rice.png'))}
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalList}>
          {renderProduct('Beef Bone', '$4.99', require('./img/lon.png'))}
          {renderProduct('Broiler Chicken', '$4.99', require('./img/ga.png'))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}

    </View>
  );
}

function renderProduct(name, price, imageSource) {
  return (
    <View style={styles.productCard}>
      <Image style={styles.productImage} source={imageSource} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <View style={styles.c}>
        <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

function renderProduct1(name,imageSource) {
  return (
    <View style={styles.productCard1}>
      <Image style={styles.productImage1} source={imageSource} />
      <Text style={styles.productName1}>{name}</Text>
    </View>
  );
}

function renderCategory(title) {
  return (
    <View style={styles.categoryCard}>
      <Text style={styles.categoryText}>{title}</Text>
    </View>
  );
}

function renderMenuIcon(iconName, label, active = false) {
  let iconComponent;

  switch (label) {
    case 'Shop':
      iconComponent = <Feather name="shopping-bag" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Explore':
      iconComponent = <Feather name="search" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Cart':
      iconComponent = <Feather name="shopping-cart" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Favourite':
      iconComponent = <AntDesign name="hearto" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    case 'Account':
      iconComponent = <Feather name="user" size={20} color={active ? '#4CAF50' : 'gray'} />;
      break;
    default:
      iconComponent = <Feather name="home" size={20} color={active ? '#4CAF50' : 'gray'} />;
  }

  return (
    <View style={styles.menuItem}>
      {iconComponent}
      <Text style={[styles.menuLabel, active && { color: '#4CAF50' }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  locationText: {
    marginLeft: 8,
    fontWeight: '500',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    paddingHorizontal: 10,
    margin: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  banner: {
    width: '90%',
    height: 140,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  seeAll: {
    color: '#4CAF50',
  },
  horizontalList: {
    paddingLeft: 16,
    paddingVertical: 10,
  },
  productCard: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: '',
  },
  productCard1: {
    width: 180,
    backgroundColor: '#F8A44C',
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
    display:'flex',
    flexDirection: 'row',

  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    left:40
    
  },
  productName: {
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 6,
    
  },
  productImage1: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  productName1: {
    fontWeight: '500',
    textAlign: 'left',
    marginTop: 6,
    
  },
  productPrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  addButton: {
    marginTop: 8,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:30,
  },
  categoryList: {
    paddingLeft: 16,
    marginTop: 8,
  },
  categoryCard: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontWeight: '500',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
  image3:{
    left: '45%',
    bottom: '0',
    height:40,
    resizeMode: "contain",
  },
  c:{
    top:-30,
    alignItems: 'flex-end',
  }
});