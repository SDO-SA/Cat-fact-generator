import React , {useState , useEffect} from 'react'
import axios from 'axios';
import logo from '../assets/logo.png'

export default function Landpage() {
    //Initilaze useState and useEffect
    const [fact , setFact] = useState("");
    useEffect(()=>{
        getFact();
    },[])

    //getFact function to fetch out the data 
    const getFact= ()=>{
        axios.get("https://meowfacts.herokuapp.com/")
        .then((res)=>{
            setFact(res.data.data[0])
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
    // newFact function to fetch api for new data
    const newFact = () => {
        axios.get("https://meowfacts.herokuapp.com/")
        .then((res)=>{
            setFact(res.data.data[0])
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
        {/* Background colors */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"aria-hidden="true">
            <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC9F05] to-[#FF4E00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            />
        </div>
        {/* Main Page */}
        <div className='text-center mt-16 '>
            {/* Logo section */}
            <div className='m-auto'>
                <img src={logo} alt="" className='max-w-sm m-auto' />
                <h1 className="text-4xl  mb-6 font-bold tracking-tight text-gray-900 sm:text-6xl">Random <span className='text-orange-500'>Cat</span> Fact Generator !</h1>
                <h3>Explore captivating cat facts on our Random Cat Fact Generator website. Click for delightful surprises and share the joy with others.</h3>
            </div>
            {/* card section */}
            <div className=" max-w-sm lg:max-w-screen-sm p-6 m-auto mt-5 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    Here's a Fact
                </h5>
                {/* Fact text  */}
                <p className="mb-3 font-normal text-gray-700">
                    {fact}
                </p>
                <div className='space-x-4'>
                    {/* Generate fact button */}
                    <a
                        href=''
                        onClick={newFact}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                    >
                        Generate New Fact !
                        <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                        </svg>
                    </a>
                    {/* Share on X Button */}
                    <a
                        href={'https://twitter.com/intent/tweet?text='+fact}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300"
                    >
                        Share on Twitter
                    </a>
                </div>
            </div>
            {/* Footer and ofcourse my name on it xD */}
            <div>
                <footer className=''>Made By SDO-SA
                    <div className="giticon text-3xl"><a href="https://github.com/SDO-SA"><i class='fa fa-github-square'></i></a></div>
                </footer>
            </div>
        </div>
        
        {/* Background colors */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-43rem)]"aria-hidden="true">
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#EC9F05] to-[#FF4E00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}/>
        </div>
    </>
  )
}
