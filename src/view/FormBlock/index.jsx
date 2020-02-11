
import React from 'react';
import Container from '../../components/base/Container';
import { TitleContainer, FormContainer } from './elements';
import Text from '../../components/base/Text';
import Input from '../../components/base/Input';

class FormBlock extends React.Component {
  render() {
    return (
      <Container justify = 'center' fullWidth fullHeight style = {{ backgroundColor: '#fff' }}>
        <Container>
          <TitleContainer>
            <Text type = 'h2'>Обсудим ваш проект?</Text>
          </TitleContainer>
          <FormContainer>
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
              placeholder = 'Ваше бюджет'
              regexp = {/[0-9\s]+/g}
              regExpErrorText = 'Неверный формат бюджета'
            />
          </FormContainer>
        </Container>
      </Container>
    )
  }
};

export default FormBlock;