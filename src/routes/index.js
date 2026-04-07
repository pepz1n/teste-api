import tarefaRoute from "./tarefaRoute.js";
import vetorRoute from "./vetorRoute.js";

function Routes(app) {
  tarefaRoute(app)
  vetorRoute(app)
}

export default Routes;