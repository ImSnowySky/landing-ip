
import React from 'react';
import Container from '../../components/base/Container';
import { FormContainer, FormWrapper, InputWrapper, ButtonContainer, ContactsContainer, ContactsTitle, ContactsInfo, ContactsInfoTitle, ContactsInfoBlock, ContactsInfoText, MessengerBlock, Messenger } from './elements';
import Text from '../../components/base/Text';
import Input from '../../components/base/Input';
import Button from '../../components/base/Button';
import { InnerContainer, TitleContainer } from '../../components/base/shared';
import withID from '../../components/helpers/withID';
import mailConfig from './config';

const FormBlock = props => {
  const referrer = document.referrer;
  const URL_WITH_PROMO = window.location.href.includes('from=VK_PROMO');

  const [name, changeName] = React.useState(null);
  const [contact, changeContact] = React.useState(null);
  const [comment, changeComment] = React.useState(null);
  const [sended, changeSended] = React.useState(false);

  const modal = document.getElementById('modal');

  const sendMail = (name, contact, comment) => {
    window.Email.send({
      ...mailConfig,
      Body: `
      <h1 style = "font-size: 24px; line-height: 32px; width: 480px; text-align: center; margin: 0 auto 32px">
        Веб-студия Radian
      </h1>
      <div style = "width: 446px; margin: 0 auto; border-radius: 10px; padding: 24px; border: 1px solid lightgray;">
        <b>Имя</b>
        <div style = "width:100%; padding: 8px 0px 8px 8px; border: 1px solid lightgray; margin: 0 0 8px 0">
          ${name}
        </div>
        <b>Контакт</b>
        <div style = "width:446px; padding: 8px 0px 8px 8px; border: 1px solid lightgray; margin: 0 0 8px 0">
          ${contact}
        </div>
        <b>Комментарий</b>
        <div style = "width:446px; padding: 8px 0px 8px 8px; border: 1px solid lightgray; margin: 0 0 8px 0">
          <div>
            <span>Промокод: </span><span>${referrer && URL_WITH_PROMO ? 'VK_PROMO' : 'Без промокода'}</span>
          </div>
          <div>
            ${comment}
          </div>
        </div>
      </div>`,
    }).then(() => changeSended(true));
  }

  const withError = [];
  if (props.modal && modal) withError.push(...modal.getElementsByClassName('input-error'))
  else withError.push(...document.getElementsByClassName('input-error'))

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
                regexp = {/[a-zA-Zа-яА-ЯёЁ\s-\.]+/g}
                regExpErrorText = 'Неверный формат имени'
                onChange={changeName}
              />
              <Input
                isRequired
                placeholder = 'Ваше телефон или e-mail'
                regexp = {/[a-zA-Z\@\.0-9\-\_]+/g}
                regExpErrorText = 'Неверный формат телефона или почты'
                onChange={changeContact}
              />
              <Input
                placeholder = 'Комментарий'
                regexp = {/.*/g}
                onChange={changeComment}
              />
              <Text type = 'span'>Нажимая на кнопку ниже, вы даёте согласие на обработку персональных данных и соглашаетесь с <a href = '/policy.pdf'>политикой конфиденциальности</a>.</Text>
              {
                referrer && URL_WITH_PROMO
                  ? <Text type = 'span' style = {{color: 'green'}}>Промокод "Скидка 10%" активен</Text>
                  : null
              }
              <Text type = 'span' style = {{color: 'green' }}></Text>
            </InputWrapper>
            <ButtonContainer>
              <Button
                disabled = {sended ? true : (name === null || contact === null) || withError.length > 0}
                onClick = {() => sendMail(name, contact, comment)}
              >
                {sended ? 'Отправлено' : 'Отправить'}
              </Button>
            </ButtonContainer>
          </FormWrapper>
          <ContactsContainer>
            <ContactsTitle><Text type = 'h3'>Контакты</Text></ContactsTitle>
            <ContactsInfo>
              <ContactsInfoBlock>
                <ContactsInfoTitle centered><Text type = 'h4'>Почта</Text></ContactsInfoTitle>
                <ContactsInfoText><Text type = 'span'>talk@radian.work</Text></ContactsInfoText>
              </ContactsInfoBlock>
            </ContactsInfo>
            <ContactsInfo>
                <ContactsInfoTitle centered><Text type = 'h4'>Мессенджеры</Text></ContactsInfoTitle>
            </ContactsInfo>
            <MessengerBlock>
              <Messenger icon = 'telegram' href = "https://teleg.run/radian_work"/>
              <Messenger icon = 'whatsapp' href = "https://wa.me/79221665665"/>
            </MessengerBlock>
          </ContactsContainer>
        </FormContainer>
      </InnerContainer>
    </Container>
  )
}

export default withID('form-block', FormBlock);