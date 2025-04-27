import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

const Myfavorite = ({ navigation }) => {
  const products = [
    {
      id: '1',
      name: 'Sprite Can',
      volume: '325ml, Price',
      image: 'https://via.placeholder.com/50', // Thay bằng URL hình ảnh thực tế
      price: 1.50,
    },
    {
      id: '2',
      name: 'Diet Coke',
      volume: '355ml, Price',
      image: 'https://via.placeholder.com/50',
      price: 1.99,
    },
    {
      id: '3',
      name: 'Apple & Grape Juice',
      volume: '2L, Price',
      image: 'https://via.placeholder.com/50',
      price: 15.50,
    },
    {
      id: '4',
      name: 'Coca Cola Can',
      volume: '325ml, Price',
      image: 'https://via.placeholder.com/50',
      price: 4.99,
    },
    {
      id: '5',
      name: 'Pepsi Can',
      volume: '330ml, Price',
      image: 'https://via.placeholder.com/50',
      price: 4.99,
    },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productItem}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })} // Thay 'ProductDetail' bằng màn hình chi tiết sản phẩm
      activeOpacity={0.7}
    >
      {/* Hình ảnh sản phẩm */}
      <Image source={{ uri: item.image }} style={styles.productImage} />

      {/* Thông tin sản phẩm */}
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productVolume}>{item.volume}</Text>
      </View>

      {/* Giá và mũi tên */}
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        <ChevronRight color="#333" size={20} />
      </View>
    </TouchableOpacity>
  );

  const handleAddAllToCart = () => {
    // Logic để thêm tất cả sản phẩm vào giỏ hàng
    console.log('Added all products to cart:', products);
    // Bạn có thể gọi API hoặc cập nhật state giỏ hàng ở đây
  };

  return (
    <View style={styles.container}>
      {/* Danh sách sản phẩm */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />

      {/* Nút Add All to Cart */}
      <TouchableOpacity
        style={styles.addAllButton}
        onPress={handleAddAllToCart}
        activeOpacity={0.7}
      >
        <Text style={styles.addAllText}>Add All to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 70,
  },
  productList: {
    paddingHorizontal: 15,
    paddingBottom: 80, // Để tránh nút "Add All to Cart" che khuất danh sách
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productVolume: {
    fontSize: 14,
    color: '#777',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  addAllButton: {
    backgroundColor: '#28c38f', // Màu xanh lá giống hình ảnh
    borderRadius: 25,
    paddingVertical: 15,
    margin: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addAllText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Myfavorite;