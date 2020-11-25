import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';

export default class AddListModal extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: 'absolute', top: 64, right: 32 }}
          onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title2}>Create Todo List</Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 28,
    fontWeight: "800",
    color: color.black,
    alignSelf: "center",
    marginBottom: 16
  },
});
