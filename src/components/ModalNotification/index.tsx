import React from 'react';
import {
  Container,
  ContainerButtons,
  ModalContainer,
  ModalContainerCancelButton,
  ModalContainerDeleteButton,
  ModalTextCancelButton,
  ModalTextDeleteButton,
  TextInformation,
  Title,
} from './styles';

interface MyModalProps {
  title: string;
  text: string;
  textButtonOk?: string;
  textButtonCancel?: string;
  isVisible: boolean;
  oneButtom?: boolean;
  confirmFunction: () => void;
  cancelButtonFunction: () => void;
}

const ModalNotification: React.FC<MyModalProps> = ({
  title,
  text,
  textButtonOk = 'Ok',
  textButtonCancel = 'Cancelar',
  isVisible,
  oneButtom = false,
  confirmFunction,
  cancelButtonFunction,
}) => (
  <Container
    isVisible={isVisible}
    onBackButtonPress={cancelButtonFunction}
    style={{ justifyContent: 'center', alignItems: 'center' }}
  >
    <ModalContainer>
      <Title>{title}</Title>
      <TextInformation>{text}</TextInformation>
      <ContainerButtons>
        {!oneButtom && (
          <ModalContainerCancelButton onPress={cancelButtonFunction}>
            <ModalTextCancelButton>{textButtonCancel}</ModalTextCancelButton>
          </ModalContainerCancelButton>
        )}
        <ModalContainerDeleteButton onPress={confirmFunction}>
          <ModalTextDeleteButton>{textButtonOk}</ModalTextDeleteButton>
        </ModalContainerDeleteButton>
      </ContainerButtons>
    </ModalContainer>
  </Container>
);

export default ModalNotification;
