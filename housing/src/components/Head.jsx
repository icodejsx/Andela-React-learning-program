

// eslint-disable-next-line react/prop-types
const Head = ({ logo, headingtext }) => {
    return (
        <header className=' flex w-full justify-center items-center'>
            <div>
                <img src={logo} className='w-32' />
            </div>
            <h1 className="text-2xl">
                {headingtext}
            </h1>

        </header>
    );
}

export default Head;
