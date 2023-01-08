import { h } from "preact";
import { useState } from "preact/hooks";
import { Progressbar } from "./components/progressbar";

const hints = [
    "Why anchient sparta would be a good place to live today",
    "Why you should never use a computer",
    "Why spongebob is secretly communist",
    "Why my roomate needs to do the dishes",
    "Why I am a god and you are a mere mortal",
]

async function makeRequestCall ( title : string ) {

    const baseUrl = "https://6i5b3g7h5kmouou3hdzbsjstyy0uwpbo.lambda-url.us-west-2.on.aws/"
    const result = await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify({
            title : title
        })
    })
    console.log(result)
    console.log(result.body)
    const json = await result.json()
    return { title : title, url : json.url }

}

export function MediumArticle() {

    window.document.title = "Generate Medium Article";

    const [hint, setHint] = useState(hints[Math.floor(Math.random() * hints.length)]);
    const [inputValue, setInputValue] = useState("");
    const [generating, setGenerating] = useState(false);
    const [results, setResults] = useState([] as any[])

    const makeRequest = async () => {
        let i = inputValue
        if (!inputValue){
            i = hint 
        }
        setGenerating(true)
        const {title, url} = await makeRequestCall(i)
        setResults([{title, url}, ...results])
        setGenerating(false)
    }
    
    return (
        <div className="container">
            <h3 style={{textAlign: 'center'}}>
                Medium Article Title:
            </h3>
            <input placeholder={hint} value={inputValue} onInput={v => {
                //@ts-ignore
                setInputValue(v.target.value);
                setHint(hints[Math.floor(Math.random() * hints.length)]);
            }} />

            <div style={{marginBottom: 30}} />

            { 
                !generating && <div className="buttons">
                    <button className='button' onClick={ makeRequest }>Generate</button>
                </div>
            }

            {
                generating && <Progressbar text="Generating ... (May take up to 60s)"/>
            }       

            {
                results.length > 0 && 
                <div>
                    <div className="hr" />
                    <h4 style={{marginTop: 50}}>
                        Generated Articles:
                    </h4>
                    {
                        results.map((result, i) => {
                            return <div style={{cursor: 'pointer'}} onClick={() => {
                                window.open(result.url, "_blank")
                            }}>
                                <div key={i} className="paper">
                                    {result.title}
                                </div>
                            </div>
                        })
                    }
                </div>
            }     
            
        </div>
        
    );
}