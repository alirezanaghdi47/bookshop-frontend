
const OtherLayout = ({children}) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 min-vh-100">

            {/* main */}
            <main>
                {children}
            </main>

        </div>
    );
};

export default OtherLayout;
