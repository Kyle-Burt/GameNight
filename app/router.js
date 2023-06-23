import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { PlayersController } from "./controllers/PlayersController.js";

export const router = [
  {
    path: '',
    controller: HomeController, PlayersController
  },
  // NOTE because we took router-view id out of HTML, we also need to remove the view property here
  // view: /*html*/`
  //   <div class="card">
  //     <div class="card-body">
  //       <p>Home Page</p>
  //       <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
  //     </div>
  //   </div>
  //   `
  {
    path: '#/about',
    controller: [AboutController],
    view: AboutView
  }
]