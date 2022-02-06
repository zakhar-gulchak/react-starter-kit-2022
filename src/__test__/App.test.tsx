import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import App from '../App'

jest.mock('react-dom')

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App />)

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
