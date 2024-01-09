import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://elonnativesystem.com/" target="_blank" rel="noopener noreferrer">
          CoreUI
        </a>
        <span className="ms-1">&copy; 2023 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://elonnativesystem.com/" target="_blank" rel="noopener noreferrer">
  CarTech Industries
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
