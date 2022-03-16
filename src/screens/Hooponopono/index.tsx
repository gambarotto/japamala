import React, { useCallback, useState } from 'react';

import { Container, ContainerHooponopono, CountNumber, ImageBackground, TextHooponopono } from './styles'
import bg from '../../assets/images/bg-hoop.png';
import { useRoute } from '@react-navigation/native';
import HeaderScreen from '../../components/HeaderScreen';
import themeGlobal from '../../styles/global';

interface ItensProps {
  title: string;
  hooponopono: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  }
}

const Hooponopono: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as ItensProps;
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    if(count < 108){
     setCount(state => state + 1);
    }
  }, [count]);
  return (
    <Container
      activeOpacity={0.9}
      onPress={handleCount}
    >
      <ImageBackground 
      source={bg}
      >
        <HeaderScreen iconColor={themeGlobal.colors.white}/>
        <ContainerHooponopono>
          <CountNumber>{count}</CountNumber>
          <TextHooponopono>{routeParams.hooponopono.line1}</TextHooponopono>
          <TextHooponopono>{routeParams.hooponopono.line2}</TextHooponopono>
          <TextHooponopono>{routeParams.hooponopono.line3}</TextHooponopono>
          <TextHooponopono>{routeParams.hooponopono.line4}</TextHooponopono>
          <TextHooponopono>{routeParams.hooponopono.line5}</TextHooponopono>
        </ContainerHooponopono>
      </ImageBackground>
    </Container>
  )
}

export default Hooponopono;