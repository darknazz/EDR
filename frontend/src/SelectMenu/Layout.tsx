import _isEmpty from "lodash/isEmpty";
import React, {ReactNode} from "react";
import {Navbar} from "flowbite-react/lib/esm/components/Navbar";
import {Dropdown} from "flowbite-react/lib/esm/components/Dropdown";
import AppLogo from "../images/logo.png";
import AppLogoWebp from "../images/logo.webp";
import Background from "../images/background.jpg";
import BackgroundWebp from "../images/background.webp";
import {useTranslation} from "react-i18next";
import {FR, GB, CZ, HU, DE, SK, IT, CN, PL, RU} from "country-flag-icons/react/1x1";

import SGCS from "../images/communities/sgcs.webp";
import SRDE from "../images/communities/srde.webp";
import SRFR from "../images/communities/srfr.png";
import SRIT from "../images/communities/srit.webp";
import OFPMafia from "../images/communities/ofpmafia.webp";
import {Button, DarkThemeToggle} from "flowbite-react";
import SubNavigation, { SubNavigationProps } from "../EDR/components/SubNavigation";
import { Link } from "react-router-dom";

const DropdownFlagIcon: React.FC<any> = ({children}) =>
    <span className="h-4 w-4 mr-4">
        {children}
    </span>

type Props = {
    children?: any,
    title: string,
    isWebpSupported: boolean,
    serverCode?: string,
}

export const SelectMenuLayout: React.FC<Props & SubNavigationProps> = ({children, title, isWebpSupported, navPreviousItem, navCurrentItem, navNextItem, serverCode}) => {
    const {t, i18n} = useTranslation();
    const background = isWebpSupported ? BackgroundWebp : Background;
    const appLogo = isWebpSupported ? AppLogoWebp : AppLogo;
    const isOnTrainsWindow = window.location.pathname.includes('trains');

    return <div className="text-primary">
        <Navbar fluid={true} className="sticky top-0 bg-slate-300 h-20 z-20">
            <Navbar.Brand href="/">
                <img src={appLogo} height={64} width={64} alt="App Logo"/>
                <span className="ml-4">EDR</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <div className="flex items-center space-x-4" >
                    <Dropdown label={<>Language ({i18n.language.toUpperCase()})</>} inline>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><FR /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("fr")}>
                            French
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><GB /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("en")}>
                            English
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><CZ /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("cz")}>
                            Czech
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><SK /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("sk")}>
                            Slovakian
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><HU /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("hu")}>
                            Hungarian
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><DE /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("de")}>
                            Deutsch
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><IT /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("it")}>
                            Italian
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><CN /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("cn")}>
                            Chinese
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><PL /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("pl")}>
                            Polish
                        </Dropdown.Item>
                        <Dropdown.Item icon={() => <DropdownFlagIcon><RU /></DropdownFlagIcon>} onClick={() => i18n.changeLanguage("ru")}>
                            Russian
                        </Dropdown.Item>
                    </Dropdown>

                    <Navbar.Link href="https://github.com/simrail/EDR" target="_blank">
                        Github
                    </Navbar.Link>
                    <Navbar.Link href="https://github.com/simrail/EDR/issues" target="_blank">
                        {t("NAVBAR_bugs")}
                    </Navbar.Link>
                </div>
                <Navbar.Link>
                    <DarkThemeToggle />
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>

        {_isEmpty(navPreviousItem) || _isEmpty(navCurrentItem) || _isEmpty(navNextItem) || (
            <SubNavigation 
                navPreviousItem={navPreviousItem}
                navCurrentItem={navCurrentItem}
                navNextItem={navNextItem}
            />
        )}
        <div style={{backgroundImage: "url('"+background+"')", backgroundSize: "cover"}} className="min-h-screen">
            <div className="pl-4 pt-4 flex justify-center mr-0 flex-wrap lg:justify-end lg:mr-16 lg:flex-nowrap">
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://forum.simrail.eu/">
                    <span className="inline-flex items-center "><img src={SGCS} height={16} width={16} alt="Community logo"/>&nbsp;Simrail Official</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://discord.com/invite/XgJpXpG2Eu">
                    <span className="inline-flex items-center "><img src={SGCS} height={16} width={16} alt="Community logo"/>&nbsp;Simrail Global</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://simrail.fr/discord">
                    <span className="inline-flex items-center "><img src={SRFR} height={16} width={16} alt="Community logo"/>&nbsp;Simrail France</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://discord.gg/DztnvgePXw">
                    <span className="inline-flex items-center "><img src={OFPMafia} height={16} width={16} alt="Community logo"/>&nbsp;OFPMafia CZ/SK</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://discord.gg/A63hJphHQ4">
                    <span className="inline-flex items-center "><img src={SRDE} height={16} width={16} alt="Community logo"/>&nbsp;Simrail Germany</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://discord.gg/5cdpDv2nT8">
                    <span className="inline-flex items-center "><img src={SRIT} height={16} width={16} alt="Community logo"/>&nbsp;Simrail ITA</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0">
                    <span className="inline-flex items-center "><CN height={16} width={16}/>&nbsp;CN-BX-3N</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0" href="https://discord.gg/Kyte5PB6xf">
                    <span className="inline-flex items-center "><img src={SGCS} height={16} width={16} alt="Community logo"/>&nbsp;Simrail Russian Speaking</span>
                </Button>
                <Button size="xs" color="light" className="mx-2 my-2 lg:my-0">
                    <span className="inline-flex items-center "><PL height={16} width={16}/>&nbsp;Invis</span>
                </Button>
            </div>
            <h3 className="pt-8 text-center text-white text-3xl">{title}</h3>

            {serverCode ? (
                <div className="flex items-start justify-center max-w-screen min-h-screen">
                    <div className="p-8 flex flex-wrap max-w-screen justify-center content-start">
                        <ul className="w-full text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mb-8">
                            <li className="w-full">
                                <Link to={`/${serverCode}/trains`} className={`${isOnTrainsWindow ? 'active text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white' : 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'} inline-block w-full p-4 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-4 focus:ring-blue-300 focus:outline-none`} aria-current="page">Trains</Link>
                            </li>
                            <li className="w-full">
                                <Link to={`/${serverCode}/`} className={`${!isOnTrainsWindow ? 'active text-gray-900 bg-gray-100 dark:bg-gray-700 dark:text-white' : 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'} inline-block w-full p-4 rounded-lg sm:rounded-none sm:rounded-r-lg focus:ring-4 focus:outline-none focus:ring-blue-300`}>Stations</Link>
                            </li>
                        </ul>
                        {children}
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
        <div className="text-center p-4">
            {t("FOOTER_version")} 1.3 - {t("FOOTER_screenshots_by")} MilanSVK - {t("FOOTER_thanks")} ❤️ - {t("FOOTER_not_official")} - <a href="https://github.com/simrail/EDR">Github project</a>
        </div>
    </div>;
}