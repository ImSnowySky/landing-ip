import React from 'react';
import { Warning } from './elements';

/*
  renders => [{
    condition => Boolean,
    view => ReactView,
  }]
*/

export const RenderByCondition = ({ renders = [], ...rest }) => {
  const currentRender = renders(rest).find(render => render.condition());
  if (!currentRender || currentRender.length === 0) return <Warning>No condition founded</Warning>;
  return React.cloneElement(currentRender.view, rest);
}