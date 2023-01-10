import React from 'react'
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri'
import * as CiIcons from 'react-icons/ci'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Cuisines',
        path: '/Cuisines',
        icon: <IoIcons.IoFastFoodOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Recipies',
        path: '/TopRecipies',
        icon: <BiIcons.BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Meals',
        path: '/Meals',
        icon: <CiIcons.CiForkAndKnife />,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/MyAccount',
        icon: <RiIcons.RiAccountCircleLine />,
        cName: 'nav-text'
    },
]