type Props = {
    text: string
}
export const FooterTextItem: React.FC<Props> = ({ text }) => {
    return (
        <p className=" text-base   font-normal leading-[22.4px] text-center xl:text-left  text-[#E2E8F0] py-3 gap-2">{text}</p>
    )
}

