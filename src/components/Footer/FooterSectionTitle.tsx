type Props = {
    title: string
}
export const FooterSectionTitle: React.FC<Props> = ({ title }) => {
    return (
        <h6 className=" text-base font-medium leading-[17.6px] text-center xl:text-left text-white gap-2 py-3">
            {title}
        </h6>
    )
}