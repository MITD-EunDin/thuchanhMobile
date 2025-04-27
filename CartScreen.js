import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Bell Pepper Red',
      weight: '1kg, Price',
      image: './img/gung.png', // Thay bằng URL hình ảnh thực tế
      quantity: 1,
      price: 4.99,
    },
    {
      id: '2',
      name: 'Egg Chicken Red',
      weight: '4pcs, Price',
      image: './img/gung.png',
      quantity: 1,
      price: 1.99,
    },
    {
      id: '3',
      name: 'Organic Bananas',
      weight: '12kg, Price',
      image: './img/gung.png',
      quantity: 1,
      price: 3.00,
    },
    {
      id: '4',
      name: 'Ginger',
      weight: '250gm, Price',
      image: './img/gung.png',
      quantity: 1,
      price: 2.99,
    },
  ]);

  // Tính tổng giá tiền
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  // Tăng số lượng
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Giảm số lượng
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Xóa mặt hàng
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      {/* Nút xóa */}
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
        activeOpacity={0.7}
      >
        <X color="#777" size={20} />
      </TouchableOpacity>

      {/* Hình ảnh mặt hàng */}
      <Image source={{ uri: item.image }} style={styles.itemImage} />

      {/* Thông tin mặt hàng */}
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemWeight}>{item.weight}</Text>

        {/* Nút tăng/giảm số lượng */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => decreaseQuantity(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.quantityText}>−</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => increaseQuantity(item.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Giá tiền */}
      <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Danh sách mặt hàng */}
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cartList}
      />

      {/* Nút Go to Checkout */}
      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('Checkout')} // Thay 'Checkout' bằng màn hình thanh toán
        activeOpacity={0.7}
      >
        <Text style={styles.checkoutText}>Go to Checkout</Text>
        <Text style={styles.totalPrice}>${totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  cartList: {
    paddingHorizontal: 15,
    paddingBottom: 100, // Để tránh nút checkout che khuất danh sách
  },
  cartItem: {
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
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemWeight: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 10,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#28c38f', // Màu xanh lá giống hình ảnh
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CartScreen;