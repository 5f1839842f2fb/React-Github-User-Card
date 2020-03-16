import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, CardHeader } from 'reactstrap';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {

    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/5f1839842f2fb')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState(responseJson)
      })
  }

  render() {
    return (
      <div className="App" style={{'maxWidth': '15rem'}}>
        <Card>
          <CardHeader>{this.state.login}</CardHeader>
          <CardLink href={this.state.html_url}>
            <img width="100%" src={this.state.avatar_url} alt=""  />
          </CardLink>
          <CardBody>
            <CardSubtitle>{this.state.name}</CardSubtitle>
            <CardText>{this.state.bio}</CardText>
            <CardLink href={"https://github.com/5f1839842f2fb?tab=following"}>Following: {this.state.following}</CardLink>
            <CardLink href={"https://github.com/5f1839842f2fb?tab=followers"}>Followers: {this.state.followers}</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default App;
