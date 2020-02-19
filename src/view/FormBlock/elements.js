import styled, { css } from 'styled-components';
import { InputControll } from '../../components/base/Input/elements';
import telegram from './assets/telegram.svg';
import telegramHover from './assets/telegram_hover.svg';
import whatsapp from './assets/whatsapp.svg';
import whatsapp_hover from './assets/whatsapp_hover.svg';

const icons = {
  telegram: { default: telegram, hover: telegramHover },
  whatsapp: { default: whatsapp, hover: whatsapp_hover },
};

const getIcon = (name, state) => icons[name][state || 'default'] || null; 

export const TitleContainer = styled.div`
  width: 100%;
  color: #242424;
  text-align: center;

  h2 {
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
  }
`;

export const FormContainer = styled.div`
  width: 960px;
  height: 518px;
  margin: 96px auto 0;
  display: flex;

  @media (max-width: 1023px) {
    margin: 52px auto 0;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 764px;
  }

  @media (max-width: 767px) {
    height: 680px;
  }

  @media (max-width: 567px) {
    height: 752px
  }
`;

export const ContactsContainer = styled.div`
  width: 408px;
  height: 288px;
  background: #F0F2F3;
  border-radius: 0px 16px 16px 0px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
  padding: 32px 54px;

  @media (max-width: 1023px) {
    top: 132px;
    left: 0;
    border-radius: 0 0 16px 16px;
    width: 512px;
  }

  @media (max-width: 767px) {
    width: 376px;
    padding: 32px 12px;
    height: 250px;
  }

  @media (max-width: 567px) {
    width: 240px;
    top: -16px;
    transform: none;
    height: 314px;
  }
`;

export const FormWrapper = styled.div`
  width: 552px;
  height: 518px;
  background: #fff;
  border-radius: 16px;
  padding: 32px 48px;
  box-sizing: border-box;
  box-shadow: -5px 5px 20px rgba(0, 0, 0, 0.25);
  z-index: 5;

  span:not(.star) {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #242424;
    font-family: 'Golos-Medium', 'Arial', sans-serif;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 18px;
    }

    @media (max-width: 567px) {
      font-size: 14px;
      line-height: 23px;
    }
  }

  @media (max-width: 1023px) {
    width: 688px;
    height: 488px;
    padding: 24px 48px;
  }

  @media (max-width: 767px) {
    width: 520px;
    height: 424px;
  }

  @media (max-width: 567px) {
    width: 100%;
    height: 456px;
    padding: 24px;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  ${InputControll} {
    margin-bottom: 38px;
    &:nth-child(3) {
      margin-bottom: 8px;
    }
  }

  span:not(.star) {
    font-size: 10px;
    line-height: 12px;
    font-family: 'Golos-Normal', 'Arial', sans-serif;
  }
`;

export const ButtonContainer = styled.div`
  width: 216px;
  height: 56px;
  border-radius: 28px;
  background: #fff;
  margin: 0 auto;

  @media (max-width: 767px) {
    div span.btn-text {
      font-size: 18px;
      line-height: 22px;
    }
  }

  @media (max-width: 567px) {
    width: 128px;
    height: 40px;

    div span.btn-text {
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const ContactsTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  color: #242424;
  margin-bottom: 32px;

  @media (max-width: 1023px) {
    text-align: center;
  }

  @media (max-width: 767px) {
    margin-bottom: 16px;
    font-size: 16px;
  }
`;

export const ContactsInfo = styled.div`
  display: flex;
  width: 100%;

  &:nth-child(3) {
    margin-top: 32px;

    @media (max-width: 767px) {
      margin-top: 16px;
    }
  }

  @media (max-width: 567px) {
    display: block;
  }
`;

export const ContactsInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  color: #242424;

  @media (max-width: 1023px) {
    width: auto;
    flex: 1;
    padding: 0 30px;
  }

  @media (max-width: 567px) {
    padding: 0 16px;

    &:not(:first-of-type) {
      margin-top: 16px;
    }
  }
`;

export const ContactsInfoTitle = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  ${props => props.centered && css`text-align: center;`};

  @media (max-width: 567px) {
    font-size: 16px;
  }
`;

export const ContactsInfoText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const MessengerBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Messenger = styled.div`  
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${({ icon }) => `url(${getIcon(icon)})`};
  background-size: cover;

  &:hover {
    background-image: ${({ icon }) => `url(${getIcon(icon, 'hover')})`}
  }

  &:not(:last-of-type) {
    margin-right: 32px;
  }

  @media (max-width: 567px) {
    width: 32px;
    height: 32px;

    &:not(:last-of-type) {
      margin-right: 24px;
    }
  }
`;