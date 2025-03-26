import HomeView from "../modules/dashboard/views/HomeView.vue";
import AboutView from "../modules/dashboard/views/AboutView.vue";

const routes = [{
  path: '/',
  name: 'Home',
  component: HomeView
},
{
  path: '/about',
  name: 'About',
  component: AboutView
}
]

export default routes;