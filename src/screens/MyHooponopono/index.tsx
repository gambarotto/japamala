import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import HeaderScreen from '../../components/HeaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";

import { Container, ContainerIcon, ContainerIcons, ContainerItem, ContainerTitleItem, HooponoponoList, Icon, ModalContainer, ModalContainerButtons, ModalContainerCancelButton, ModalContainerDeleteButton, ModalText, ModalTextCancelButton, ModalTextDeleteButton, ModalTitle, TextInformation, TitleItem } from './styles';
import themeGlobal from '../../styles/global';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import bg from '../../assets/images/bg-menu.png';

interface ItensProps {
  id: string;
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
  const [selectedHooponopono, setSelectedHooponopono] = useState<ItensProps>();
  const [openedModal, setOpenedModal] = useState(false);

  const navigation = useNavigation();

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
  useFocusEffect(
    useCallback(() => {
      loadData();
    },[])
  );

  const handleSelect = useCallback((item:ItensProps) => {
    navigation.navigate('Hooponopono',item);
  }, []);

  const handleDelete = useCallback((item:ItensProps) => {
    setSelectedHooponopono(item)
    setOpenedModal(true);
  }, []);

  const modalHandleDelete = useCallback( async () => {
    try {
      const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
      if(hooponoponosDB){
        const hooponoponoConv = JSON.parse(hooponoponosDB) as ItensProps[];
        const newData = hooponoponoConv.filter(hoop => hoop.id !== selectedHooponopono?.id);
        
        await AsyncStorage.setItem('@hooponoponos',JSON.stringify(newData));
        setHooponoponos(state => state.filter(hoop => hoop.id !== selectedHooponopono?.id));
        setOpenedModal(false);
        console.log('Deleted!');
      }
    } catch (error) {
      console.log(`Error on delete ho'ooponopono`); 
    }
    
  }, [selectedHooponopono]);

  const handleEdit = useCallback((item:ItensProps,index:number) => {
    navigation.navigate('NewHooponopono',{item, index});
  }, []);

  return (
      <Container source={bg}>
        <HeaderScreen text={`Meus Ho'oponoponos`}/>
        <TextInformation>Estes são seus ho’oponoponos, selecione o que você deseja fazer</TextInformation>
          <FlatList 
            style={{width:'100%'}}
            data={hooponoponos}
            keyExtractor={(item => item.id)}
            renderItem={({item, index}) => (
              <ContainerItem>
                <ContainerTitleItem onPress={() => handleSelect(item)}>
                  <TitleItem>{`${item.title}`}</TitleItem>
                </ContainerTitleItem>
                <ContainerIcons>
                  <ContainerIcon onPress={() => handleEdit(item, index)}>
                    <Icon name="edit" size={20} color={themeGlobal.colors.secondary}/>
                  </ContainerIcon>
                  <ContainerIcon onPress={() => handleDelete(item)}>
                    <Icon name="delete" size={20} color={themeGlobal.colors.secondary}/>
                  </ContainerIcon>
                </ContainerIcons>
              </ContainerItem>
            )}
          />
        <Modal 
          isVisible={openedModal} 
          style={{justifyContent: 'center', alignItems: 'center'}}
          onBackButtonPress={() => setOpenedModal(false)}
          >
            <ModalContainer>
              <ModalTitle>Excluir Ho'oponopono</ModalTitle>
              <ModalText>{`Deseja realmente excluir Ho'oponopono ${selectedHooponopono?.title}?`}</ModalText>
              <ModalContainerButtons>
                <ModalContainerCancelButton 
                  activeOpacity={0.7}
                  onPress={() => setOpenedModal(false)}
                >
                  <ModalTextCancelButton>Não</ModalTextCancelButton>
                </ModalContainerCancelButton>
                <ModalContainerDeleteButton
                  activeOpacity={0.7}
                  onPress={modalHandleDelete}
                >
                  <ModalTextDeleteButton>Sim</ModalTextDeleteButton>
                </ModalContainerDeleteButton>
              </ModalContainerButtons>
            </ModalContainer>
        </Modal>
      </Container>
    )
}

export default MyHooponopono;