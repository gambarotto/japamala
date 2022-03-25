import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../components/HeaderScreen';

import {
  Container,
  ContainerIcon,
  ContainerIcons,
  ContainerItem,
  ContainerTitleItem,
  Icon,
  TextInformation,
  TitleItem,
} from './styles';
import themeGlobal from '../../global/global';
import bg from '../../assets/images/bg-menu.png';
import ModalNotification from '../../components/ModalNotification';

interface ItensProps {
  id: string;
  title: string;
  hooponopono: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  };
}
const MyHooponopono: React.FC = () => {
  const [hooponoponos, setHooponoponos] = useState<ItensProps[]>([]);
  const [selectedHooponopono, setSelectedHooponopono] = useState<ItensProps>();
  const [openedModal, setOpenedModal] = useState(false);

  const navigation = useNavigation();

  async function loadData(): Promise<void> {
    try {
      const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
      if (hooponoponosDB) {
        setHooponoponos(JSON.parse(hooponoponosDB));
      } else {
        setHooponoponos([]);
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const handleSelect = useCallback(
    (item: ItensProps) => {
      navigation.navigate('Hooponopono', item);
    },
    [navigation],
  );

  const handleDelete = useCallback((item: ItensProps) => {
    setSelectedHooponopono(item);
    setOpenedModal(true);
  }, []);

  const modalHandleDelete = useCallback(async () => {
    try {
      const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
      if (hooponoponosDB) {
        const hooponoponoConv = JSON.parse(hooponoponosDB) as ItensProps[];
        const newData = hooponoponoConv.filter(
          (hoop) => hoop.id !== selectedHooponopono?.id,
        );

        await AsyncStorage.setItem('@hooponoponos', JSON.stringify(newData));
        setHooponoponos((state) =>
          state.filter((hoop) => hoop.id !== selectedHooponopono?.id),
        );
        setOpenedModal(false);
        console.log('Deleted!');
      }
    } catch (error) {
      console.log(`Error on delete ho'ooponopono`);
    }
  }, [selectedHooponopono]);

  const handleEdit = useCallback(
    (item: ItensProps, index: number) => {
      navigation.navigate('NewHooponopono', { item, index });
    },
    [navigation],
  );

  return (
    <Container source={bg}>
      <HeaderScreen text={`Meus Ho'oponoponos`} />
      <TextInformation>
        Estes são seus ho’oponoponos, selecione o que você deseja fazer
      </TextInformation>
      <FlatList
        style={{ width: '100%' }}
        data={hooponoponos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ContainerItem>
            <ContainerTitleItem onPress={() => handleSelect(item)}>
              <TitleItem>{`${item.title}`}</TitleItem>
            </ContainerTitleItem>
            <ContainerIcons>
              <ContainerIcon onPress={() => handleEdit(item, index)}>
                <Icon
                  name="edit"
                  size={20}
                  color={themeGlobal.colors.secondary}
                />
              </ContainerIcon>
              <ContainerIcon onPress={() => handleDelete(item)}>
                <Icon
                  name="delete"
                  size={20}
                  color={themeGlobal.colors.secondary}
                />
              </ContainerIcon>
            </ContainerIcons>
          </ContainerItem>
        )}
      />
      <ModalNotification
        title={`Excluir Ho'oponopono`}
        text={`Deseja realmente excluir o Ho'oponopono ${selectedHooponopono?.title}`}
        confirmFunction={modalHandleDelete}
        isVisible={openedModal}
        cancelButtonFunction={() => setOpenedModal(false)}
      />
    </Container>
  );
};

export default MyHooponopono;
