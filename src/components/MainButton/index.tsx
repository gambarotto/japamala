
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, TextButton } from './styles';

interface IProps extends TouchableOpacityProps{
  text: string;
  marginBottom?: number;
}

const MainButton: React.FC<IProps> = ({text, marginBottom = 0, ...rest}) => {
  const navigation = useNavigation();
  return (
  <Container 
    marginBottom={marginBottom}
    {...rest}
    style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 50,
              height: 2,
            },
            shadowOpacity: 0,
            shadowRadius: 3.84,

            elevation: 5,
          }}
    >
    <TextButton>{text}</TextButton>
  </Container>
  );
}

export default MainButton;