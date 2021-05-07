import React from 'react'
import { LoginForm } from '../components/templates/LoginForm'
import { RightPane } from '../components/templates/RightPane'
import { LeftPane } from '../components/templates/LeftPane'
import OnboadingIllustration from './../assets/images/OnboadingIllustration.svg'


const Login: React.FC = () => {
    return (
        <main className=' row side-by-side'>
            <LeftPane>
                <h1> On your own time </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet velit a augue sit mattis amet tellus. Amet aenean lacus, platea nisi, ac vestibulum tempor, fames.</p>
                <img className='pane-left-img' src={OnboadingIllustration} alt="onYourOwnTime" />
            </LeftPane>
            <RightPane>
                <LoginForm />
            </RightPane>
            
        </main>
    )
}

export {Login}