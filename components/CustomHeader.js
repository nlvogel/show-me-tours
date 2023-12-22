export default function Header({children, headerLevel, className}) {
    const CustomHeader = `${headerLevel}`
    return <CustomHeader className={className}>{children}</CustomHeader>
}