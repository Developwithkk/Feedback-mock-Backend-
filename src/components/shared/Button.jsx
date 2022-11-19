import PropTypes from 'prop-types'



function Button({type, version , isDisabled, children}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version : 'primary',
    type : 'button',
    isDisabled: false

}

Button.prototype = {
    children : PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    version: PropTypes.string

}
export default Button
