/* eslint-disable no-undef */
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureMockStore from "redux-mock-store";
import TodoCard from "./index";

const mockStore = configureMockStore();
const store = mockStore({});

describe(`TodoCard rendering`, () => {
  it("renders the TodoCard", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <TodoCard id={1} type="personal" description="test" title="test" />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
