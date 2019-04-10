import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';

import '../App.css';
import pop from '../images/genre/pop.jpg';
import edm from '../images/genre/edm.jpg';
import rock from '../images/genre/rock.jpg';
import rap from '../images/genre/rap.png';

const GenreTile = () => {

    return(
        <div className = 'divgenre'>
          <div className = 'popCard'>
          <Link to='/searchpop'>
            <img className='artistimg' src={pop} alt = 'Pop Music' />
              <p className='namegenre'>POP</p>
          </Link>
          </div>
          <div className = 'rockCard'>
          <Link to='/searchrock'>
            <img className='artistimg' src={rock} alt = 'Rock Music' />
              <p className='namegenre'>ROCK</p>
          </Link>
          </div>
          <div className = 'edmCard'>
          <Link to='/searchedm'>
            <img className='artistimg' src={edm} alt = 'EDM' />
              <p className='namegenre'>EDM</p>
          </Link>
          </div>

        </div>
    )}

export default GenreTile;
