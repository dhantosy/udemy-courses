import React from 'react'
import { shallow } from 'enzyme'
import { App } from './App'
import { categories } from '../data/fixtures'

const props = { categories }

describe('App', () => {
  const app = shallow(<App {...props} />)

  
})
