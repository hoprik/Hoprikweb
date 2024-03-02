function Page(props: any) {
    const {children, anchor} = props;
    return <div className="page" id={anchor}>
        {children}
    </div>
}

export default Page