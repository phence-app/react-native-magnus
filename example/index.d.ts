type Toast = React.RefObject<
  import('@phence/react-native-magnus').SnackbarRef
>['current'];

interface Global {
  toast: Toast;
}

declare var global: Global;
