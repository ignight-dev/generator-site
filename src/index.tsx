import { h, render} from 'preact'
import Router from 'preact-router'
import {RandomEmoji} from './RandomEmoji'
import {Home} from './Home'
import './style.less'

function Page ( props : { name : string, path : string, children: any } ) {
    return (
        <div>
            <div className="page-header">
                <a href="/">Generate</a> → {props.name}
            </div>
            {props.children}
        </div>
    )

}

function Render () {
    return (
        <div>
            <Router>
                <Page name="Random Emoji" path="/emoji">
                    <RandomEmoji/>
                </Page>
                <Home path="/"/>
            </Router>
        </div>
    )
}

render(<Render />, document.body)
