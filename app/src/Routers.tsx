import {IndexComponent as DemoIndexComponent} from './components/demo/IndexComponent';
import {IndexComponent as TutorialIndexComponent} from './components/tutorial/IndexComponent';

const Routes=  [
  {
    path: '*/tutorial',
    exact: true,
    children: <TutorialIndexComponent />
  },
  {
    path: '*/',
    exact: true,
    children: <DemoIndexComponent />
  },
];

export default Routes;
