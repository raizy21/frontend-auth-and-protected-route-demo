import { useNavigate } from 'react-router';
const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate(-1);
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[10rem] font-extrabold lg:text-[16rem] text-transparent bg-gradient-to-r from-[#6054e8] to-[#f8485e] bg-clip-text'>
                404
            </h1>
            <p className='text-2xl font-bold text-gray-700'>
                Page not found{' '}
                <span role='img' aria-labelledby='crying face'>
                    😢
                </span>
            </p>
            <button className='btn btn-secondary' onClick={handleGoBack}>
                Return to safety
            </button>
        </div>
    );
};

export default NotFound;
