import { h, render} from 'preact'
import Router from 'preact-router'
import {RandomEmoji} from './RandomEmoji'
import {Home} from './Home'
import './style.less'
import { MediumArticle } from './MediumArticle'
import { ProfilePicture } from './Profilepicture'

function Page ( props : { name : string, footer: string, path : string, children: any } ) {
    return (
        <div>
            <div className="page-header">
                <a href="/">Generate</a> → {props.name}
            </div>
            {props.children}
            <div className="page-footer">
                {props.footer}
            </div>
        </div>
    )
}

function Redirect ( props : {path : string, default : any} ) {
    window.location.href = props.path
    return <div/>
}

function Render () {

    return (
        <div>
            <Router>
                <Page 
                    name="Random Emoji" 
                    footer="Generate A Random Emoji Quickly And Easy!"
                    path="/emoji">
                    <RandomEmoji/>
                </Page>
                <Page 
                    name="Medium Article" 
                    footer="Generate A Draft Medium Article!"
                    path="/article">
                    <MediumArticle/>
                </Page>
                <Page 
                    name="AI Profile Picture" 
                    footer="Generate a profile picture with AI"
                    path="/ai-profile">
                    <ProfilePicture/>
                </Page>
                <Home path="/"/>
                <Redirect default path='/' />
            </Router>
        </div>
    )
}

render(<Render />, document.body)
