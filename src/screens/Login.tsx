import React from 'react'
import { LoginForm } from '../components/templates/LoginForm'
import { RightPane } from '../components/templates/RightPane'
import { LeftPane } from '../components/templates/LeftPane'
import OnboadingIllustration from './../assets/images/OnboadingIllustration.svg'


const Login: React.FC = () => {
    return (
            <main className='side-by-side'>
            <LeftPane styleNames={"brand-background"}>
                    <h2 className='display-text'> Doing business just got easier. </h2>
                    <h4 className='body body-big'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet velit a augue sit mattis amet tellus. Amet aenean lacus, platea nisi, ac vestibulum tempor, fames.</h4>

                {/* <img className='pane-left-img' src={OnboadingIllustration} alt="Welcome" /> */}
            </LeftPane>
            <RightPane>
                <LoginForm />
            </RightPane>
            </main>
            
    )
}

export {Login}