import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import bg from '../../assets/images/bg-menu.png';
import HeaderScreen from '../../components/HeaderScreen';
import MainButton from '../../components/MainButton';
import { BackgroundImage, BoxInputs, Container, ContainerButton, ContainerHooponopono, ContainerTextInput, ContainerTitleHooponopono, TextHooponopono, TextInformation, TextInput } from './styles';
import themeGlobal from '../../styles/global';

interface Hooponopono {
  [line:string]:string;
}
interface HooponoponoProps {
  title:string;
  hooponopono: Hooponopono;
}

const NewHooponopono: React.FC = () => {
  const refTextInput1 = useRef(null);
  const refTextInput2 = useRef(null);
  const refTextInput3 = useRef(null);
  const refTextInput4 = useRef(null);
  const refTextInput5 = useRef(null);
  const [showBox, setShowBox] = useState(false);
  const [tt, setTt] = useState([]);
  const [hooponopono, setHooponopono] = useState<HooponoponoProps>({
    title:'',
    hooponopono: {
      line1:'',
      line2:'',
      line3:'',
      line4:'',
      line5:'',
    }

  })
  const [keybordShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    
    const keyboardListenerDidShow = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    const keyboardListenerDidHide = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    return () => {
      keyboardListenerDidShow.remove();
      keyboardListenerDidHide.remove();
    };
  }, []);

  const keyboardDidShow = (): void => setKeyboardShow(true);
  const keyboardDidHide = (): void => setKeyboardShow(false);

  const handleInput = (text: string, field:string) => {
    if(!showBox){
      setShowBox(true);
    }
    if(field === 'title'){
      setHooponopono(state => {
        return { 
          ...state,
          title:text,
        }
      });
    } else {
        setHooponopono(state => {
          return { 
            ...state,
            hooponopono: {
              ...state.hooponopono,
              [field]:text,
            }
          }
      })
    }

  }

  async function handleSave() {

    try {
      AsyncStorage.clear()
      const hooponoponosBD = await AsyncStorage.getItem('@hooponoponos')
      let hooponoponoConv: object[] ;

      if(hooponoponosBD){
        hooponoponoConv = JSON.parse(hooponoponosBD);  
        hooponoponoConv.push(hooponopono)
        await AsyncStorage.setItem('@hooponoponos',JSON.stringify(hooponoponoConv));
        console.log('Saved!');

      }else {
        const stringfyValue = JSON.stringify([hooponopono]);
        await AsyncStorage.setItem('@hooponoponos',stringfyValue);
        console.log('Saved!');
      }    
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  return (
    <Container>
      <BackgroundImage source={bg}>
        <HeaderScreen text="Novo Ho'oponopono" statusBarDiscount={true}/>
        <ContainerTitleHooponopono>
          <TextInput 
            placeholder={`Titulo do Ho'oponopono`}
            placeholderTextColor={themeGlobal.colors.gray4}
            onChangeText={(text) => handleInput(text, 'title')}
          />
        </ContainerTitleHooponopono>
        <TextInformation>Escreva aqui seu ho'oponopono</TextInformation>
        <BoxInputs>
          <ContainerTextInput>
            <TextInput 
              ref={refTextInput1} 
              placeholder={`Ex: "Maria" Abençoada`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line1')}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInput 
              ref={refTextInput2} 
              placeholder={`Sinto Muito`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line2')}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInput 
              ref={refTextInput3} 
              placeholder={`Me Perdoe`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line3')}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInput 
              ref={refTextInput4} 
              placeholder={`Eu Te Amo`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line4')}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInput 
              ref={refTextInput5} 
              placeholder={`Sou Grato`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line5')}
            />
          </ContainerTextInput>
        </BoxInputs>
        {showBox &&
          <ContainerHooponopono>
            <TextHooponopono>{hooponopono.hooponopono.line1}</TextHooponopono>
            <TextHooponopono>{hooponopono.hooponopono.line2}</TextHooponopono>
            <TextHooponopono>{hooponopono.hooponopono.line3}</TextHooponopono>
            <TextHooponopono>{hooponopono.hooponopono.line4}</TextHooponopono>
            <TextHooponopono>{hooponopono.hooponopono.line5}</TextHooponopono>
          </ContainerHooponopono>
        }
        {
          !keybordShow && 
            <ContainerButton>
              <MainButton 
                text='Salvar'
                onPress={handleSave}
              />
            </ContainerButton>
        }
      </BackgroundImage>
    </Container>
  )
}

export default NewHooponopono;

