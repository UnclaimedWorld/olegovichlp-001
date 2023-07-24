import tw from "tailwind-styled-components";
import AppButton from "./AppButton";
import AppContainer from "./AppContainer";

const Header = tw.header`
    absolute
    left-0
    right-0
    top-[46px]
`
const Container = tw(AppContainer)`
    flex
    items-center
`
const Logo = tw.img`
    w-36
    h-6
    mr-auto
`
const List = tw.ul`
    flex
    mr-24
`
const Item = tw.li`
    mr-13
`

const LanguageSwitch = tw.ul`
    flex
    items-center
    text-paragraph-100
    mr-13
`
const LanguageItem = tw.li<{ active?: boolean }>`
    pl-2
    pr-2
    first:pl-0
    last:pr-0
    ${p => p.active ?? 'cursor-pointer'}
    ${p => p.active ? 'text-paragraph-300' : 'text-current'}
`
const LanguageSeparator = tw.div`
    w-[1px]
    h-5
    bg-border
`

const navigationLinks = [
    {
        name: 'Обо мне',
    },
    {
        name: 'Работа со мной',
    },
    {
        name: 'Статьи'
    }
]

export default function TheHeader() {
    return (
        <Header>
            <Container>
                <Logo src="/img/logo-site.svg"/>
                <nav>
                    <List>
                        { navigationLinks.map(link => <Item>{link.name}</Item>) }
                    </List>
                </nav>
                <LanguageSwitch>
                    <LanguageItem active>Ru</LanguageItem>
                    <LanguageSeparator/>
                    <LanguageItem>O'z</LanguageItem>
                </LanguageSwitch>
                <AppButton className="w-[132px]" outline theme="gray">Связаться</AppButton>
            </Container>
        </Header>
    )
}