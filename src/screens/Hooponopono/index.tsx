import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Container, ContainerHooponopono, CountNumber, ImageBackground } from './styles'
import bg from '../../assets/images/bg-hoop.png';
import { useRoute } from '@react-navigation/native';
import HeaderScreen from '../../components/HeaderScreen';
import themeGlobal from '../../styles/global';
import TextWithShadow from '../../components/TextWithShadow';

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
  const [reduceFontSize, setReduceFontSize] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    for (const [key, value] of Object.entries(routeParams.hooponopono)) {
      if(value.length > 27) setReduceFontSize(true);
    }
  }, []);

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
      <StatusBar style='light' />
      <ImageBackground 
        source={bg}
      >
        <HeaderScreen iconColor={themeGlobal.colors.white}/>
        <ContainerHooponopono>
          <CountNumber>{count}</CountNumber>
          <TextWithShadow reduceFont={reduceFontSize} text={routeParams.hooponopono.line1} />
          <TextWithShadow reduceFont={reduceFontSize} text={routeParams.hooponopono.line2} />
          <TextWithShadow reduceFont={reduceFontSize} text={routeParams.hooponopono.line3} />
          <TextWithShadow reduceFont={reduceFontSize} text={routeParams.hooponopono.line4} />
          <TextWithShadow reduceFont={reduceFontSize} text={routeParams.hooponopono.line5} />
        </ContainerHooponopono>
      </ImageBackground>
    </Container>
  )
}

export default Hooponopono;