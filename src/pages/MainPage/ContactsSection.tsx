import tw from 'tailwind-styled-components';
import AboutHeading from '../../components/AboutHeading';
import AppButton from '../../components/AppButton';
import AppContainer from '../../components/AppContainer';
import {ReactComponent as TelegramIcon} from '../../assets/svg/telegram.svg';
import {ReactComponent as InstagramIcon} from '../../assets/svg/instagram.svg';
import {ReactComponent as FacebookIcon} from '../../assets/svg/facebook.svg';
import * as React from 'react';

const Main = tw.article`
    pt-[120px]
    pb-[173px]
    bg-white
`
const Title = tw(AboutHeading)`
    mb-8
    w-[535px]
`
const Description = tw.p`
    mb-8
    leading-6
    font-normal
    text-paragraph-100
    w-[585px]
`
const ContactsList = tw.ul`
    flex
    -ml-5
`
const ContactItem = tw.li`
    ml-5
`
const ContactButton = tw(AppButton)`
    px-8
`

const Icon = (Source: any) => tw(Source)`
    svg-icon
    w-[22px]
`

const Telegram = Icon(TelegramIcon);
const Instagram = Icon(InstagramIcon);
const Facebook = tw(FacebookIcon)`
    svg-icon
    w-[22px]
`

export default function ContactsSection() {
    return (
        <Main>
            <AppContainer>
                <Title>Лучший способ связаться со мной – это написать мне в Telegram - <span className="text-primary">@olegovich_uz</span></Title>
                <Description>Также, вы можете написать мне в социальных сетях, кроме того, там вы найдёте много полезного материала и сможете узнать о проводимых мною тренингах и мастер-классах.</Description>
                <ContactsList>
                    <ContactItem>
                        <ContactButton>
                            <Telegram/>
                            Telegram-канал
                        </ContactButton>
                    </ContactItem>
                    <ContactItem>
                        <ContactButton theme="gray" outline>
                            <Instagram/>
                            Instagram
                        </ContactButton>
                    </ContactItem>
                    <ContactItem>
                        <ContactButton theme="gray" outline>
                            <Facebook/>
                            Facebook
                        </ContactButton>
                    </ContactItem>
                </ContactsList>
            </AppContainer>
        </Main>
    )
}