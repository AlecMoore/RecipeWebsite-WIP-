import React from "react";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as ImIcons from "react-icons/im";
import * as GiIcons from "react-icons/gi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Top Cuisines",
    path: "/TopCuisines",
    icon: <BsIcons.BsFillSignpost2Fill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Italian",
        path: "/TopCuisines/Italian",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Indian",
        path: "/TopCuisines/Indian",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav",
      },
      {
        title: "Mexican",
        path: "/TopCuisines/Mexican",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Chinese",
        path: "/TopCuisines/Chinese",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "French",
        path: "/TopCuisines/French",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Mediterranean",
        path: "/TopCuisines/Mediterranean",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "South-East Asian",
        path: "/TopCuisines/South-EastAsian",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Top Recipes",
    path: "/TopRecipes",
    icon: <MdIcons.MdMenuBook />,
  },
  {
    title: "Meals",
    path: "/Meals",
    icon: <ImIcons.ImSpoonKnife />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Breakfast",
        path: "/Meals/Breakfast",
        icon: <BsIcons.BsEggFried />,
      },
      {
        title: "Lunch",
        path: "/Meals/Lunch",
        icon: <GiIcons.GiSandwich />,
      },
      {
        title: "Dinner",
        path: "/Meals/Dinner",
        icon: <GiIcons.GiHotMeal />,
      },
      {
        title: "Snacks",
        path: "/Meals/Snacks",
        icon: <GiIcons.GiChocolateBar />,
      },
      {
        title: "Drinks",
        path: "/Meals/Drinks",
        icon: <BiIcons.BiDrink />,
      },
    ],
  },
  {
    title: "About us",
    path: "/About",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];