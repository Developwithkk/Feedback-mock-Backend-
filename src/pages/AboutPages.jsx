import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPages() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app leave feedback</p>
        <p>version : 1.0.0</p>

        <p>
            <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPages
