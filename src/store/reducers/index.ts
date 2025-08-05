import { combineReducers } from 'redux';
import { AppActionType } from '../action-types/app.types';
import appReducers from './app.reducers';
import profileReducers from './profile.reducer';
import jobReducers from './job.reducers';
import footerReducers from './footer.reducers';
import skillReducers from './skill.reducers';
import resumeReducers from './resume.reducers';

const reducers = combineReducers({
  app: appReducers,
  profile: profileReducers,
  job: jobReducers,
  footer: footerReducers,
  skill: skillReducers,
  resume: resumeReducers
});

// type Action = {
//   type: any;
//   payload?: any;
// };

export type RootState = ReturnType<typeof reducers>;

export default (state: RootState | undefined, action: any) => {
  if (action.type === AppActionType.LOGOUT) {
    state = undefined;
  } else state = state;
  return reducers(state, action);
};
