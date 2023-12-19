import React from 'react'

import PropTypes from 'prop-types'

const AppComponent = (props) => {
  return (
    <>
      <div className={`app-component-container ${props.rootClassName} `}>
        <input
          type="text"
          placeholder={props.textinput_placeholder}
          className="app-component-textinput input"
        />
      </div>
      <style jsx>
        {`
          .app-component-container {
            display: flex;
            position: relative;
          }
          .app-component-textinput {
            align-self: flex-start;
          }
          .app-component-root-class-name {
            flex: 1;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
  textinput_placeholder: 'placeholder',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default AppComponent
