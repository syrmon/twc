import React from 'react'
import styles from './privacy.module.css'
import Navigation from '../../navigation/Navigation'
import NavHeader from '../../toolbox/navheader/NavHeader'
import PrivacyHeader from './PrivacyHeader'
import blackThinkWiseLogo from './../common/assets/svg/navigation-black-logo.svg'

const PrivacyHeaderDash = ({ headerText, isPrivacy }) => {
  return (
    <div>
      <NavHeader
        textColor={'nav-header-text-dark'}
        borderBgColor={'nav-header-border-dark'}
      />
      <Navigation
        logo={blackThinkWiseLogo}
        enable={false}
        textColor="text-dark"
        bgColor="bg-dark"
        isPrivacy={isPrivacy}
      />
    </div>
  )
}

export default PrivacyHeaderDash
