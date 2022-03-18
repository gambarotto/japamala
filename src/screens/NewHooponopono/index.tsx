import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import bg from '../../assets/images/bg-menu.png';
import HeaderScreen from '../../components/HeaderScreen';
import MainButton from '../../components/MainButton';
import { BackgroundImage, BoxInputs, Container, ContainerButton, ContainerHooponopono, ContainerTextInput, ContainerTitleHooponopono, TextHooponopono, TextInformation, TextInputApp } from './styles';
import themeGlobal from '../../styles/global';

interface Hooponopono {
  [line:string]:string;
}
interface HooponoponoProps {
  title:string;
  hooponopono: Hooponopono;
}

const NewHooponopono: React.FC = () => {
  const refTextInputApp1 = useRef<TextInput>(null);
  const refTextInputApp2 = useRef<TextInput>(null);
  const refTextInputApp3 = useRef<TextInput>(null);
  const refTextInputApp4 = useRef<TextInput>(null);
  const refTextInputApp5 = useRef<TextInput>(null);
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
      //await AsyncStorage.clear();
      const hooponoponosBD = await AsyncStorage.getItem('@hooponoponos')

      if(hooponoponosBD){
        const hooponoponoConv = JSON.parse(hooponoponosBD) as HooponoponoProps[];
        if(
          hooponoponoConv.findIndex((hoop) => hoop.title.toUpperCase() === hooponopono.title.toUpperCase()) < 0
          ){
            hooponoponoConv.push(hooponopono);
            await AsyncStorage.setItem('@hooponoponos',JSON.stringify(hooponoponoConv));
            console.log('Saved!');
        }else {
          console.log('Titulo já cadastrado');
          
        }

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
          <TextInputApp 
            placeholder={`Titulo do Ho'oponopono`}
            placeholderTextColor={themeGlobal.colors.gray4}
            onChangeText={(text) => handleInput(text, 'title')}
            autoCapitalize='words'
            returnKeyType='next'
            onSubmitEditing={() => {
              refTextInputApp1.current?.focus();
            }}
          />
        </ContainerTitleHooponopono>
        <TextInformation>Escreva aqui seu ho'oponopono</TextInformation>
        <BoxInputs>
          <ContainerTextInput>
            <TextInputApp 
              ref={refTextInputApp1} 
              placeholder={`Ex: "Maria" Abençoada`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line1')}
              autoCapitalize='words'
              returnKeyType='next'
              onSubmitEditing={() => {
                refTextInputApp2.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp 
              ref={refTextInputApp2} 
              placeholder={`Sinto Muito`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line2')}
              autoCapitalize='words'
              returnKeyType='next'
              onSubmitEditing={() => {
                refTextInputApp3.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp 
              ref={refTextInputApp3} 
              placeholder={`Me Perdoe`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line3')}
              autoCapitalize='words'
              returnKeyType='next'
              onSubmitEditing={() => {
                refTextInputApp4.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp 
              ref={refTextInputApp4} 
              placeholder={`Eu Te Amo`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line4')}
              autoCapitalize='words'
              returnKeyType='next'
              onSubmitEditing={() => {
                refTextInputApp5.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp 
              ref={refTextInputApp5} 
              placeholder={`Sou Grato`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line5')}
              autoCapitalize='words'
              returnKeyType='done'
              onSubmitEditing={() => {handleSave()}}
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

