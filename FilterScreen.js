import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const filterData = {
  danhMuc: [
    { id: '1', ten: 'Trứng', daChon: true },
    { id: '2', ten: 'Mì & Pasta', daChon: false },
    { id: '3', ten: 'Khoai tây chiên & Snack', daChon: false },
    { id: '4', ten: 'Đồ ăn nhanh', daChon: false },
  ],
  thuongHieu: [
    { id: '1', ten: 'Bộ sưu tập cá nhân', daChon: false },
    { id: '2', ten: 'Cocola', daChon: true },
    { id: '3', ten: 'Ifad', daChon: false },
    { id: '4', ten: 'Kazi Farmas', daChon: false },
  ],
};

export default function FilterScreen({ navigation }) {
  const [danhMuc, setDanhMuc] = useState(filterData.danhMuc);
  const [thuongHieu, setThuongHieu] = useState(filterData.thuongHieu);

  const doiTrangThaiCheckbox = (loai, id) => {
    if (loai === 'danhMuc') {
      setDanhMuc(
        danhMuc.map((muc) =>
          muc.id === id ? { ...muc, daChon: !muc.daChon } : muc
        )
      );
    } else if (loai === 'thuongHieu') {
      setThuongHieu(
        thuongHieu.map((th) =>
          th.id === id ? { ...th, daChon: !th.daChon } : th
        )
      );
    }
  };

  const apDungBoLoc = () => {
    const danhMucDaChon = danhMuc.filter((muc) => muc.daChon).map((muc) => muc.ten);
    const thuongHieuDaChon = thuongHieu.filter((th) => th.daChon).map((th) => th.ten);
    navigation.goBack(); // Đóng màn hình bộ lọc
    // Có thể truyền dữ liệu bộ lọc về ExploreScreen nếu cần
    // navigation.navigate('Explore', { danhMucDaChon, thuongHieuDaChon });
  };

  const renderCheckboxItem = ({ item, loai }) => (
    <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => doiTrangThaiCheckbox(loai, item.id)}
    >
      <View style={[styles.checkbox, item.daChon && styles.checkboxDaChon]}>
        {item.daChon && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>
      <Text style={styles.checkboxLabel}>{item.ten}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Bộ lọc</Text>
        <View style={{ width: 30 }} /> {/* Khoảng trống để căn giữa tiêu đề */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Danh mục</Text>
        <FlatList
          data={danhMuc}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderCheckboxItem({ item, loai: 'danhMuc' })}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Thương hiệu</Text>
        <FlatList
          data={thuongHieu}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderCheckboxItem({ item, loai: 'thuongHieu' })}
        />
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={apDungBoLoc}>
        <Text style={styles.applyButtonText}>Áp dụng Bộ lọc</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF', // Đường viền xanh giống hình
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxDaChon: {
    backgroundColor: '#28A745', // Màu xanh lá khi được chọn
    borderColor: '#28A745',
  },
  checkboxLabel: {
    fontSize: 16,
  },
  applyButton: {
    backgroundColor: '#28A745', // Nút màu xanh lá
    paddingVertical: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});