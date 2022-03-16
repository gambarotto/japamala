import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, HooponoponoList, TextInformation } from './styles';

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
const MyHooponopono: React.FC = () => {
  const [hooponoponos, setHooponoponos] = useState<ItensProps[]>([]);
  useEffect(() => {
   async function loadData() {
      try {
        const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
        if(hooponoponosDB){
          setHooponoponos(JSON.parse(hooponoponosDB));
        }else {
          setHooponoponos([]);
        }
      } catch (error) {
        console.log('error', error);
      }
   }
   loadData();
  }, []);
  return (
      <Container>
        <HeaderScreen text={`Meus Ho'oponoponos`}/>
        <TextInformation>Estes são seus ho’oponoponos, selecione o que você deseja fazer</TextInformation>
          <FlatList 
            data={hooponoponos}
            keyExtractor={(item => item.title)}
            renderItem={({item}) => <TextInformation>{item.hooponopono.line1}</TextInformation>}
          />

      </Container>
    )
}

export default MyHooponopono;