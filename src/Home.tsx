import { h } from "preact";

export function Home( props : any ) {

    window.document.title = "Generate For Me";

    return (
        <div className='container'>
            <h3 style={{textAlign: 'center'}}>
                Generate:
            </h3>
            <br/>
            <br/>
            <a href="/article" className='center'>
                <button style={{fontSize: 20}}>
                    📝 Medium Article
                </button>
            </a>
            <a href="/emoji" className='center'>
                <button style={{fontSize: 20}}>
                    🚀 Random Emoji
                </button>
            </a>
        </div>
    );
}