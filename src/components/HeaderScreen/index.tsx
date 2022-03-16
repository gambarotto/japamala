import React from 'react';
import { Container, IconBack, IconContainer, TitleScreen } from './styles';
import themeGlobal from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  text: string;
  statusBarDiscount?: boolean;
}

const HeaderScreen: React.FC<IProps> = ({text, statusBarDiscount = false}) => {
  const navigation = useNavigation();

  return (
    <Container statusBarDiscount={statusBarDiscount}>
      <IconContainer onPress={() => navigation.goBack() }>
        <IconBack name="arrow-back-ios" size={20} color={themeGlobal.colors.secondary}/>
      </IconContainer>
      <TitleScreen>{text}</TitleScreen>
    </Container>
  )
}

export default HeaderScreen;