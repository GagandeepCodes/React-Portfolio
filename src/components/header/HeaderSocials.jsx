import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/gagandeep-bhardwaj-986821225/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/GagandeepCodes" target='_blank'><BsGithub/></a>
        <a href="https://leetcode.com/gagandeepcodes/" target='_blank'><SiLeetcode/></a>
        <a href="https://auth.geeksforgeeks.org/user/gagandeepcodes/practice" target='_blank'><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials