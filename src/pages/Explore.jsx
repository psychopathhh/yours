import { useDispatch } from 'react-redux'
import { genres } from '../assets/constants'
import { selectGenreListId } from '../redux/features/playerSlice'
import { Link } from 'react-router-dom'
import { TopPlay } from '../components'

const Explore = () => {
    const dispatch = useDispatch()
    return (
        <div className='xl:flex gap-20'>
            <div className='flex flex-1 h-fit flex-col xl:mb-[180px] mb-5'>
                <div className='w-full flex flex-col justify-between items-center mt-4 mb-10'>
                    <h2 className='font-bold text-3xl text-white mb-10'>Explore</h2>
                    <div className='flex flex-wrap justify-evenly gap-8 text-white text-3xl'>
                        {genres.map(genre => {
                            const color = genre.bgColor
                            return (
                                <Link to={`/genre-songs:${genre.value}`} key={genre.value}>
                                    <div onClick={() => {
                                        dispatch(selectGenreListId(genre.value))
                                    }} className={`cursor-pointer rounded sm:w-[200px] sm:h-[120px] w-[150px] h-[100px] ${color} flex justify-center items-center`}>{genre.title}</div>
                                </Link>)
                        })}
                    </div>
                </div>
            </div >
            <div className="xl:sticky relative flex flex-1 top-0 h-fit mb-[180px]">
                <TopPlay />
            </div>
        </div>
    )
}

export default Explore;