import { useDispatch } from 'react-redux'
import { genres } from '../assets/constants'
import { selectGenreListId } from '../redux/features/playerSlice'
import { Link } from 'react-router-dom'
import { TopPlay } from '../components'
import { useEffect } from 'react'

const Explore = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const dispatch = useDispatch()
    return (
        <div className='xl:flex gap-20'>
            <div className='flex flex-1 h-fit flex-col xl:pb-[180px] pb-5'>
                <div className='w-full flex flex-col justify-between items-center mt-4 mb-10'>
                    <h2 className='font-bold text-3xl text-white mb-10 text-left'>Главное</h2>
                    <div className='flex flex-wrap justify-evenly gap-8 text-white text-3xl'>
                        {genres.map(genre => {
                            const color = genre.bgColor
                            const genreImg = genre.image
                            return (
                                <Link to={`/genre-songs:${genre.value}`} key={genre.value}>
                                    <div onClick={() => {
                                        dispatch(selectGenreListId(genre.value))
                                    }} className={`cursor-pointer rounded sm:w-[250px] sm:h-[250px] w-[220px] h-[220px] ${color} box-border py-6 flex flex-col justify-between items-center hover:brightness-75 transition-colors duration-1000`}>
                                        <div className={`w-[70%] h-[80%] bg-cover bg-center`} style={{ backgroundImage: `url(${genreImg})` }} />
                                        <p>
                                            {genre.title}
                                        </p>
                                    </div>
                                </Link>)
                        })}
                    </div>
                </div>
            </div >
            <div className="xl:sticky relative flex flex-1 top-0 h-fit pb-[200px]">
                <TopPlay />
            </div>
        </div>
    )
}

export default Explore;
