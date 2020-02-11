
import React from 'react';
import Container from '../../components/base/Container';
import { TitleContainer, FormContainer, FormWrapper, InputWrapper, ButtonContainer, ContactsContainer, ContactsTitle, ContactsInfo, ContactsInfoTitle, ContactsInfoBlock, ContactsInfoText } from './elements';
import Text from '../../components/base/Text';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';

class FormBlock extends React.Component {
  render() {
    return (
      <Container justify = 'center' fullWidth fullHeight style = {{ backgroundColor: '#fff' }}>
        <Container>
          <TitleContainer>
            <Text type = 'h2'>Обсудим ваш проект?</Text>
          </TitleContainer>
          <FormContainer>
            <FormWrapper>
              <Text type = 'span'>Заполните заявку или свяжитесь с нами любым удобным вам способом и мы сделаем всё за вас.</Text>
              <InputWrapper>
                <Input
                  isRequired
                  placeholder = 'Ваше имя'
                  regexp = {/[a-zA-Zа-яА-Я\s-\.]+/g}
                  regExpErrorText = 'Неверный формат имени'
                />
                <Input
                  isRequired
                  placeholder = 'Ваше телефон или e-mail'
                  regexp = {/[a-zA-Z\@\.0-9]+/g}
                  regExpErrorText = 'Неверный формат телефона или почты'
                />
                <Input
                  placeholder = 'Ваш бюджет'
                  regexp = {/[0-9\s]+/g}
                  regExpErrorText = 'Неверный формат бюджета'
                />
                <Text type = 'span'>Нажимая на кнопку ниже, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</Text>
              </InputWrapper>
              <ButtonContainer>
                <Button disabled>Отправить</Button>
              </ButtonContainer>
            </FormWrapper>
            <ContactsContainer>
              <ContactsTitle>Контакты</ContactsTitle>
              <ContactsInfo>
                <ContactsInfoBlock>
                  <ContactsInfoTitle>Телефон</ContactsInfoTitle>
                  <ContactsInfoText>8-800-555-35-35</ContactsInfoText>
                </ContactsInfoBlock>
                <ContactsInfoBlock>
                  <ContactsInfoTitle>Телефон</ContactsInfoTitle>
                  <ContactsInfoText>8-800-555-35-35</ContactsInfoText>                  
                </ContactsInfoBlock>
              </ContactsInfo>
              <ContactsInfo>
                  <ContactsInfoTitle centered>Мессенджеры</ContactsInfoTitle>
              </ContactsInfo>
            </ContactsContainer>
          </FormContainer>
        </Container>
      </Container>
    )
  }
};

export default FormBlock;