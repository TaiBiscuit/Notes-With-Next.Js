import Link from 'next/link';
import styles from './Notes.module.css';
import CreateNote from './CreateNote';

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/todos/records') //Pocketbase REST API with paginate included
    { cache: 'no-store'}; 
    const data = await res.json()
    console.log(data)
    return data?.items as any[]; 
} 

export default async function NotesPages() {
    const notes = await getNotes(); 
    return(
        <div className={styles.container}>
            <h1>Notes</h1>
            <div className={styles.cards}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })} 
            </div>
            <CreateNote />
        </div>
    );
}

 function Note({note}: any) {   
    const { id, text, date } = note || {};

    return(
        <Link href={`/notes/${id}`}>
            <div className={styles.note}>
                <h5>{text}</h5>
                <p>{date}</p>
            </div>
        </Link>
    )
}