import { h } from "preact";

export function Home( props : any ) {

    return (
        <div className='container'>
            <a href="/emoji" className='center'>
                <button>
                    🚀 Random Emoji
                </button>
            </a>
        </div>
    );
}