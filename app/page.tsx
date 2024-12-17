"use client";

import React from 'react'
import { getChats } from './_actions/chat';
import { db } from '@/db/db';
import { chatTable } from '@/db/schema/chat';
import { migrate } from '@/db/migrate';

type Props = {}

export default function Page({}: Props) {
    const [chats, setChats] = React.useState([])

    const getChatSessions = async () => {
        const response = await getChats()
        console.log({response})
        setChats(response)
    }
    React.useEffect(() => {
        migrate();
        getChatSessions()
    }, [])

    const createChat = async () => {
        const created = await db.insert(chatTable).values({summary: "New Chat"}).returning()
        console.log(created)
    }

  return (
    <div>
        <h1>Page</h1>
        <ul>{chats.map((chat: any) => (
            <li key={chat.id}>{chat.name ?? "Chat"}</li>
        )
        )}</ul>
        <button onClick={createChat}>Create Chat</button>
    </div>
  )
}