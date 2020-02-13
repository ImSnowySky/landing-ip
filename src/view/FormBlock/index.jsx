
import React from 'react';
import Container from '../../components/base/Container';
import { FormContainer, FormWrapper, InputWrapper, ButtonContainer, ContactsContainer, ContactsTitle, ContactsInfo, ContactsInfoTitle, ContactsInfoBlock, ContactsInfoText, MessengerBlock, Messenger } from './elements';
import Text from '../../components/base/Text';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import { InnerContainer, TitleContainer } from '../../components/base/shared';
import withID from '../../components/helpers/withID';

const FormBlock = () => <Container bgColor = '#fff'>
  <InnerContainer withMargin>
    <TitleContainer>
      <Text type = 'h2'>Обсудим ваш проект?</Text>
    </TitleContainer>
    <FormContainer>
      <FormWrapper>
        <Text type = 'span'>Заполните заявку или свяжитесь с нами любым удобным вам способом и мы сделаем всё за вас.</Text>
        <InputWrapper>
          <Input isRequired placeholder = 'Ваше имя' regexp = {/[a-zA-Zа-яА-Я\s-\.]+/g} regExpErrorText = 'Неверный формат имени'/>
          <Input isRequired placeholder = 'Ваше телефон или e-mail' regexp = {/[a-zA-Z\@\.0-9]+/g} regExpErrorText = 'Неверный формат телефона или почты'/>
          <Input placeholder = 'Ваш бюджет' regexp = {/[0-9\s]+/g} regExpErrorText = 'Неверный формат бюджета' />
          <Text type = 'span'>Нажимая на кнопку ниже, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</Text>
        </InputWrapper>
        <ButtonContainer><Button disabled>Отправить</Button> </ButtonContainer>
      </FormWrapper>
      <ContactsContainer>
        <ContactsTitle><Text type = 'h3'>Контакты</Text></ContactsTitle>
        <ContactsInfo>
          <ContactsInfoBlock>
            <ContactsInfoTitle><Text type = 'h4'>Телефон</Text></ContactsInfoTitle>
            <ContactsInfoText><Text type = 'span'>8-800-555-35-35</Text></ContactsInfoText>
          </ContactsInfoBlock>
          <ContactsInfoBlock>
            <ContactsInfoTitle><Text type = 'h4'>Телефон</Text></ContactsInfoTitle>
            <ContactsInfoText><Text type = 'span'>8-800-555-35-35</Text></ContactsInfoText>                  
          </ContactsInfoBlock>
        </ContactsInfo>
        <ContactsInfo>
            <ContactsInfoTitle centered><Text type = 'h4'>Мессенджеры</Text></ContactsInfoTitle>
        </ContactsInfo>
        <MessengerBlock><Messenger icon = 'telegram' /><Messenger icon = 'whatsapp' /></MessengerBlock>
      </ContactsContainer>
    </FormContainer>
  </InnerContainer>
</Container>

export default withID('form-block', FormBlock);