import {LucideProps} from "lucide-react";
import {ComponentType} from "react";

type IRoutes = {
    [key: string]: IRoute
};
type IRouteBase = {
    Icon?: ComponentType<LucideProps>; name: string; routes?: IRoutes; path: string;

};

export type IRoute = IRouteBase & Partial<{
    onClick: () => void; queryParams: string;

}>;

const routes: Readonly<IRoutes> = {
kafshet : {
name: 'Kafshet' ,path: '/kafshet' , routes : {
  birds: {
      name : 'birds' , path: '/kafshet/birds'
  },
        dogs: {
            name : 'dogs' , path: '/kafshet/dogs'
        },
        cats: {
            name : 'cats' , path: '/kafshet/cats'
        }



    }
  }

}
export default routes