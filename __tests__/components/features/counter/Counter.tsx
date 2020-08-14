import React from 'react';
import { shallow } from 'enzyme';
import { useSelector, useDispatch } from 'react-redux';
import { Counter } from '../../../../src/components/features/counter/Counter';

jest.mock('react-redux');
const useSelectorMock = useSelector as jest.Mock<number>;
const useDispatchMock = useDispatch as jest.Mock;

describe('Counter', () => {
  beforeEach(() => {
    useSelectorMock.mockReturnValue(10);
    useDispatchMock.mockReturnValue(jest.fn());
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders correctly', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toHaveLength;
  });
});
