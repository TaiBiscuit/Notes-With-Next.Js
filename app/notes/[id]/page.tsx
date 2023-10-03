

async function getNote(noteId: string) {

    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/todos/records/${noteId}`,
        {
            next: { revalidate: 10 },
        }
    )
    const data = await res.json();
    return data
}


export default async function SpecificPage({params}: any) {
    
    const note = await getNote(params.id);

    return(
        <div className="singe-note-container">
            <div className="single-note-box">
                <h5 className="single-note-title">{note.title}</h5>
                <p className="single-note-text">{note.text}</p>
                <p className="single-note-date">{note.date}</p>
            </div>
        </div>
    )
}