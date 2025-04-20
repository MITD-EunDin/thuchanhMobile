import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <View style={styles.counter}>
        <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))}>
          <Text style={styles.counterButton}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(q => q + 1)}>
          <Text style={styles.counterButton}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      
      <Text style={styles.detail}>Product Detail:</Text>
      <Text style={styles.detail1}>{product.description}</Text>
      
      {/* Tách "Nutritions" và "100g" thành một hàng với flex */}
      <View style={styles.nutritions}>
        <Text style={styles.detail}>Nutritions</Text>
        <Text style={styles.detail}>100g</Text>
      </View>
      
      <Image source={require('./img/star.png')} style={styles.image1} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
      flex: 1,
    },
    image: {
      width: '80%', // Giảm kích thước hình ảnh để cân đối
      height: 300, // Giảm chiều cao để không chiếm quá nhiều không gian
      resizeMode: 'contain',
      alignSelf: 'center', // Căn giữa hình ảnh
      marginVertical: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 10,
      textAlign: 'center', // Căn giữa tiêu đề
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // Căn giữa bộ đếm
      marginVertical: 10,
    },
    counterButton: {
      fontSize: 24,
      paddingHorizontal: 15,
      color: 'black',
    },
    quantity: {
      fontSize: 18,
      marginHorizontal: 10,
    },
    price: {
      fontSize: 18,
      color: 'green',
      position: 'absolute', // Đặt vị trí tuyệt đối để căn chỉnh với bộ đếm
      right: 20, // Đưa giá gần bên phải
      top: 350, // Điều chỉnh vị trí theo bộ đếm
    },
    detail: {
      marginVertical: 5, // Giảm khoảng cách
      fontSize: 18,
      fontWeight: 'bold',
    },
    detail1: {
      marginBottom: 10, // Giảm khoảng cách xuống 10 thay vì 40
      fontSize: 16,
      color: '#555',
    },
    nutritions: { // Tạo style riêng cho dòng "Nutritions 100g"
      marginVertical: 5,
      fontSize: 18,
      fontWeight: 'bold',
      flexDirection: 'row',
      justifyContent: 'space-between', // Căn đều giữa "Nutritions" và "100g"
    },
    image1: {
      width: 80, // Đặt kích thước hợp lý cho hình ảnh sao
      height: 20,
      marginTop: 5,
      alignSelf: 'flex-end', // Đặt hình ảnh sao ở bên phải
    },
    button: {
      backgroundColor: 'green',
      padding: 14,
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 20, // Thêm khoảng cách trên nút
      marginBottom: 20, // Thêm khoảng cách dưới nút
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });