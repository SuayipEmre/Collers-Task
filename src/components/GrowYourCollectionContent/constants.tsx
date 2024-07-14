import AmetFringillaIcon from "@/icons/AmetFringillaIcon";
import AmetNibhIcon from "@/icons/AmetNibhIcon";
import CrasEgetIcon from "@/icons/CrasEgetIcon";
import RightArrowIcon from "@/icons/RightArrowIcon";
import RocketIcon from "@/icons/RocketIcon";
import SearchIcon from "@/icons/SearchIcon";
import SedVelitIcon from "@/icons/SedVelitIcon";

type ListItemsTypes = {
    id: number,
    icon: React.ReactNode,
    text: string,
    arrowIcon?: React.ReactNode
}

export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 0
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 0
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const ListItems: ListItemsTypes[] = [
    {
        id: 0,
        icon: <SearchIcon />,
        text: 'Bibendum tellus',
        arrowIcon: <RightArrowIcon />
    },
    {
        id: 1,
        icon: <CrasEgetIcon />,
        text: 'Cras eget',
    },
    {
        id: 2,
        icon: <RocketIcon />,
        text: 'Dolor pharetra',
    },
    {
        id: 3,
        icon: <AmetFringillaIcon />,
        text: 'Amet, fringilla',
    },
    {
        id: 4,
        icon: <AmetNibhIcon />,
        text: 'Amet nibh',
    },
    {
        id: 5,
        icon: <SedVelitIcon />,
        text: 'Sed velit',
    },
]