import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
  TestInterface,
} from './counterSlice';
import styles from './Counter.module.css';
import { constants, kMaxLength } from 'buffer';

interface a {
  bbbb: string;
}

export const Counter: React.FC = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const test: TestInterface & a = {
    aaaa: 1,
    bbbb: 'asdf',
  };
  console.log(test);
  const aaa = {
    AA: 'aa',
    BB: 123,
  } as const;
  type Aaa = typeof aaa;
  type AAa = keyof Aaa;
  type AAA = Aaa['AA' | 'BB'];
  type AAAA = typeof aaa[keyof typeof aaa];
  type AAAAA = Aaa[keyof Aaa];
  type Foo = {
    num: number;
    someMethod(param: number): string;
  };
  const foo: Foo = {
    num: 3,
    someMethod: p => 'hoge' + p.toString,
  };
  console.log(typeof aaa);
  console.log(foo.someMethod(foo.num));
  const func = () => {
    // 処理を書く
  };
  console.log(func());
  type T = { hoge: number };
  type U = { fuga: boolean };
  type Hoge = T & U;
  let f: Hoge;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};
