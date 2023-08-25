import QuizCreation from '@/components/QuizCreation'
import { getAuthSession } from '@/lib/nextAuth'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

export const metadata = {
    title : "QUIZ | QUIZMIFY",
}

const Quiz = async (props: Props) => {
    const session = await getAuthSession();
    if(!session?.user){
        return redirect('/')
    }
  return (
    <QuizCreation/>
  )
}

export default Quiz