import React from 'react';

class GoogleAuth extends React.Component {

  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '979890357297-329dk6bf3b65b7f710hbcbomgocqnht5.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignIn = () => {
    this.auth.signIn();
  }

   onSignOut = () => {
    this.auth.signOut();
  }  

  renderAuthButton() {

    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className='ui red google button'>
          <i className="google icon"></i>
          <span>Sign Out</span>
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className='ui red google button'>
          <i className="google icon"></i>
          <span>Sign In with Google</span>
        </button>
      )
    }
  }

  render() {

    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )

  }
}

export default GoogleAuth;