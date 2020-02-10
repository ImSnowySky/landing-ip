
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
            <Input placeholder = 'Ваше имя' isRequired/>
          </FormContainer>
        </Container>
      </Container>
    )
  }
};

export default FormBlock;