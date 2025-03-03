import React from 'react'
import { useLocation } from 'react-router-dom'
import Logo from '../../header/components/logo/Logo'
import {
  FooterContactButtonTelegram,
  FooterContactButtonTelegramWhite,
  FooterContactButtonWhatsapp,
  FooterContactIcon,
  FooterCopyright,
  FooterLegalItem,
  FooterLegalList,
  FooterNavButton,
} from '../FooterStyled'

import {
  FooterTabletTop,
  FooterDextopBottom,
  FooterNavList,
  FooterInputWrapper,
  FooterInput,
  FooterSubmitButton,
  FooterContactWrapper,
  LogoWrapp,
  FooterContactWrapperStyleBtn,
  FooterTabletContainer,
  TabletBtnWrapp,
  FooterTabletBotWrapp,
} from './FooterTabletStyled'

import useNavigateToContact from '../../../hooks/useNavigateToContact'
import TelegramWhiteIcon from '../../../assets/icons/TelegramWhiteIcon'
import WhatsappIcon from '../../../assets/icons/WhatsappIcon'
import TelegramIcon from '../../../assets/icons/TelegramIcon'

const FooterTablet = () => {
  const redirectToContact = useNavigateToContact()
  const location = useLocation()
  console.log('====================================')
  console.log(location.pathname)
  console.log('====================================')
  const isContactPage = location.pathname === '/contact'

  return (
    <FooterTabletContainer>
      <FooterTabletTop>
        <LogoWrapp>
          <Logo />
        </LogoWrapp>
      </FooterTabletTop>

      <FooterDextopBottom>
        <FooterNavList>
          <FooterNavButton>Про нас</FooterNavButton>
          <FooterNavButton>Преимущества</FooterNavButton>
          <FooterNavButton>Блог</FooterNavButton>
          <FooterNavButton>Контакты</FooterNavButton>
          <FooterNavButton>FAQ</FooterNavButton>
        </FooterNavList>

        {!isContactPage && (
          <FooterInputWrapper>
            <FooterInput placeholder="Введите свой ник в Telegram" />
            <FooterSubmitButton onClick={redirectToContact}>
              Подать заявку сейчас
            </FooterSubmitButton>
          </FooterInputWrapper>
        )}

        {!isContactPage && (
          <TabletBtnWrapp>
            <FooterContactWrapper>
              <FooterContactWrapperStyleBtn>
                <FooterContactButtonTelegram
                  onMouseEnter={(e) =>
                    e.currentTarget
                      .querySelector('svg path')
                      .setAttribute('fill', 'white')
                  }
                  onMouseLeave={(e) =>
                    e.currentTarget
                      .querySelector('svg path')
                      .setAttribute('fill', '#039BE5')
                  }
                >
                  <span>Перейти в наш Telegram Bot</span>
                  <TelegramIcon color="#039BE5" />
                </FooterContactButtonTelegram>
              </FooterContactWrapperStyleBtn>

              <FooterContactButtonTelegramWhite
                onMouseEnter={(e) =>
                  e.currentTarget
                    .querySelector('svg path')
                    .setAttribute('fill', 'black')
                }
                onMouseLeave={(e) =>
                  e.currentTarget
                    .querySelector('svg path')
                    .setAttribute('fill', 'white')
                }
              >
                <span>Наша группа в телеграм</span>
                <TelegramWhiteIcon color="white" />
              </FooterContactButtonTelegramWhite>
            </FooterContactWrapper>
            <FooterContactButtonWhatsapp
              onMouseEnter={(e) =>
                e.currentTarget
                  .querySelector('svg path')
                  .setAttribute('fill', 'white')
              }
              onMouseLeave={(e) =>
                e.currentTarget
                  .querySelector('svg path')
                  .setAttribute('fill', '#29A71A')
              }
            >
              <span>Написать нам в Whatsapp</span>
              <WhatsappIcon color="#29A71A" />
            </FooterContactButtonWhatsapp>
          </TabletBtnWrapp>
        )}
      </FooterDextopBottom>
      <FooterTabletBotWrapp>
        <FooterLegalList>
          <FooterLegalItem>Политика конфиденциальности</FooterLegalItem>
        </FooterLegalList>
        <FooterCopyright>
          © 2025 Affix Global Все права защищены
        </FooterCopyright>
      </FooterTabletBotWrapp>
    </FooterTabletContainer>
  )
}

export default FooterTablet
