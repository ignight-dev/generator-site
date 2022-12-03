import { h } from "preact";

export function Home( props : any ) {

    return (
        <div className='container'>
            <h3 style={{textAlign: 'center'}}>
                Generate:
            </h3>
            <br/>
            <br/>
            <a href="/emoji" className='center'>
                <button>
                    🚀 Random Emoji
                </button>
            </a>
        </div>
    );
}