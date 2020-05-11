import React from 'react';
import './App.scss';
import TopBar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
  constructor(){
    super()
    this.state = {contacts: [], list: [], loading: false}
  }

  setContacts(contacts){
    this.setState({contacts})
  }

  async componentDidMount(){
    this.setState({loading: true})
    const contacts = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(value => value.json())
     this.setState({contacts, list: contacts, loading: false})
  }

  render() {
    return (
      <React.Fragment>
        <div className="app" data-testid="app">
          <TopBar/>
          <Filters list={this.state.list} contacts={this.state.contacts} setContacts={this.setContacts.bind(this)}/>
          {this.state.loading ? <div className="loading"></div> : <Contacts contacts={this.state.contacts}/>}
        </div>
      </React.Fragment>
    )
  }
}

export default App;
