import AddContact from "../pages/AddContact/AddContact";
import Contacts from "../pages/Contacs/Contacts";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const routesConfig: { path: string, exact?: boolean, component: any }[] = [
      {
            path: '/',
            exact: true,
            component: Contacts
      },
      {
            path: '/add-contact',
            component: AddContact
      },
      {
            path: '*',
            exact: true,
            component: NotFoundPage
      }
]