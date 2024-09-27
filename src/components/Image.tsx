import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image as RNImage,
  ImageProps,
  StyleSheet,
  View,
} from 'react-native';
import {Column} from './Column';
import {Images} from '../themes';

export const Image = (props: ImageProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Column>
      {loading && (
        <View style={styles.placeholderContainer}>
          <ActivityIndicator size="small" color="#007bff" />
        </View>
      )}
      <RNImage
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        // defaultSource={Images.imagePlaceholder}
        {...props}
      />
    </Column>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
