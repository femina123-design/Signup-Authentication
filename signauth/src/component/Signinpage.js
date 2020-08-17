import React, { Component } from 'react';
import userService from '../service/userService';

class SignIn extends Component {
  constructor(props) {
    super(props)

    userService.logout();

    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // onSuccessfulLogin(data) {
  //   debugger;
  // }

  // onLoginFailure = (errorData) => {
  //   this.setState(
  //     {
  //       error: errorData
  //     }
  //   );
  // }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password, returnUrl } = this.state;

    // stop here if form is invalid
    if (!(username && password)) { // if both are empty return(stop executing after  37line)
      return;
    }

    this.setState({ loading: true });
    userService.login(username, password)
      .then(
        // function (data) {
        //   debugger;
        // }


        user => {
          const { from } = this.props.location.state || { from: { pathname: "/" } }; //left part is given more weightage,any1 of them should be true
          this.props.history.push(from);
          this.setState({ loading: false });
        },
        error => this.setState({ error, loading: false })
      ).catch(function(error)
      {
        debugger;
      }
      )


}


render() {
  return (<div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img src="dist/img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle" />
            </div>

            <div class="card card-primary">
              <div class="card-header"><h4>Login</h4></div>

              <div class="card-body">
                <form method="POST" onSubmit={this.handleSubmit} action="#" class="needs-validation" novalidate="">

                  <div className={'form-group' + (this.state.submitted && !this.state.username ? ' has-error' : '')}>
                    <label htmlFor="username">User Name</label>
                    <input type="text" className="form-control" required name="username" value={this.state.username} onChange={this.handleChange} />
                    {(this.state.submitted && this.state.username.length == 0) ? <div className="invalid-feedback">Username is required</div> : null
                    }
                  </div>

                  <div className={'form-group' + (this.state.submitted && !this.state.password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" required name="password" value={this.state.password} onChange={this.handleChange} />
                    {this.state.submitted && !this.state.password &&
                      <div className="invalid-feedback">Password is required</div>
                    }
                  </div>

                  <div class="form-group">
                    <button onClick={this.loginHandler} type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                      Login
                        </button>
                  </div>
                </form>
                <div class="text-center mt-4 mb-3">
                  <div class="text-job text-muted">Login With Social</div>
                </div>
                <div class="row sm-gutters">
                  <div class="col-6">
                    <a class="btn btn-block btn-social btn-facebook">
                      <span class="fab fa-facebook"></span> Facebook
                        </a>
                  </div>
                  <div class="col-6">
                    <a class="btn btn-block btn-social btn-twitter">
                      <span class="fab fa-twitter"></span> Twitter
                        </a>
                  </div>
                </div>

              </div>
            </div>
            <div class="mt-5 text-muted text-center">
              Don't have an account? <a href="auth-register.html">Create One</a>
            </div>
            <div class="simple-footer">
              Copyright &copy; Stisla 2018
                </div>
          </div>
        </div>
      </div>
    </section>
  </div>)
}

}
export default SignIn;

