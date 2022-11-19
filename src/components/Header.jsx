import PropTypes from 'prop-types'

const headerstyles = {
    backgroundColor : "bgColor",
    color : 'textColor'
}

function Header({text}) {
  return (
    <header style={headerstyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>

    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor : "black",
    textColor : "red"

}

Header.propTypes = {
    text : PropTypes.string,
    bgColor : PropTypes.string,
    textColor : PropTypes.string

}

export default Header
