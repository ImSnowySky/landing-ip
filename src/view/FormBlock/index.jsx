
import React from 'react';
import Container from '../../components/base/Container';
import { FormContainer, FormWrapper, InputWrapper, ButtonContainer, ContactsContainer, ContactsTitle, ContactsInfo, ContactsInfoTitle, ContactsInfoBlock, ContactsInfoText, MessengerBlock, Messenger } from './elements';
import Text from '../../components/base/Text';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import { InnerContainer, TitleContainer } from '../../components/base/shared';
import withID from '../../components/helpers/withID';
import mailConfig from './config';

const sendMail = (name, contact, comment) => {
  window.Email.send({
    ...mailConfig,
    Body: `${name} ${contact} ${comment}`,
  }).then(message => alert(message));
}

const FormBlock = () => {
  const [name, changeName] = React.useState(null);
  const [contact, changeContact] = React.useState(null);
  const [comment, changeComment] = React.useState(null);

  const withError = [...document.getElementsByClassName('input-error')];

  return (
    <Container bgColor = '#fff'>
      <InnerContainer withMargin>
        <TitleContainer>
          <Text type = 'h2'>Обсудим ваш проект?</Text>
        </TitleContainer>
        <FormContainer>
          <FormWrapper>
            <Text type = 'span'>Заполните заявку или свяжитесь с нами любым удобным вам способом.</Text>
            <InputWrapper>
              <Input
                isRequired
                placeholder = 'Ваше имя'
                regexp = {/[a-zA-Zа-яА-Я\s-\.]+/g}
                regExpErrorText = 'Неверный формат имени'
                onChange={changeName}
              />
              <Input
                isRequired
                placeholder = 'Ваше телефон или e-mail'
                regexp = {/[a-zA-Z\@\.0-9]+/g}
                regExpErrorText = 'Неверный формат телефона или почты'
                onChange={changeContact}
              />
              <Input
                placeholder = 'Комментарий'
                regexp = {/.*/g}
                regExpErrorText = 'Неверный формат бюджета'
                onChange={changeComment}
              />
              <Text type = 'span'>Нажимая на кнопку ниже, вы даёте согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</Text>
            </InputWrapper>
            <ButtonContainer>
              <Button
                disabled = {(name === null || contact === null) || withError.length > 0}
                onClick = {() => sendMail(name, contact, comment)}
              >
                Отправить
              </Button>
            </ButtonContainer>
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
  )
}

export default withID('form-block', FormBlock);