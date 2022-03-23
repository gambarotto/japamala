import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MainButton from '../../components/MainButton';

import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg-menu.png';

import { Container, Logo } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container source={bg}>
      <Logo source={logo} />
      <MainButton
        onPress={() => navigation.navigate('NewHooponopono')}
        text="Novo Ho'oponopono"
        marginBottom={24}
      />
      <MainButton
        onPress={() => navigation.navigate('MyHooponopono')}
        text="Meus Ho'oponoponos"
      />
    </Container>
  );
};

export default Home;
