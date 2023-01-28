import { h } from "preact";
import { useState } from "preact/hooks";
import { Progressbar } from "./components/progressbar";

async function processImage ( inputFile : File) : Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsBinaryString(inputFile);

        reader.onload = function(event) {
            const result = event.target.result as string
            const base64 = btoa(result)
            const dataUrl = `data:${inputFile.type};base64,${base64}`
            resolve(dataUrl)
        };

        reader.onerror = function() {
            console.log("couldn't read the file");
            reject('')
        };
    })
}

async function makeRequestCall ( title : string ) {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
}

export function ProfilePicture() {

    window.document.title = "Generate AI-Basted Profile Picture";

    const [inputImage, setInputImage] = useState("");
    const [generating, setGenerating] = useState(false);
    const [results, setResults] = useState([] as any[])

    
    const makeRequest = async () => {
        setGenerating(true)
        await makeRequestCall(inputImage)
        setResults([inputImage, ...results])
        setGenerating(false)
    }

    return (
        <div className="container">
            <h3 style={{textAlign: 'center'}}>
                Generate AI Profile Picture
            </h3>
            <input type="file" id="img" name="img" accept="image/*" onInput={async v => {
                // @ts-ignore
                const file = v.target.files[0] as File
                const url = await processImage(file)
                setInputImage(url)
            }} />

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
                        Generated Results:
                    </h4>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            results.map((result, i) => {
                                return <div style={{cursor: 'pointer'}} onClick={() => {
                                    window.open(result, "_blank")
                                }}>
                                    <img src={result} width={150} style={{borderRadius: 10, margin: 10}} />
                                </div>
                            })
                        }
                    </div>
                </div>
            }
     
        </div>
        
    );
}