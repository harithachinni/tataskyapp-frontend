import React from 'react'

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="container h-100">
                <h1 className="my-5 text-white"><hr /></h1>
                <div className="row">
                    <div className="col-md-4 offset-md-1">
                        <div className="card text-center">
                            <div className="card-body p-5 card-title pointer btn" onClick={() => this.props.history.push('/login')}>
                                <h3><i className="fa fa-user"></i><br />Admin Login</h3>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default HomeComponent