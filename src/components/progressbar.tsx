import { h } from "preact";

export function Progressbar( props : {text : string} ) {

    return (
        <div>
            <div style={{textAlign: 'center', color: 'grey', paddingBottom: 4}}>
                {props.text}
            </div>
            <div class="indeterminate-progress-bar">
                <div class="indeterminate-progress-bar__progress"></div>
            </div>
        </div>
    );
}