import React from 'react';
import ReactDOM from 'react-dom';
import './search.css';

let users = [
  {
    name: "Leonard Rogers",
  },
  {
    name: "Walker Pace",

  },
  {
    name: "Lance Mcintyre",

  },
  {
    name: "Rudyard Conway",

  },
  {
    name: "Chadwick Oneal",

  },
  {
    name: "konark",
  },
  {
    name: "Griffith Perkins",

  },
  {
    name: "Lawrence Wheeler",
  },
  {
    name: "Preston Walker",

  },
  {
    name: "Simon Brewer",
  }
];

class Search1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: users
    });
    this.refs.search.focus();
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  render() {
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return user.name.toLowerCase().match(search);
      });
    }

    return (
      <div>
        <h3>Search your song</h3>
        <div>
          <input
            type="text"
            value={this.state.searchString}
            ref="search"
            onChange={this.handleChange}
            placeholder="type name here"
          />
          <ul>
            {_users.map(l => {
              return (
                <li>
                  {l.name} <a href="#">{l.email}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search1;
