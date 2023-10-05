import {useState} from 'react'
import { AiOutlineClose } from 'react-icons/ai'
const Message = () => {
    const [isVisible, setIsVisible] = useState(true);

    const hide = () =>{
        setIsVisible(false);
    }
  return (
    <div className='w-full h-full flex items-center justify-center bg-transparent fixed'>
        <div className='relative'>
            {isVisible? 
                <div>
                    <div className='bg-[#d3e880] w-[800px] h-[800px] rounded-lg'>
                        <h1>Join our Newsletter</h1>
                    </div>
                    <div className='absolute top-0 right-0' onClick={() => hide()}>
                    <AiOutlineClose className="text-3xl m-5 cursor-pointer"/>
                </div>
                </div> 
            : null}
        </div>
    </div>
  )
}

export default Message
