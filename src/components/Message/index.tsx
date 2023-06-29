import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setMessage} from '~/store/message';

const Message = () => {
  const dispatch = useDispatch();
  const {message} = useSelector((state: any) => state.message);

  const handlePress = () => {
    dispatch(setMessage('Message from Component'));
  };

  return (
    <View>
      <Text>{message}</Text>
      <Button title={'Set Message'} onPress={handlePress} />
    </View>
  );
};

export default Message;
