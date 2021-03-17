import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/components/app/App';
import Adapter from "enzyme-adapter-react-16"
import { shallow, configure } from "enzyme";
import { createStore } from 'redux';
import allReducers from '../../src/redux/reducers/index';
import { Provider } from 'react-redux';

const storage = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

configure({adapter: new Adapter()});

describe("Tests of App.js", () => {

    it("do a simple snaptshot of App.js", () => {
        const provider = renderer.create(<Provider store={storage}><App/></Provider>)
    
        let snapShot = provider.toJSON();
        expect(snapShot).toMatchSnapshot();
    })

})
