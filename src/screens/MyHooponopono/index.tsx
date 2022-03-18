import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, ContainerIcon, ContainerIcons, ContainerItem, ContainerTitleItem, HooponoponoList, Icon, TextInformation, TitleItem } from './styles';
import themeGlobal from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import bg from '../../assets/images/bg-menu.png';

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
  const navigation = useNavigation();

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

  const handleSelect = useCallback((item:ItensProps) => {
    navigation.navigate('Hooponopono',item);
  }, []);
  const handleDelete = useCallback((item:ItensProps,index:number) => {
    setHooponoponos(state => state.filter(hoop => item.title !== hoop.title));
  }, [hooponoponos]);

  return (
      <Container source={bg}>
        <HeaderScreen text={`Meus Ho'oponoponos`}/>
        <TextInformation>Estes são seus ho’oponoponos, selecione o que você deseja fazer</TextInformation>
        <TextInformation>{hooponoponos.length}</TextInformation>
          <FlatList 
            style={{width:'100%'}}
            data={hooponoponos}
            keyExtractor={(item => item.title)}
            renderItem={({item, index}) => (
              <ContainerItem>
                <ContainerTitleItem onPress={() => handleSelect(item)}>
                  <TitleItem>{`${item.title}`}</TitleItem>
                </ContainerTitleItem>
                <ContainerIcons>
                  <ContainerIcon>
                    <Icon name="edit" size={20} color={themeGlobal.colors.secondary}/>
                  </ContainerIcon>
                  <ContainerIcon onPress={() => handleDelete(item,index)}>
                    <Icon name="delete" size={20} color={themeGlobal.colors.secondary}/>
                  </ContainerIcon>
                </ContainerIcons>
              </ContainerItem>
            )}
          />

      </Container>
    )
}

export default MyHooponopono;