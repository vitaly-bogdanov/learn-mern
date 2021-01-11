import { FC, ComponentClass, FunctionComponent } from 'react';
import IRouteProps from '../interfaces/IRouteProps';


type TRouteInfo = {
  name: string
  path: string
  exact: boolean
  Page: FC<IRouteProps>
  Layout: FC | ComponentClass | FunctionComponent | null
  access: {
    guest: boolean
    user: boolean
  }
}

export default TRouteInfo