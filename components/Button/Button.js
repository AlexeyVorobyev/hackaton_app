import { Pressable, Text,TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { onPress, title = 'Save' ,styleButton} = props;
    return (
      <TouchableOpacity style={styleButton} onPress={onPress}>
        <Text >{title}</Text>
      </TouchableOpacity>
    );
  }
export {Button}