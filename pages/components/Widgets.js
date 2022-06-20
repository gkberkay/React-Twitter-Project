//Projenin sağ kısmındaki bölgedir. Trendler,tweetler bölümünü yansıtır.
import React from 'react'
import {
    SearchIcon
} from '@heroicons/react/outline'

//Widgets npm'i çağırılır.
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed,
    TwitterVideoEmbed, 
} from 'react-twitter-embed';

function Widgets({}) {
    return (
        <div className='hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5'>
            <div className=' sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12'>
                <div className='flex items-center bg-[#202327] p-3 rounded-full relative'>
                    <SearchIcon className='text-gray-500 h-5 ' />
                    <input
                        className='bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full'
                        type="text"
                        placeholder="Search Twitter"
                    ></input>
                </div>

            </div>
            {/* Widgets'ların çağırıldığı bölge */}
            <div className='text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12'>
                <h4 className='font-bold text-xl px-4'>What's happening?</h4>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="saurabhnemade"
                    options={{ height: 400 }}
                />
                <button className='hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light'>
                    Show more
                </button>
            </div>
            <div className='text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12'>
                <h4 className='font-bold text-xl px-4'>Tweets</h4>
                <TwitterTweetEmbed
                    tweetId={'933354946111705097'}
                />
                <button className='hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light'>
                    Show more
                </button>
            </div>
            <div className='text-[#d9d9d9] space-y-3 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12'>
                <h4 className='font-bold text-xl px-4'>Video Tweets</h4>
                <TwitterVideoEmbed
                    id={'560070183650213889'}
                />
                <button className='hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light'>
                    Show more
                </button>
            </div>

            

        </div>


    );
}

export default Widgets