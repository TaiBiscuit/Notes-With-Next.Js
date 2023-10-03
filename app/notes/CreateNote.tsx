'use client'; //Tells NextJs to render only in the browser and not in the server


import { useState } from "react";
import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [date, setDate] = useState("");
    const router = useRouter();

    const submitNote = async () => {

        const today = new Date();
        const fullYear = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDay();
        setDate(`${fullYear} ${month} ${day}`)
        console.log(`${date} ${text} ${title}`)
        setText('');
        setTitle('');
        const data = {
            "title": title,
            "text": text,
            "date": date
        };

        const record = await pb.collection('todos').create(data);
       router.refresh(); 
    };

    return(
        <form onSubmit={
            (e: React.SyntheticEvent) => {
                e.preventDefault();
                submitNote()
            }}>
            <h2>Create your note</h2>
            <input type="text" placeholder="Title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
            <textarea placeholder="Content of the note" value={text} onChange={ (e) => setText(e.target.value)}></textarea>
            <button className="submit-btn">Submit</button>
        </form>
    )
}