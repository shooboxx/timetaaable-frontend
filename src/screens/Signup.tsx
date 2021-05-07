import React from 'react'
import { SignupForm } from '../components/templates/SignupForm'
import { RightPane } from '../components/templates/RightPane'
import { LeftPane } from '../components/templates/LeftPane'
import OnboadingIllustration from './../assets/images/OnboadingIllustration.svg'


const Signup: React.FC = () => {
    return (
        <main className=' row side-by-side'>
            <LeftPane>
                <h2 className='heading heading-2'> On your own time </h2>
                <h4 className='body body-big'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet velit a augue sit mattis amet tellus. Amet aenean lacus, platea nisi, ac vestibulum tempor, fames.</h4>
                <img className='pane-left-img' src={OnboadingIllustration} alt="Welcome" />
            </LeftPane>
            <RightPane>
                <SignupForm />
                
            </RightPane>
            
        </main>
    )
}

export {Signup}