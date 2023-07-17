import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

export const AddPostScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission not granted');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setSelectedImage(photo.uri);
    }
  };

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => setSelectedImage(item)}>
      <Image source={{ uri: item }} style={styles.gridImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        {cameraPermission ? (
          <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
            <View style={styles.captureButtonContainer}>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <Text style={styles.captureButtonText}>Capture</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <Text>No camera permission</Text>
        )}
        <View style={styles.gridContainer}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} resizeMode="cover" />
        )}
        <Button title="Choose Image" onPress={handleImagePicker} />
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  captureButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
  },
  captureButtonText: {
    color: '#000',
  },
  selectedImage: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  gridContainer: {
    height: 100,
    alignItems: 'center',
    backgroundColor: 'rgba(255,0,0,0.1)',
  },
  gridImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
});
