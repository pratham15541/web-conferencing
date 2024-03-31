'use client'
import { ReactNode, useEffect, useState } from 'react';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
  } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { tokenProvider } from '@/actions/stream.actoins';
import Loader from '@/components/Loader';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

  
   const StreamvideoProvider = ({children}:{children:ReactNode}) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>()
    const {user,isLoaded} = useUser()
    useEffect(()=>{
        if(!isLoaded || !user) return;
        if(!apiKey) throw new Error('Stream API Key is required')

        const client = new StreamVideoClient({
            apiKey,
            user:{
                id:user?.id,
                name:user?.username || user?.id,
                image:user?.imageUrl,
            },

            tokenProvider,
        });
        setVideoClient(client);
    },[user,isLoaded])

if(!videoClient) return <Loader />

    return (
      <StreamVideo client={videoClient}>
       {children}
      </StreamVideo>
    );
  };
  export default StreamvideoProvider;