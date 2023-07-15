import { Pressable, Text,TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { onPress, title = '' ,styleButton} = props;
    return (
      <TouchableOpacity style={styleButton} onPress={onPress}>
        {title != "" && <Text >{title}</Text>}
      </TouchableOpacity>
    );
}

export {Button}