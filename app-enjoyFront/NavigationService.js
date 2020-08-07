import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

const onNavigate = [];

function navigate(routeName, params) {
  onNavigate.forEach((f) => {
    if (typeof f === 'function') {
      f(routeName, params);
    }
  });
  console.log('<routeName> ', routeName);
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

function getCurrentRoute() {
  if (navigator) {
    const { index } = navigator.state.nav;
    return navigator.state.nav.routes[index].routeName;
  }
  return null;
}

// add other navigation functions that you need and export them
export default {
  onNavigate,
  navigate,
  setTopLevelNavigator,
  getCurrentRoute,
};
