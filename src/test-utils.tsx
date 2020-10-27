import React, { FC } from 'react';
import { render as rtlRender, RenderOptions, RenderResult } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StoreCreator } from 'redux';
import { rootReducer, RootState } from './ducks/store';
import { DeepPartial } from './types/helpers';
// Import your own reducer

interface Options extends RenderOptions {
  initialState?: DeepPartial<RootState>;
  store?: ReturnType<StoreCreator>;
}

// function render<Q extends Queries>(ui: React.ReactElement, options: RenderOptions<Q>): RenderResult<Q>;
function render(ui: React.ReactElement, options?: Omit<Options, 'queries'>): RenderResult;
function render(
  ui: React.ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState as RootState),
    ...renderOptions
  }: Omit<Options, 'queries'> = {},
): RenderResult {
  const Wrapper: FC = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
